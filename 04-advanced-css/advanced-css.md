# Advance CSS

This section adds more CSS styles to your web page.

## 1 Flexbox

This is based on the [Flexbox Youtube video](https://youtu.be/vgNW-uuVUYo).

Two inline-block elements have a gap between them. Therefore, even each element takes 50% of the width, they are still displayed in two lines. Flexbox can solve this issue easily.

To display the trip text in the same row, add `.trip-text { display: flex;}` to turn their parent element into a flex container. The nested elements are flex items. Remove the `display: inline-block` in `.trip-text p`, the two main text paragraphs should be in one line. Add `background-color: purple; color: white;` to the `trip-text p` selector to see the effect. Add `text-align: center` to center the text.

To display the images in the same row, add `.trip-images { display: flex;}` to turn their parent element into a flex container. Now they are in the same row.

To make the images responsive to the screen size changes, add declaration: `.trip-images img { width: 50%; height: 100%; }`. The images now should grow and shrink when screen grwo and shrink.

Change the footer style to `.review-clients { display: flex; }`. Now the two paragraphs are aligned vertically at the top. To fix it, add the `align-items: center;` declaration to the container.

The two images are too big, change its style to `.review-clients img { width: 120px; }`.

Add `border: 1px solid black; background-color: white; margin: 10px;` to the `.review-clients` selector to give some decorations.

To center the feedback image and assoicated text, add `justify-content: center` to the `.review-clients` flex container.

To make the image text wrap, define a width for it `.review-clients p { width: 350px; }` and add `flex-wrap: wrap;` to the `.review-clients` selector.

To center the image text, add `text-align: center` to the `.review-clients p` selector.

## 2 Position and Sizes

To posit feedback up, use `margin: 0; position: relative; bottom: 1em;` to move it one current font size up relative to its current position.

When you specify a percentage in size, it is a percentage of different source element size. If an element has a fixed poistion, the source is the view port (the visible window size). If the position is absolute, the source size is the ancestor content + pading. If the position is static or relative, the source size is the ancestor content.

The trip image has a width size of 50%. Add a `min-width: 200px` to the `.trip-images img` selector to make it not shrink below the minimum width. Add `flex-wrap: wrap` to the `.trip-images` selector to let images wrap when there is not enough space.

Define a `max-width: 500px` make the image not grwo beyond the maximum width. Check the effect and remove this declaration.

## 3 Fonts

The pixel is a commonly used size unit. However, because the screen sizes vary significantly, the pixel is not a good measure in many cases.

The Chrome browser sets a `font-size: 2em` to the "h1" element. The `2em` means that the size should be two times as the parent element's font size. If a parent or all ancestors don't define a font size, the browser has a defualt font size that will be used as the base. The browser default font size can be changed by a user.

Try to define a `font-size: 2em` to both the `.fixed-bar` selector and the `.page-title` selector. Now the page title is four times of the default font size of the browser.

To define a size based on the HTML font size (the root size), use `font-size: 2rem` -- now it is 2 times of the HTML font size.

By default, the default font size of an element is `1rem` that is the same size the html font size. Change the html element font size to `font-size: 200%` to see the effect. Cancel the change because it changes too many element font sizes.

Some old broswers do not support `rem` therefore you may want to add `px` size in addition to the `rem` size. A common default `rem` size is `16px`.

Go to [Google font site](https://fonts.google.com) to pick and add a font family to your web page. You need to link it in `<head>` and add `font-family` property to an html element.

## 4 Viewport and Media

When you design a web site, you should follow the "mobile-first" principle: first make sure your site works correctly in mobile devices, then make it works in bigger screens. A web site is responsive if it works in all screen sizes.

A mobile web browser doesn't detect the screen size and adjust the view port size automatically. Therefore what work in a desktop browser may not work correctly in a smart phone. You can check the web page using the Chrome Dev Tools mobile mode and selecting a small screen, the main images are not wrapped as expected even when the screen width is small than the total of min-width of the two images.

Add `<meta name="viewport" content="width=device-width">` to the "head" element to tell the mobile browser to use the device width for its viewport.

To make the page looks better in a mobile devices, change the main image width to `100%` and remove the min-width property. Change the navigation text to `font-size: 0.9rem;`.

If you want to display a bigger navigation text in a bigger screen, use media queries like `@media (min-width: 400px){ .navigation li { font-size: 1.2rem } }`. If you don't want to display main trip texts in a small device, comment out trip text styles for `.trip-text` and `.trip-text p` and add `.trip-text { display: none; }` inside the media query.

The `min-width: 400px` is called a break point. If you want to display the trip images side by side for a large screen, add the declaration: `@media (min-width: 700px){ .trip-images img { width: 50% } }`. Also copy the commented trip text to this media query to make them visible ang aligned with their corresponding images.

You can use a combination of `min-width` and `max-width` to specify the screen size.

## 5 Pseudo Classes

An HTML element may be in certain conditions such as in diffrent status (clicked, mouse over, focused, enabled) or in a specific location (the first child, the nth child). You use pseudo class to select elements in the specific condition. The [Meet the Pseudo Class Selector](https://css-tricks.com/pseudo-class-selectors/) article is a good introduction.

Use `:pseudo-class` to select elements in certain condition. For example, use `a:visited` to select links that have been visted by the current browser.

Use `::pseudo-class` to select actual content. For example, use `p::first-line` to select the first line of a paragraph.

To change the mouse over an image, add declaration `img:hover { cursor: pointer; }`.

To change a link when it is clicked, add declaratoin `a:active { color: orange; }`.
