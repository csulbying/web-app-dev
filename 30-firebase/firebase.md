# Firebase

[Firebase](https://firebase.google.com/) is a comprehensive app development platform that include data storage, authentication, analytics, monitoring and many cloud services. In this tutorial you will use the [Cloud Firebase](https://firebase.google.com/products/firestore/) for data storage and access, as well as its hosting service.

This tutorial is based on the [Firebase web Doc](https://firebase.google.com/docs/web/).

## 1. Setup

After signing into Firebase using your Google account, you need to [create a Firebase project](https://firebase.google.com/docs/web/setup).

Step 0, in your web project root folder, create a `public` folder and create an `index.html` in the `public` folder. All web source files(html, css and JavaScript) should be created in this folder.

Step 1, in the [Firebase console](https://console.firebase.google.com/), click **Add Project**, then select or enter a **Project name**, click continmue.

Step 2, Uncheck `Enable Google Analytics for this project` option. Click continue, your project will be create in seconds. Click continue to see the project console.

Step 3, click the web icon **`</>`** to regist your web application. Add a nickname and check the option of **Also setup Firebase Hosting for this app**. Click **Register app** button. Then click **Next**.

![regist web app](./imgs/regist-app.png)

Step 4, as instructed, "Copy and paste these scripts into the bottom of your `<body>` tag, but before you use any Firebase services". The sample code is as the foolowing. Click **Next**.

```html
<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="/__/firebase/7.3.0/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
    https://firebase.google.com/docs/web/setup#available-libraries -->

<!-- Initialize Firebase -->
<script src="/__/firebase/init.js"></script>
```

Step 5, Install Firebase CLI. Run `npm install -g firebase-tools`.

Step 6, Deploy to Firebase Hosting. In your local web applicaiton root, run `firebase login` to login first. Then run `firebase init` to intialize the setup for local project. The `.firebaserc` file specifies the Firebase project to be used for this application.

Replace the content of `firebase.json` witht the following settings:

```json
{
  "hosting": {
    "public": "public",
    "ignore": ["firebase.json", "**/.*", "**/node_modules/**"]
  }
}
```

Run `firebase serve` to check that your page works correctly. Then run `firebase deploy` to deploy the application. Copy the web URL and check your page is online.

## 2. User Cloud Firestore

add the firestoe sdk to the html page, right before the the
`<script src="/__/firebase/7.3.0/firebase-firestore.js"></script>`
