# Style with Bootstrap 4

## 1 What Is Bootstrap

Bootstrap is an open source front-end framework that has pre-made HTML/CSS templates and classes. It handles browser compatibility and is used to build mobile first, responsive UI.

You can use it via CDN, downloaded files or installed packages (NPM or other).

The bootstrap 4 has three major feature sets:

* It uses flexbox to manage grids, navigation, component and more.
* It comes with many CSS components: forms & input groups, tables, list groups, cards, progress bars, alerts, navbar & menus, buttons & button groups, pagination, media objects, utility classes, badges and more.
* It also comes with some JavaScript widgets: carousel slider, collapsible accordion, modal, tooltips, and popovers.

## 2 Utilities

Bootstrap provides utilities for basic typography, text alignment & display, float & position, colors & background, spacing, sizing, and breakpoints.

### 2.1 Basic Typography

To change display sizes to some head fonts, use `h1` to `h6` classes such as `<p class="h2"> text in h2 heading</p>`.

To make secondary heading use `<small>some subtext<small>`.

To use jumbotron standout headings, use `display-1` to `display-4` classes.

To make a paragraph stand out, use `class="lead"`.

Check [Bootstrap typography doc](https://getbootstrap.com/docs/4.0/content/typography/) for more features.

### 2.2 Text Utility

Use classes such as `text-justifed`, `text-left`, `text-center`, `text-right`.

Use `text-{breakpoint}-{value}` to make it responsive. For example, `text-sm-right` to make it righ aligned for small or larger screen.

For horizontal alignment, use `align-baseline`, `align-top`, `aligh-bottom`, `align-middle`, `align-text-top` and `align-text-bottom`.

Use `text-lowercase`, `text-uppercase`, and `text-capitalize` to transform capitlization.

Check [Bootstrap text doc](https://getbootstrap.com/docs/4.0/utilities/text/) for more information.

### 2.3 Float and Position

The float can be `left`, `right` or `none`. Use either `float-{value}` or `fload-{breakpoint}-{value}` to float an element.

use `fixed-top`, `fixed-bottom` to fix elemtn to top or bottom.

### 2.4 Colors

The colors are `primary`, `secondary`, `success`, `danger`, `warning`, `info`, `light`, `dark`, and `white`. The color can be use with `text-{color}` and `bg-{color}`. If `$enable-gradient` is true, you can use `bg-gradient-{color}`.

### 2.5 Spacing

Check the [spacing doc](https://getbootstrap.com/docs/4.0/utilities/spacing/) for the syntax and functions.