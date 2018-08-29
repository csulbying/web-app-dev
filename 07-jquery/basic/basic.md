# jQuery Basics

First create an HTML file with the following content:

```html
<head>
    <title>jQuery Basics</title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="./basic.js"></script>
    <link rel="stylesheet" href="./basic.css">
</head>
<body>
    <header>
        <h1>jQuery Crash Course</h1>
    </header>
    <div id="container">

    </div>
</body>

```

Then create the `basic.js` file to make sure it works:

```js
$(myFunction)

function myFunction() {
    console.log('jQuery Basic')
}
```

Then create the `basic.css` file with the following content:

```css
body {
    font-size: 17px;
    font-family: arial;
    background: #f4f4f4;
    line-height: 1.5em;
}

header {
    background: #333;
    color: #fff;
    padding: 20px;
    text-align: centers;
    border-bottom: 10px;
}

#container {
    width: 90%;
    margin: auto;
    padding: 10px;
}
```

## 2 Selectors

Add the following content to the html body container element:

```html
<div id="container">
    <h1 id="heading1">Heading One</h1>
    <p id="para1">Para <span>One</span></p>
    <h1 class="heading2">Heading Two</h1>
    <p class="para2">Para <span>Two</span></p>
</div>
```

The page should display to headings and two paragraphs.

To hide all `h1` element, use `$('h1').hide()`. Then comment it out.

To target an element by id, use `$('h1#heading1').hide()` or `$('#heading1').hide()`. Then comment comment it out.

To target an element by class, use `$('h1.heading2').hide()` or `$('.heading2').hide()`. Then comment it out.

To target a child element, use `$('p span').css('color', 'red')`.

Add a list of items, three inputs and two links.

```html
<ul id="list">
    <li>List Item</li>
    <li>List Item</li>
    <li>List Item</li>
    <li>List Item</li>
    <li>List Item</li>
    <li>List Item</li>
    <li>List Item</li>
    <li>List Item</li>
</ul>
<input type="button" value="Button 1">
<input type="submit" value="Submit">
<input type="text">
<br>
<a href="google.com">Google</a>
<a href="apple.com">Apple</a>
```

Then change the color of the first item to be red. Use `$('ul#list li:first').css('color', 'red')`. Other list item selectors are `li:last`, `li:even`, `li:odd`, `li:nth-child(3)` (for the 3rd item) and `li:nth-child(3n)` (for every 3rd item).

Use `$(':text').hide()` to target a specific type.

Use `$('[href]').css('color', 'red')` to target an elment with `href` attribute.

To target an attribute with a specify value, use `$('[href="apple.com"]').hide()`.

To target everything, use `$('*').hide()`.