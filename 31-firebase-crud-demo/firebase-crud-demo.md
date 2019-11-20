# Firebase CRUD Demo

The Todo list demo is based on w3school's [How to create a to do list](https://www.w3schools.com/howto/howto_js_todolist.asp).

## The Plain JS Code

The original todo list code is a simplified solution to manage a todo list. The HTML code is as the following:

```html
<div id="myDIV" class="header">
  <h2>My To Do List</h2>
  <input type="text" id="myInput" placeholder="Todo task..." />
  <span class="addBtn" id="addBtn">Add</span>
</div>

<ul id="myUL">
  <!-- todo list items -->
</ul>
<script src="app.js"></script>
```

In the `app.js` file, it performs three simple tasks in about 50 lines of code.

### Task 1: Handling User Input

when a user click the button or press enter in the input box, run `appendTodo`, the code is as the following:

```js
const input = document.getElementById('myInput')
const addBtn = document.getElementById('addBtn')

const ENTER_KEY_CODE = 13
input.addEventListener('keyup', event => {
  if (event.keyCode === ENTER_KEY_CODE) {
    appendTodo()
  }
})
addBtn.addEventListener('click', appendTodo)
```

### Task 2: Append a Todo Item

The `appendTodo` function read the inpt text and create a todo item, then append the new todo item to the list.

```js
const todoList = document.getElementById('myUL')

function appendTodo() {
  const inputValue = input.value
  if (inputValue === '') {
    alert('Todo cannot be empty')
  } else {
    input.value = ''
    const todoItem = createListItem(inputValue)
    todoList.appendChild(todoItem)
  }
}

function createListItem(todoText) {
  const todoItem = document.createElement('li')

  // the todo text content
  const todo = document.createTextNode(todoText)
  todoItem.appendChild(todo)

  // the close symbol
  const span = document.createElement('SPAN')
  const txt = document.createTextNode('X')
  span.className = 'close'
  span.appendChild(txt)
  todoItem.appendChild(span)

  return todoItem
}
```

### Task 3: Complete and Hide a Todo Item

When a user clicks on a todo item, it marks it as `checked` by toggling a class value `checked`. The CSS will display a different style for the `checked` item.

When a user clicks on the `X` symbol of a todo item, the todo item is removed from the list.

Intead of two event listeners, only one listener on the to do list is defined. The `event.target` is used to determine if the list item or the close symbol is clicked.

```js
todoList.addEventListener('click', handleTodoClick)

function handleTodoClick(event) {
  const target = event.target
  if (target.tagName === 'LI') {
    event.target.classList.toggle('checked')
  } else if (target.tagName === 'SPAN') {
    const item = target.parentElement
    todoList.removeChild(item)
  }
}
```

## Store Data in Firebase

The above todo list management can only be used in one session. To keep the data across sessions, you should store the data permanently. Firebase realtime database `Cloud Firestore` is a good option. All tasks can be completed in about 100 lines of js code.

### Step 1: Setup a Firebase Project

In your Firebase console, create a project, for example, `is445-todo-list`. Disable Google Analytics, and register a web application named `is445-todo-list`, enable the `Firebase Hosting for this app`.

To use the Cloud Firestore, create a databasse for the new project. To make it simple, use `Start in test mode`.

### Step 2: Add Firebase Code

First, pull all html, css and js files to a `public` folder.

Then, add the following code before the `<script src="app.js"></script>`:

```html
<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="/__/firebase/7.4.0/firebase-app.js"></script>

<!-- use firestore database -->
<script src="/__/firebase/7.4.0/firebase-firestore.js"></script>

<!-- Initialize Firebase -->
<script src="/__/firebase/init.js"></script>
```

### Step 3: Save an Item to Firestore

Before check an item or delete an item, you want to make sure that the Firestore is the only source of truth, i.e., any changes should be made to the Firestore, then synchronize the HTML page view with the database.

To save an item to Firestore, you need to use a collection and add the item as the following:

```js
const dbCollection = firebase.firestore().collection('todos')

function appendTodo() {
  const inputValue = input.value
  if (inputValue === '') {
    alert('Todo cannot be empty')
  } else {
    input.value = ''
    saveTodo(inputValue)
  }
}

function saveTodo(todoText) {
  dbCollection
    .add({
      task: todoText,
      checked: false,
      timestamp: Date.now(),
    })
    .then(function(docRef) {
      console.log('Document written with ID: ', docRef.id)
    })
    .catch(function(error) {
      console.error('Error adding document: ', error)
    })
}
```

### Step 4 Load Data from Firestore

To synchronize the html view with the Firestore data, you should retrieve real time data changes. An important task is to keep some meta data as `data-attribute` in an list item. The most important meta-data is the doc reference id. The reference id is used to update and delete an item. The code is as the following:

```js
dbCollection.onSnapshot(docs => {
  todoList.innerHTML = ''
  docs.forEach(doc => createItemFromData(doc))
})

function createItemFromData(doc) {
  const refid = doc.id
  const data = doc.data()
  const todoItem = document.createElement('li')

  // set ref id
  todoItem.setAttribute('data-refid', refid)

  // save and set the checked class
  if (data.checked) {
    todoItem.setAttribute('data-checked', 'checked')
    todoItem.classList.add('checked')
  }

  // the todo text content
  const todo = document.createTextNode(data.task)
  todoItem.appendChild(todo)

  // the close symbol
  const span = document.createElement('SPAN')
  const txt = document.createTextNode('X')
  span.className = 'close'
  span.appendChild(txt)
  todoItem.appendChild(span)

  todoList.appendChild(todoItem)
}
```

### Step 4: Check an Item

Once the `refid` is store in a list item, it is easy to update the checked status.

```js
function handleTodoClick(event) {
  const target = event.target
  if (target.tagName === 'LI') {
    toggleChecked(target)
  } else if (target.tagName === 'SPAN') {
    const item = target.parentElement
    removeItem(item)
  }
}

function toggleChecked(listItem) {
  const refid = listItem.dataset.refid
  const docRef = dbCollection.doc(refid)
  if (listItem.dataset.checked === 'checked') {
    docRef.update({ checked: false })
  } else {
    docRef.update({ checked: true })
  }
}
```

### Step 4: Delete an Item

The delete operation is simple:

```js
function removeItem(listItem) {
  const refid = listItem.dataset.refid
  const docRef = dbCollection.doc(refid)
  docRef.delete()
}
```
