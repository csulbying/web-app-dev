# Web Introduction

In this chapter we introduct the baic web concepts.

## How Does the Web Work

As a normal user, you use a browser to access a web site. Popular browsers are Chrome, Firefox, Safari and Microsoft Edge (old version is called IE -- Internet Explorer). A browser is also called a client.

You type a URL in an address bar in a browser, for example, "apple.com". You send an HTTP request to a web server. You can request different types of information such as a zip file. But normally you request an HTML file. The HTTP request is often a "GET" request. There are other request types such as "POST" to upload data and "DELETE" to delete some thing in the server.

If the "GET" request goes well, the server response with an HTML file and other things. One thing could be a CSS file -- the style of the web page. Another thing could be return is JavaScript code. The JavaScript has the interaction logic. CSS and JavaScript are optional.

Usually a web server need to store and retriev data from a database. To support many user access, the server can become very complicated.

Chrome is a good choice becuase it has very powerful dev tools. You can open it along the web page. In Chrome Development Tools, in the network tab, you can see the all the files/resources downladed from the server. You can see the CSS files and JavaScript code. You can see the request and response of network communication.

In the response or preview of network, you can see the structure of an HTML file. It has the following structure:

```html
<html>
  <head> </head>
  <body></body>
</html>
```

The string inside angle bracket such as `html`, `head`, `body` are called tags and a pair of start tag and end tag marks an HTML element. Element are organized in a tree structure and the top two levels are fixed.

You can check the page details to see many elments that are marked with different tags. The web page also has tags for the assoicated CSS and JavaScript files.

## Setup Development Tools

[Node.js](https://nodejs.org) is a JavaScript runtime that runs JavaScript directly in an operating system, i.e., outside a browser. In additon to run server side or clint JavaScript applications, it is often used to build and test JavaScript project. Please go to [Node.js](https://nodejs.org) to download and install the current version for your operating system.

When you install Node.js, you install the JavaScript runtime engine and a package management tool called [npm](https://www.npmjs.com/). npm is the package manager for JavaScript and the world’s largest software registry. It can be used to install JavaScript libraries and tools.

Run the command `npm install -g live-server` to install a live http server that automatically load a web page when there is a change. The `-g` option means that it is installed in a globe scope. You can use it anywhere in you command line because it is globally visible in the operating system.

In you project foler that has html, css and JavaScript file, type `live-server` and it serves files from that directory.

You should use IDE (Integrated Development Environment) to mange and edit your code respository. VS code is strongly recommended because of its rich features. The desired features including syntax highlights, auto format, file organization, esay navigation, and much more.

A helpful feature is `files.autoSave`. Click the setting icon and search `files.autoSave`. Double click the line and set its value to `"onFocusChange"`. This makes the VS code automatically saves files when the editor windows loses focus.

Let's create a new folder `basic-html-css` folder and open it using VS code. You also run `live-server` in this folder and it serves files from this folder.

## Create an HTML file

Let's create an `index.html` file in the VS code. It recognizes the file extension of `.html` and shows its file type icon as `<>` which means an HTML file.

According to HTML 5 standard, all HTML files should start with `<!DOCTYPE html>` -- a declartion tells the browser that it is an HTML 5 file. The next one is the root HTML element `<html></html>`. All contents must inside this pair of tags. A tag can have properties that give extra information for the web page. A common property for the `<html>` tag is the `lang` property that shows the language of the page content. You write it as `<html lang="en">`.

The next top level element is `<head>` that gives meta data about the web page. Meta data including the character set, page title, and more. There are a set of recommeded meta data elements as well as properties for those elements. It is hard to remember those tags, property names and properties values.

VS code has a helpful feature called `code emmet` that helps to generate code with less typing. In VS code, just type `!` and VS code shows an emmet abbreviation message, type a tab key to insert those text. In this case, the emmet generates a basic HTML file structure.

Change the `<title>` element text to `<title>Our First Web Page</title>`.

All contents should be inside the `<body>` element. Now the file should have the following content:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Our First Webpage</title>
  </head>
  <body></body>
</html>
```

## Semantic Elements and Document Structure

A semantic element is an element whose tag shows its structural intention in a document. For example, `<p>` means a paragraph, `<h1>` to `<h6>` means different level of headers. Other commonly used sementic tags inlucde `<header>` for page header, `<nav>` for navigation, `<main>` for main content, `<footer>` for page footer, `<img>` for an image, `<ul>` for an unordered list, and more.

There are two non-sementic elements: `<div>` is for a generic block element that shold be started in a new line and is separated from other elements. `<span>` is for an inline element that stays in the same line with its neighbore inline elments.

The [MDN web docs](https://developer.mozilla.org/en-US/) has a set of comprehensive documents for web developmenet. The [Introduction to HTML](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML) is a good starting point. The [HTML element reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element) has a complete list of all tags.

Before you write an HTML page code, it's always a good idea to start with some structure design. Try to use as many semantic tags as possible. A high level structure is recommended in [Document and website structure](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Document_and_website_structure).

A common structure consists of `<header>` for page header, `<nav>` contains a set of navigation links, the `<main>` for main content and `<footer>` for page footer. In side the `<main>` you can have many `<article>`, `<section>`, and `<p>` elements. Side contents are put in `<aside>` elements.

Edit the `index.html` file to have the following body content:

```html
<body>
  <header><h1>Mike's World</h1></header>
  <nav>
    <ul>
      <li>Home</li>
      <li>Contact</li>
    </ul>
  </nav>
  <main>
    <p>My SF City Trip</p>
    <p>The California Landscape</p>
    <p>Image 1</p>
    <p>Image 2</p>
    <p>Do people like my Page</p>
  </main>
  <footer>
    <p>Image Max - Awesome page, great work, keep it up!</p>
    <p>Image Manu - Looks really nice, beautiful pictures!</p>
  </footer>
</body>
```

If your code doesn't have a neat look, use the VS code auto-format function. Right click inside the edito window and click `Format Document`.

## Dive Deep into HTML

You can use Chrome Development Tools to check and navigate the document structure. It clearly shows the above elments as block elements because each element is separated from other element in its own block -- a rectangle area of web page. Each block element starts in a new line. You can find the list of block-level element in the [MDN Block-level elements page](https://developer.mozilla.org/en-US/docs/Web/HTML/Block-level_elements). An inline element doesn't start in a new line. The [MDN Inline element page](https://developer.mozilla.org/en-US/docs/Web/HTML/Inline_elements) has the list of all inline elements. Common inline elements include `<a>` for link element, `<img>` for image, `<cite>` for citation, `<code>` for program code, and `<span>` for generic inline element.

Try to change the `<p>` element in `<main>` to `<span>` element. You must change both the start and end tags to make it a correct web document. Check teh visual effect in Chrome Development Tools.

Make navigation list item to contain a link elment. Use `href` property to specify a hyper link. The `href` can be an abosulte path for external links or a relatvie path for local path.

Try to create a subfolder called `contact` and create a `index.html` file there. In the `contact/index.html` file, you can have a link as `<a href="../index.html">Home</a>` to link back to the home page.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Our First Webpage</title>
  </head>
  <body>
    <header><h1>Mike's World</h1></header>
    <nav>
      <ul>
        <li><a href="../index.html">Home</a></li>
        <li>Contact</li>
      </ul>
    </nav>
  </body>
</html>
```

In the home page, use `<a href="contact/index.html">Contact</a>` to link to the contact file.

Create an `images` folder and add images to the folder. Use the `<img>` to add image elment. It has a `src` property to link to an image file. It is always a good idea to provide a text description using `alt` property to an `<img>` elment because it meets the accessibility requirement. The code for an image link is like `<img src="images/california.pn" alt="Image of California">`.

The final code of the `index.html` body is as the following:

```html
<body>
  <header><h1>Mike's World</h1></header>
  <nav>
    <ul>
      <li>Home</li>
      <li><a href="contact/index.html">Contact</a></li>
    </ul>
  </nav>
  <main>
    <ul>
      <li>
        <p>My SF City Trip</p>
        <div><img src="images/sf.png" alt="Image of the San Francisco streets" /></div>
      </li>
      <li>
        <p>The California Landscape</p>
        <div><img src="images/california.png" alt="Image of the California streets" /></div>
      </li>
    </ul>
    <p>Do people like my Page</p>
  </main>
  <footer>
    <div>
      <img src="images/image-max.png" alt="Image of Max" />
      <span>Max - Awesome page, great work, keep it up!</span>
    </div>
    <div>
      <img src="images/image-manu.png" alt="Image of Manu" />
      <span>Manu - Looks really nice, beautiful pictures!</span>
    </div>
  </footer>
</body>
```

As shown above, `<div>` is used to group some elments into a generic block elment. You can investigate and navigate the document structure using Chrome Development tools.

To make it a better web site, add `favicon` inside the `<head>` element using code `<link rel="shortcut icon" href="images/favicon.png">`. You need to define `rel` for relationship and `href` for the image path. When add it in the `contact/index.html`, use a correct relative path to the image file.

Finally, you can use `<!-- Your comments -->` to add comments. It is always a good idea to add comments to describe special development notes to your HTML file.
