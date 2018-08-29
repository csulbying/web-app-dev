# Express and MongoDB CRUD Demo

## 1 Initial Setup

This tutorial shows how to create an express web app that has CRUD operations.

First, install `express-generator` command line to initialize a project.

`npm install -g express-generator`
`express crud-demo --view=ejs`

It creates a project in `crud-demo` folder. Inside the `crud-demo` folder, run `npm install` to install required packages. You can run `npm start` and see the initial web site.

Second, create a MongoDB account in `mlib.com`. The accounts has 500MB free space. Click `Create new` to create a new database with the free `SANDBOX` plan type. Give it a name such as `is445`. Then create a database user by clicking `Users` tab. The page shows the connections string like `mongodb://<dbuser>:<dbpassword>@ds163689.mlab.com:63689/is445`.

Then install `mongoose` database driver: `npm install -S mongoose`.

Then add the following code, right before the last line of `module.exports = app;`, to `app.js`:

```js
const mongoose = require("mongoose");

const user = process.env.MDB_USER;
const passwd = process.env.MDB_PASSWORD;

mongoose
  .connect(`mongodb://${user}:${passwd}@ds163689.mlab.com:63689/is445`)
  .then(() => console.log("connection successful"))
  .catch(err => console.error(err));
```

You should set enviornment variables `MDB_USER` and `MDB_PASSWORD` to use your MongoDB user account and password. To avoid setting in devolopment, you can use dotenv package by using `npm i -S dotenv` and create a `.evn` file in project root folder with the following content:

```sh
MDB_USER=your-mongodb-user
MDB_PASSWORD=your-mongodb-password
```

Add the following lines to the begenning of `app.js`

```javascript
// load env
if (process.env.NODE_ENV !== "production") {
  require("dotenv").load();
}
```

Finally, install `nodemon` using `npm install -g nodemon` and run it:
`nodemon`. You should see the output `connection sucessful`. Congratulations, you successfully connented to MongoDb.

## 2 Change Home Page

Change the `routers/index.js` to have the following code:

```js
router.get("/", function(req, res, next) {
  res.render("index", { title: "IS445 Demo" });
});
```

Add the following content to `views/index.ejs`:

```html
<p>Here is the link to
  <a href="users">users</a>
</p>
```

It is just a link to `/users`.

## 3 Create Mogoose Model

Create a `models` folder and create a `users.js` file in it.

```js
const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: String,
  address: String,
  position: String,
  salary: Number,
  updated_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model("User", UserSchema);
```

A mongoose model defines the schema of a collection. A collection is a set of records in MongoDb.

## 4 List Users

### 4.1 Create a List View

Create a `views/users/index.ejs` as the following:

```html
<!DOCTYPE html>
<html>
<head>
  <title>Employee List</title>
  <link rel='stylesheet' href='/stylesheets/style.css' />
  <script src="https://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
    crossorigin="anonymous"></script>
</head>

<body>
  <div class="container">
    <h3>
      <a href="/users/user">Create New User</a>
    </h3>
    <h1>User List</h1>
    <% if(users.length>0) { %>
      <table>
        <thead>
          <tr>
            <th>User Name</th>
            <th>Position</th>
            <th>Salary</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          <% for(var i=0; i<users.length;i++) { %>
            <tr>
              <td>
                <%= users[i].name%>
              </td>
              <td>
                <%= users[i].position%>
              </td>
              <td>
                <%= users[i].salary%>
              </td>
              <td>
                <a href="/users/user/<%= users[i]._id%>">
                  Edit
                </a>
              </td>
              <td>
                <button class="deleteButton" data-uid="<%= users[i]._id%>">
                  Delete
                </button>
              </td>
            </tr>
            <% } %>
        </tbody>
      </table>
      <% } else { %>
        <div>No users found.</div>
        <% } %>
  </div>
</body>

</html>
```

### 4.2 Create a Controller

Create a user controller file `controllers/user.js` as the following:

```js
const mongoose = require("mongoose");
const User = require("../models/user");

const userController = {};

userController.list = function(req, res) {
  User.find({}).exec(function(err, users) {
    if (err) {
      console.log("Error:", err);
    } else {
      res.render("users/index", { users });
    }
  });
};

module.exports = userController;
```

The controller list function finds all users from the backend database and pass it to the `index` view.

### 4.3 Create a Route Path

Change the `routes/users.js` to have the following content:

```js
const express = require("express");
const router = express.Router();

const user = require("../controllers/user");

// Get all users
router.get("/", user.list);

module.exports = router;
```

### 4.4 Test Run

Run the application and you should see `No users found` because there is not any users in the database.

## 5 Create a User

### 5.1 Create a View

Create a `views/users/create.ejs` as the following:

```html
<!DOCTYPE html>
<html>

<head>
  <title>Create a User</title>
  <link rel='stylesheet' href='/stylesheets/style.css' />
  <script src="https://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
    crossorigin="anonymous"></script>
  <script type="text/javascript" src="/javascripts/create_user.js"></script>
</head>

<body>
  <h3>
    <a href="/users">User List</a>
  </h3>
  <h1>Create New User</h1>
  <table>
    <tbody>
      <tr>
        <td>Name</td>
        <td>
          <input type="text" name="name" />
        </td>
      </tr>
      <tr>
        <td>Address</td>
        <td>
          <textarea name="address"></textarea>
        </td>
      </tr>
      <tr>
        <td>Position</td>
        <td>
          <input type="text" name="position" />
        </td>
      </tr>
      <tr>
        <td>Salary</td>
        <td>
          <input type="number" name="salary" />
        </td>
      </tr>
      <tr>
        <td colspan="2">
          <button id="createButton">Create User</button>
        </td>
      </tr>
    </tbody>
  </table>
</body>

</html>
```

### 5.2 Create JS Code

Create `public/javascripts/create_user.js` with the following content:

```js
$(() => $("#createButton").click(createUser));

function createUser() {
  const salaryVal = $("input[name=salary]")
    .val()
    .trim();
  const salary = parseInt(salaryVal, 10);

  const user = {
    name: $("input[name=name]")
      .val()
      .trim(),
    address: $("textarea[name=address]")
      .val()
      .trim(),
    position: $("input[name=position]")
      .val()
      .trim(),
    salary
  };

  const request = $.ajax({
    type: "post",
    contentType: "application/json",
    dataType: "json",
    data: JSON.stringify(user)
  });

  request.done(function(data) {
    console.log("creation done", data);
  });

  request.fail(function(jqXHR, textStatus, errorThrown) {
    console.log(jqXHR, textStatus, errorThrown);
  });
}
```

### 5.3 Create Controller Function

Create two controller functions in `controllers/user.js`:

```js
userController.edit = function(req, res) {
  res.render("users/create");
};

userController.create = function(req, res) {
  var user = new User(req.body);

  user.save(function(err, newUser) {
    if (err) {
      console.log(err);
      res.status(500);
      res.json(err);
    } else {
      console.log("Successfully created a user.");
      res.json(newUser);
    }
  });
};
```

Add the following two paths to `routes/users.js`

```js
// Save user
router.post("/user", user.create);

// Edit or create a user
router.get("/user/:id?", user.edit);
```

## 6 Edit a User

### 6.1 Create a View

Create a `views/users/edit.ejs` as the following:

```html
<!DOCTYPE html>
<html>

<head>
  <title>Edit user</title>
  <link rel='stylesheet' href='/stylesheets/style.css' />
  <script src="https://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
    crossorigin="anonymous"></script>
  <script type="text/javascript" src="/javascripts/edit_user.js"></script>
</head>

<body>
  <div class="container">
    <h3>
      <a href="/users">User List</a>
    </h3>
    <h1>Edit User</h1>

    <table>
      <tbody>
        <tr>
          <td>Name</td>
          <td>
            <input type="text" name="name" value="<%= user.name %>" />
          </td>
        </tr>
        <tr>
          <td>Address</td>
          <td>
            <textarea name="address">
              <%= user.address %>
            </textarea>
          </td>
        </tr>
        <tr>
          <td>Position</td>
          <td>
            <input type="text" name="position" value="<%= user.position %>" />
          </td>
        </tr>
        <tr>
          <td>Salary</td>
          <td>
            <input type="number" name="salary" value="<%= user.salary %>" />
          </td>
        </tr>
        <tr>
          <td colspan="2">
            <button id="updateButton">Update</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</body>

</html>
```

### 6.2 Create Edit Code

Create a js code file `public/javascripts/edit_user.js` with the following content:

```js
$(() => $("#updateButton").click(updateUser));

function updateUser() {
  const url = window.location.pathname;
  const userId = url.substring(url.lastIndexOf("/") + 1);
  console.log(userId);
  const salaryVal = $("input[name=salary]")
    .val()
    .trim();
  const salary = parseInt(salaryVal, 10);
  const user = {
    name: $("input[name=name]")
      .val()
      .trim(),
    address: $("textarea[name=address]")
      .val()
      .trim(),
    position: $("input[name=position]")
      .val()
      .trim(),
    salary
  };

  const request = $.ajax({
    type: "put",
    contentType: "application/json",
    dataType: "json",
    data: JSON.stringify(user)
  });

  request.done(data => console.log(data));
  request.fail(function(jqXHR, textStatus, errorThrown) {
    console.log(jqXHR, textStatus, errorThrown);
  });
}
```

### 6.3 Create Controller Function

Change the `userController.edit` function as the following:

```js
userController.edit = function(req, res) {
  const userId = req.params.id;

  if (userId) {
    User.findOne({ _id: userId }).exec(function(err, user) {
      if (err) {
        console.log("Error:", err);
      } else {
        res.render("users/edit", { user });
      }
    });
  } else {
    res.render("users/create");
  }
};
```

## 7 Delete User

### 7.1 Create JS Code File

Add a cript file link to `views/users/index.ejs` as `<script type="text/javascript" src="/javascripts/delete_user.js"></script>`.

Create this js code file `public/javascripts/delete_user.js` as the following:

```js
$(clickHandler);

function clickHandler() {
  $(".deleteButton").click(function() {
    const uid = $(this).attr("data-uid");
    console.log("delete: ", uid);
    deleteUser(uid);
  });
}

function deleteUser(uid) {
  const request = $.ajax({
    url: `/users/user/${uid}`,
    type: "delete",
    success: function(data) {
      console.log("delete done", data);
      window.location.reload();
    },
    error: function(jqXHR, textStatus, errorThrown) {
      console.log("error happend");
      console.log(jqXHR, textStatus, errorThrown);
    }
  });
}
```

### 7.2 Add Controller function

Add the following function to `controllers/user.js`:

```js
userController.delete = function(req, res) {
  const uid = req.params.id;
  User.remove({ _id: uid }, function(err) {
    if (err) {
      console.log(err);
    } else {
      console.log(`User ${uid} deleted!`);
    }
  });

  // the server should respond with data to fire jquery callback
  res.json({});
};
```

### 7.3 Add Router Path

Add `router.delete("/user/:id", user.delete);` to `routes/users.js`.
