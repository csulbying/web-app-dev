# Flexbox Tutorial

Flexbox provides a flexible way to control the layout flow of your web page. It is much easier to use than the old layout methods using float/relative/absolute/static positioning. The css-tricks tutorial [A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) is a very good introduction to flexbox concepts.

There is a new CSS layout standard called [grid layout](https://css-tricks.com/snippets/css/complete-guide-grid/). But it is more complicated and is lack of support from most browsers.

## 1 How It Works

When you add the style `display: flex;` to an element, you make the element a container and its children flex items. You should only add this property to a parent element that you want arrange its children layout.

Once you add the `display: flex;` propety, you can add other container-level flexbox properties to the container such as `flex-flow`, `justify-content`, `align-content`, and `align-items`.

There are some flexbox properties such as `order`, `flex`, `align-self` to the children, i.e., the flex items.

## 2 The Start Files

Create an HTML file with the following content:

```html
<div class="parent">
  <div class="div1">div1</div>
  <div class="div2">w=150px</div>
  <div class="div3">h=150px</div>
  <div class="div4">w/h=150px</div>
  <div class="div5">w=200px</div>
  <div class="div6">w=200px</div>
</div>
```

Bascially it is a parent with 6 children with some basic styles. The [initial style file][css-tricks-flexbox], give the parent a light pink background, a `10px` margin and a `30px` padding. For each child, define a `5px` margin and a pink background. "div1" has no other style, "div2" has a width and a font-size. "div3" has a height, "div4" has both a width and a height. "div5" and "div6" only have a width. The browser shows all children using default layout flow: one block after another in a top-down style. A block can has a width property and a height property. If missing, the height will be based on its content (just enough to wrap its content) and the width will be based the width of its parent element (the width of the content width of its parent).

## 3 The Container Styles

To make the parent a flexbox container, just add the `display: flex` declaration to the style selector `.parent`. Now all children are displayed in a single row. If you decrease the browser window width, all children's width will be decreased till the width is just enough to wrap their content. If you increase the browser window width, children that have a width property will increase their width to the specified width. Children that don't have a width property still have the width only big to wrap their contents. For the container, it automatically increase its width to the size of the "body" element content width.

If you change the `display: flex` to `display: inline-flex` in the container, the container now has an inline element display style, i.e., its width is just what its contents need. Increasing or decreasing browser window width has no effect on the container's width. Usually this is not what you want, so change the style back to `display: flex`.

### 3.1 Flex Flow

Add the declaration `flex-flow: row nowrap;` to the container. The `flex-flow` is a combination of two properties: the `flex-direction` property and the `flex-wrap` property. Nothing changes in display because these are the default values for these two properties.

- `row`: a value of `flex-direction` property, the flow direction is a row. The direction could be `column`, `row-reverse` and `column-reverse`.
- `nowrap`: a value of `flex-wrap` property, the wrap behavior is to not wrap flex items into multiple lines if the width is not enough to hold them in one line. Other choices could be `wrap` and `wrap-reverse`.

Change the `nowrap` to `wrap` and change the width of the browser window. You can find that the flex items are wrapped if the width is not big enough to hold all contents. Also interesting is that the flex items in the same line have the same height as the highest item. For example, items to the left of "div3" element has the same height of `150px` that is defined in the "div3" element.

If you change the `wrap` to `wrap-reverse`, the flex items are wrapped from the left to the right. Try to play with other `flex-flow` values and watch the layout flow.

Talking layout flow using terms like row and column is confusing because the direction could change. Therefore two new terms are used: **main axis** is the current direction and the **cross axis** is the perpendicular direction. For `flex-direction: row`, the main axis is from left to right, the cross axis is from top to bottom. For `flex-direction: column`, the main axis is from top to bottom, the cross axis is from left to right. A reverse value will swap the start and end of the main axis.

### 3.2 The Cross Axis Position

By default, the flex items will stretch in the cross axis. For example, in row direction, the height will be the same for all flex itmes that is the same as the biggest height value. In column direction, all width values will be the same as the biggest width value. The `align-items` defines item positions in the cross axis and it has a default value of `stretch` -- the behavior you just observed.

The `align-items` has other values including `center`, `flex-start`, `flex-end`, and `baseline`. These are easy to understand once you get the key point: `align-items` applies to cross axis.

### 3.3 The Main Axis Position

Use `justify-content` to define the flex item positions in the main axis. The possible values are `flex-start`, `flex-end`, `center`, `space-between`, `space-around`, and `space-evenly`. You can play with values and see how the browser positions flex items in the main axis.

### 3.4 The Cross Axis For Wrapped Flex Items

The `align-content` property specifies how to display flex items in the cross axis when items are wrapped. It has the same values as the `justify-content` property. The key thing to remember is that it only applies when the items are wrapped, i.e., when there are multiple lines for row direction or multiple columns for column direction.

Again, the [CSS tricks flexbox guide][css-tricks-flexbox] is a good introduction to the above concepts.

## 4 The Flex Item Styles

If you want to change the style of a single flex item, you need to use the item-level properties including `order`, `flex-grow`, `flex-shrink`, `flex-basis`, and `align-self`. Additionally, `flex` is a combination of `flex-grow`, `flex-shrink` and `flex-basis`.

### 4.1 `order`

Each flex items have a default order of `0`. Change the `order` value of an item to a bigger value will move its position to a later position in its direction.

### 4.2 `align-self`

The `align-self` has the same values of `center`, `flex-start`, `flex-end`, and `baseline`, exactly as the `align-items` property does. The only different is that only applies to one flex item. It specifies the item position in the cross axis.

### 4.3 `flex`

The `flex` is a combination of `flex-grow`, `flex-shrink` and `flex-basis`. It has a default value of `0 1 auto`.

- `flex-grow`: it is the weight of growth in the main axis. `0` means no grow. No zero values will take all available space together. A value of `2` grows two times faster than a value of `1`. For example, if two items share the extra `150px` available space, regardless of thier original size, the one with `flex-grow: 2` will take an extra `100px` and the one with `flex-grow: 1` will take an extra `50px`.
- `flex-shrink`: it is the wight of shrink in the main axis. When parent shrinks, all items shrink to a minimum size that is just enough to wrap their contents. This value determines the speed of shrink, similar to `flex-grow`.
- `flex-basis`: this defines the start/standard/default size of an item on the main axis. For row direction, this is the width. For column direction, this is the height. If the value is `auto`, it means use the element's height and width in the main axis. If it is another value, it overrides the width or height in the main axis. For example, add `flex: 0 1 100px` declaraion to "div6" element and play with the flex direction.
