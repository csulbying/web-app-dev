# CSS Introduction

CSS is an abbreviation of Cascading Style Sheet. Because HTML document has a tree structure, some styles are applied top-down in a cascading way. Cascading also means a later style overrides previous styles.

As creating HTML documents, you should have a style design first before create styles.

## 1 CSS Syntax

CSS styles are defined as rules. Essentially you use CSS to apply some styles to some elements. Therefore a rule has two parts: a list of **selectors** and a declaration block that contains one more more declarations separated by a semicolon. A selector selects one or more elements and a declaration gives the style to be applied. Please check the CSS-tricks article [how css selects work](https://css-tricks.com/how-css-selectors-work/) to get a good understanding.

For example: `header { color: red; }`. The `header` is a selector that selects all `<header>` elements. A declartion consists of a property name and a value. In this example, the property is `color` and the value is `red`. A declaration should be terminated by a semicolon `;`. Inside the curly brackts, you can define multiple declarations separated by `;`.

There are three places you can define styles: inline, embedded and external. Usually you should not use inline style because it mixed styles with content.

To define embedded style, add a `<style>` element in the `<head>` section. For example, we can define the following styles using the embedded styles.

```html
<style>
  header {
    color: red;
    background-color: #521751;
  }
</style>
```

Then you might be wondering what are the style properties and what are thier values. Again, MDN documents have the answers. The [CSS reference](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference) has a list of properties. There are several CSS tutorials in the middle of [MDN Tutorials page](https://developer.mozilla.org/en-US/docs/Web/Tutorials). However, the MDN documents are not easy to digest. The [CSS Tricks Almanac](https://css-tricks.com/almanac/) has much better explanation and good demos. [Its guides](https://css-tricks.com/guides/) are more readable and easier to follow.

## 2 More Styles

To change the text size of an element, use `font-size` property. To change `<h1>` text size and color, use `h1 { font-size: 20px; color: white;}`. Because the `<h1>` element is inside the `<header>` element, the more specific style has higher priority than those defined with `header` selector, therefore the `<h1>` has a yellow color. Please remove the `color: red;` in the `header` rule.

To remove the underline and set a black color of an anchor link, use `a { text-decoration: none; color: black;}`. Now the embedded styles are as the following:

```html
<style>
  header {
    background-color: #521751;
  }
  h1 {
    font-size: 20px;
    color: white;
  }
  a {
    text-decoration: none;
    color: black;
  }
</style>
```

Embedded styles has three main disadvantages: first, it makes the HTML file bigger and harder to manage; second, every time you want to change a style, you need to edit the HTML file even nothing is changed in HTML content. Third, the styles are only applied to the embedding file.

A better approach is to use external style files. Create a style file `style.css` in the project root folder. Then cut and paste all styles inside the `style` element to this file. To link the exteranl style file to the HTML file, create a `link` element like `<link rel="styleshteet" href="style.css">`. Also create a link element in the `contact/index.html`. In this file it is `<link rel="styleshteet" href="../style.css">` -- pay attention to the relative path in the `href` property.

## 3 Box Model

Open the `index.html` file in Chrome and open the Chrome Development Tools. In the "Styles" tab, select `<header>`, you can see the box model of CSS style.

![CSS box model](images/css-box-model.png)

The center part is the "content of the box". Then there is section called "padding" surrounding the content. Then "border" and "margin" sections.

Try to add some styles to see the box model:

```css
header {
  /* ... other styles */
  padding: 10px;
  border: 5px dashed red;
  margin: 10px;
}
```

Check the effects in HTML page and in Chrome Development Tools. Then copy the above box model styles to the `h1` selector and see the changes.

The `padding` property can take one, two or four values because it has four sides. One value applies to all sides. Two values such as `padding: 10px 20px;` will apply first value to top and bottom and apply the second value to right and left. If there are four values like `padding: 10px 20px 30px 40px;` then each value applies to each side in the order of top, right, bottome and left. The rule applies to all `padding`, `border` and `margin`.

Additionally, you can postfix `-top`, `-right`, `-bottom`, `-right` to specify the side of padding, border and margin. For example, `margin-right: 20px;` will add "20px" to the right margin.

Becuase the `<header>` element only has one `<h1>` element, it is reasonable to delete its styles and define all styles in the `h1` selector.

Now delete `font-size`, `border` and `margin`. Change padding as `padding: 10px`. Checking the box model in Chrome Development Tools, you can find there are still margins in the top and bottom of the `<h1>` element. These margins are added by browser's default style. To remove the margins, add `margin: 0` declaration.

To specify a background for the whole document, add `html { background-color: grey;}` to the style file. Then change it to use a `rgb(236, 236, 236)`. Now the style file is as the following:

```css
header {
  background-color: rgb(236, 236, 236);
}
h1 {
  background-color: #521751;
  padding: 10px;
  color: white;
  margin: 0;
}
a {
  text-decoration: none;
  color: black;
}
```

## 4 Classes

Now move the two paragraph in the main section into a "div" element. Move the two images into another "div" element. Delete the "ul" and "li" elements.

When you use the tag selector such as `div { background-color: #fa923f; }` the style is applied to all `<div>` element. If this is not what you want, use class to mark the elment that you want to apply the style. Add `class="triptext"` to the target elment and define a rule like this: `.triptext { background-color: #fa923f; padding: 3px; }`. The `.classname` matches all element that has a `class="classname"` property. An element can have multiple classes.

To specify a selector that is embeded in another selector, use `selector1 selctor2` syntax. It means `selector2` selected elements should be embeded in the `selector1` selected element. The `embeded` means the an elment is a child or a child's child and so on so forth of the outside element.

Add `.triptext p { background-color: white}`, you can see that only paragraphs inside the elment with a `triptext` class are white. Add `margin: 0;` to remove the margin between the two paragraphs.

Add class `tripimages` to the "div" element containing the two images.

Now change the "span" in footer as "p". Check that the text are in a new line.

It is better to use a class than a tag as a selector because you have more control with class. Add `class="page-title"` to the "h1" element and change the selector of `h1` to `.page-title`.

It is a convention to use `-` to separate lower-case words in HTML property name and values. It is called **kebab-casing**. HTML itself is case-insensitive. Change all combined names to use kebab casing. For example, `triptext` becomes `trip-text`.

## 5 Position

Position styles are used to put elements in a specified position. To make the title fixed at the top, i.e., don't scroll out of screen when you scroll down your page, you need to specify a "fixed" position. A fixed position also needs a location. Together, add `position: fixed; top: 0;` to the `.page-title` selector.

Now the title should be fixed at the top. Actually, a fixed element needs to define a "background-color" to hide the contents scrolled up -- try to remove the background color and see the effect.

The title is fixed but you want it to cover the whole width. add `width: 100%;` to the `.page-title` selector. Now the title looks better. However, the navigation section immediately follows page tile invisible -- it is is behind the page tile because a fixed element's space is available to other elements. There are different ways to sovle this issue.

One way is to check the height of the header using Chrome Dev Tools. Add a `class="fixed-bar"` to the "header" element. Then define a rule `.fixed-bar { height: 70px; }`. Because the header is not a fixed-positioin element, it reserved the space and the elements following it are put below it.

The browser adds a margin to the body element. To remove it, add `body { margin: 0 }` to the style file.

To move the tilte to the center of the page, add `text-align: center` to the `.page_title` selector.

Now add styles to the feedback paragraph. Adding `class="feedback"` to the element and `.feedback { background-color: #521751; color: white; text-align: center; }` to the style file.

The [CSS-Trick](https://css-tricks.com/almanac/properties/p/position/) has details for other position styles.

## 6 Display

### 6.1 Theory

This is explained in a [Youtube video](https://youtu.be/YS2bTVYBoK8) with [GitHub source code](https://github.com/academind/web-development-beginners-guide/tree/06.01-css-display-theory).

The display property allows you to change the flow layout of an element. Commons values are `block`, `inline`, `inline-block`, and `none`. The [MDN display doc](https://developer.mozilla.org/en-US/docs/Web/CSS/display) has the completed list of all values.

A block element can have a `width` property and a `height` property.

If you change display style to `inline`, then elements are displayed in one line with a width that is just enough to wrap their content. An `inline` element doesn't have a `width` property and a `height` property.

How could we make these inline elements to have width? the answer is to change their styles to `display: inline-block`. Now they can have both `height` and `width` properties.

When setting `display: none;`, the elements are invisible though their spaces are reserved in the page flow.

### 6.2 Web Site

To display the navigation list items in a one line, you add a class to the `nav` element, `class="navigation"` and style `.navigation li { display: inline; }`. Now the nav elements are in one line. However, they have different width.

To be able to set their width, change their style to `display: inline-block; width: 70px; background-color: yellow;`. Now they have the same width with yellow background color.

However, because the 2nd list item contains an anchor element, if you change anchor element style some where else, that style has higher priority. Try change `a` element style to `background-colr: red` to see the result. Therefore, we need to change the navigation selector to `.navigation li, .navigation a`. Then everything works as expected. The `.navigation a` selector is more specific, therefore has a higher priority, than the `a` selector.

To center the navigation, add `.navigation { text-align: center; }` to center align `inline` and `inline-block` child elements. To remove the padding on the left of the navigation and page title, add `padding: 0` to their style.

To associate the main trip text with their images, add the style `.trip-text p { display: inline-block; width: 50% }`. Also set `.trip-text { padding: 0}` to remove paddings. However, `50%` doesn't work because there is a gap between the two inline block elements. This issue can be solved easily with `display: flex` style.

To align footer texts and their images, add a class to the footer `div` elements a class `class="review-clients`. Then add style `.review-clients p, .review-clients img { display: inline }`. The text and its image are in one line. To make them vertical aligned, add `vertical-align: middle;` to the style.

## Project Code

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>Our First Webpage</title>
    <link rel="shortcut icon" href="images/favicon.png" />
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <header class="fixed-bar"><h1 class="page-title">Mike's World</h1></header>
    <nav>
      <ul class="navigation">
        <li>Home</li>
        <li><a href="contact/index.html">Contact</a></li>
      </ul>
    </nav>
    <main>
      <div class="trip-text">
        <p>My SF City Trip</p>
        <p>The California Landscape</p>
      </div>
      <div class="trip-images">
        <img src="images/sf.png" alt="Image of the San Francisco streets" />
        <img src="images/california.png" alt="Image of the California streets" />
      </div>
      <p class="feedback">Do people like my Page</p>
    </main>
    <footer>
      <div class="review-clients">
        <img src="images/image-max.png" alt="Image of Max" />
        <p>Max - Awesome page, great work, keep it up!</p>
      </div>
      <div class="review-clients">
        <img src="images/image-manu.png" alt="Image of Manu" />
        <p>Manu - Looks really nice, beautiful pictures!</p>
      </div>
    </footer>
  </body>
</html>
```

```css
html {
  background-color: rgb(236, 236, 236);
}

body {
  margin: 0;
}

a {
  text-decoration: none;
  color: black;
  background-color: red;
}

/*header*/

.fixed-bar {
  height: 70px;
}
.page-title {
  position: fixed;
  top: 0;
  width: 100%;
  height: 40px;
  background-color: #521751;
  color: white;
  padding: 10px 0;
  margin: 0;
  text-align: center;
}

/*nav*/
.navigation {
  text-align: center;
  padding: 0;
}

.navigation li,
.navigation a {
  display: inline-block;
  width: 70px;
  background-color: rgb(177, 177, 174);
}

/*main*/
.trip-text {
  background-color: #fa923f;
  padding: 0;
}

.trip-text p {
  background-color: white;
  margin: 0;
  display: inline-block;
  width: 50%;
}

.feedback {
  background-color: #521751;
  color: white;
  text-align: center;
}

/*footer*/
.review-clients p,
.review-clients img {
  display: inline;
  vertical-align: middle;
}
```
