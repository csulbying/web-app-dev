# Bootstrap Tutorial

## 1 Start Template

Create a `components.html` file in your source code folder. Add `<h1>Bootstrap Tutorial</h1>` into the `body` section.

Go to the [Getting started](https://getbootstrap.com/docs/4.0/getting-started/introduction/) in [Bootstrap web site](getbootstrap) to copy the starter template into the html file. The [starter template](http://getbootstrap.com/docs/4.0/getting-started/introduction/#starter-template) has the basic setup for charset, viewport, css and JavaScript scripts. Some bootstrap components require the use of JavaScript scripts to work.
Go to the [Getting started](https://getbootstrap.com/docs/4.0/getting-started/introduction/) in [Bootstrap web site](getbootstrap) to copy the starter template [starter template](start-template) to your html file. Start tempalte has the basic setup for charset, viewport, css and JavaScript scripts. Some bootstrap components require the use of JavaScript scripts to work.

### 1.1 Breakpoints

Bootstrap is developed to be mobile first therefore it has a set of media queiries to create sensible layout breakpoints including:

* `xs`: less than 576px, potrait phones
* `sm`: 576px and up, landscape phones
* `md`: 768px and up, tablets
* `lg`: 992px and up, desktops
* `xl`: 1200px and up, large desktops

These 5 breakpoints are often used as postfix/infix to style property to specify the responsive layout behavior. You can define different styles for different screen sizes.

### 1.2 Container

Containers are the most basic layout element in Bootstrap for the page layout. Put  existing contents into `<div class="container">...</div>` and see the difference. The container has a fixed width at each breakpoints. Try to use `container-fluid` to make it use whole width.

## 2 Basic Components

Bootstrap provides many ready-to-use [components](https://getbootstrap.com/docs/4.0/components).

### 2.1 Buttons

Some of bootstrap's components are built with a **base + modifier** class approach. Basic styles are defined in a base class and additional style variations are defined in a set of modifier classes. For example, to use button styles, add a `btn` base class and a button modifier class such as `btn-primary` or `btn-outline-success`.  Check [bootstrap button](https://getbootstrap.com/docs/4.0/components/buttons/) for details.

Button styles can be applied to `a`, `button`, and `input` elements. When `a` is used as a button to trigger in-page action, add `role="button"` to convey the purpose. Add the following contents:

```html
<h2>Bacis Buttons</h2>
<button type="button" class="btn btn-primary">Primary</button>
<a class="btn btn-secondary" href="#" role="button">Expand Menu</a>
<input class="btn btn-success" type="button" value="Input">
<input class="btn btn-danger" type="submit" value="Submit">
<button type="button" class="btn btn-outline-primary">Primary</button>
```

Buttons can be of different sizes (`btn-lg` or `btn-sm`) and can span the full width of a parent (`.btn-block).

```html
<h2>Button Sizes</h2>
<button type="button" class="btn btn-primary btn-lg">Large button</button>
<button type="button" class="btn btn-secondary btn-sm">Small button</button>
<button type="button" class="btn btn-primary btn-lg btn-block">Block level button</button>
```

Buttons can have an active state and can be disabled. Add two more buttons.

```html
<h2>Button States</h2>
<button class="btn btn-success">Normal Button</button>
<button class="btn btn-success active">Active Button</button>
<button class="btn btn-success" disabled>Disabled Button</button>
```

Buttons can be grouped and can have different sizes:

```html
<h2>Button Groups</h2>
<div class="btn-group btn-group-sm" role="group" aria-label="Basic example">
    <button type="button" class="btn btn-secondary">Left</button>
    <button type="button" class="btn btn-secondary">Middle</button>
    <button type="button" class="btn btn-secondary">Right</button>
</div>
```

### 2.2 Jumbotron

According to [jumbotron doc](http://getbootstrap.com/docs/4.0/components/jumbotron/), jumbotron is a lightweight, flexible component for showcasing hero unit style content.

Replace the `h1` header with the following code :

```html
<div class="jumbotron">
    <h1>Bootstrap Tutorial</h1>
    <p>This is a jumbotron component for calling extra attention to
        featured content or information -- so called hero unit style content.
    </p>
</div>
```

### 2.3 Forms

Bootstrap has several form types and many form controls that are described in its [forms doc](https://getbootstrap.com/docs/4.0/components/forms/). Browse the page to have a basic idea of forms and form controls.

Copy the first sample form to your html file.

Form group class `form-group` is used to group a control and its label or help text. Try to remove it and see the differnce.

The class `form-control` is important to style and layout form controls. Try to remove it and see the change in display.

Add `form-inline` class to a form to make it an inline form.

### 2.4 Dropdowns

Dropdowns are toggleable, contextual overalys for displaying lists of links. They are toggled by clicking. It uses `Popper.js` (included in `bootstrap.bundle.js`) to work.

To use it, first declare a wrapper element like `<div> class="dropdown">...<div>`. Inside this wrapper are a toggle button and a dropdown menu that has a list of dropdown items.

Then use a button as the following as the toggle button: `<button class="btn btn-info dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">My Dropdown</button>`. The two important attributes making it toggeble are `data-toggle="dropdown"` (to make it toggle menu) and the `.dropdown-toggle` (to show the dropdown icon) in the class. The `aria-haspopup` and `aria-expanded` attributes are for accessibility.

Then define a list of items inside a wrapper. The final code is as below:

```html
<div class="dropdown">
  <button class="btn btn-info dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Dropdown button
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" href="#">Action</a>
    <a class="dropdown-item" href="#">Another action</a>
    <a class="dropdown-item" href="#">Something else here</a>
  </div>
</div>
```

When used in navigation bar, using an `<a>` element for toggle button is more consistent in styles:

```html
<div class="dropdown show">
  <a class="btn dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Dropdown link
  </a>

  <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
    <a class="dropdown-item" href="#">Action</a>
    <a class="dropdown-item" href="#">Another action</a>
    <a class="dropdown-item" href="#">Something else here</a>
  </div>
</div>
```

### 2.5 Navs

To add a simple navigation component, use `class="nav"` with a `ul` or `nav` element.

Add the following above the jumbotron component.

```html
<nav class="nav">
  <a class="nav-link active" href="#">Active</a>
  <a class="nav-link" href="#">Link</a>
  <a class="nav-link" href="#">Link</a>
  <a class="nav-link disabled" href="#">Disabled</a>
</nav>
```

### 2.6 Navbar

A basic navbar is usally wrapped in a `nav` element with a `.navbar` class and a color scheme. A `.navbar-light` for use with light backgrounds, or `.navbar-dark` for dark background colors. use `.bg-*` to define background color. For example: `<nav class="navbar navbar-dark bg-primary">`.

### 2.6.1 Sub Components

Navbars comes with built-in suport for sub-components such as a brand, bar text, form controls, and navigation items.

* `.navbar-brand`: brand/log for your company or project. For example: `<a class="navbar-brand" href="#">My Brand</a>`.
* `.navbar-text`: just some text in navbar. For example: `<span class="navbar-text">Navbar text</span>`
* `.form-inline`: various form controls within a `form` element. For example:

    ```html
    <form class="form-inline">
        <input class="form-control" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
    </form>
    ```

* `.navbar-nav`: for a group of navigation items. There are two common patterns: one uses `ul`, `li` and `a` while the other only uses `div` and `a`. In wrapper, use `.navbar-nav`, inside, apply `.nav-item` and `.nav-link`. A navigation item can be a dropdown.

    ```html
    <!-- list based -->
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Features</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Pricing</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#">Disabled</a>
      </li>
    </ul>

    <!-- or just list of links -->
    <div class="navbar-nav">
      <a class="nav-item nav-link active" href="#">Home <span class="sr-only">(current)</span></a>
      <a class="nav-item nav-link" href="#">Features</a>
      <a class="nav-item nav-link" href="#">Pricing</a>
      <a class="nav-item nav-link disabled" href="#">Disabled</a>
    </div>
    ```

However, the default behaivor of `.navbar-nav` is not a single row of list items, instead it is a list of multiple rows in one column -- more appropriate for side nav or dynamic nav when toggled. The behavior can be enabled using responsive attributes.

### 2.6.2 Responsive Navbar

To make the `navbar-nav` displayed in a row, add `.navbar-expand-lg` to the `.navbar` wrapper. Change the screen size to see the effect.

When the screen size is smaller than the `lg` breakpoint, the nav items displayed in a column again. What we really want is to make it into a menu icon and only show them when the icon is toggled. Similar to the pattern of dropdowns, you need do two things.

First, define a toggle icon like the following inside the navbar wrapper:

```html
<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
</button>
```

This icon is also controlled by the `.navbar-expand-{breakpoint}` value. In this case, it is hidden in large screen and is shown in small screen. It doesn't as expected because the `data-target` doesn't point to a correct collapsible element.

The second step is to wrapper the `.navbar-nav` inside an element with `.collapse` and `.navbar-collapse` class attributes and has the `id` value as specified by the toggle icon. In this case, it should be: `<div class="collapse navbar-collapse" id="navbarSupportedContent"></div>`.

## 3 Row-based Layout

Bootstrap created its reputation for having a flexible, easy-to-use and responsive layout system. Check [bootstrap layout](https://getbootstrap.com/docs/4.0/layout/overview/) for details. Bootstrap's grid system is built with flexbox. It uses a series of containers, rows and columns to layout and align content.

### 3.1 The Start

Create a new `grid.html` file based on the [start template](start-template). Replace the `h1` element with the following content:

```html
<div class="container">
  <div class="row">
    <div class="col-sm">
      One of three columns
    </div>
    <div class="col-sm">
      One of three columns
    </div>
    <div class="col-sm">
      One of three columns
    </div>
  </div>
</div>
```

The above code creates three equal-width columns on small or larger devices. Those columns are centered in parent `.container`. In extra small devices, it creates one column and three rows and align content to the left.

The suggest way to create layout is as the following:

* Use `.container` or `.container-fluid` to wrap one or more rows.
* Use `.row` to wrap one or more columns. Each row can have up to 12 columns.
* Use `.col-{breakpoint}`, `.col-#`, or `.col-{breakpoint}-#` to style a grid column. The `{breakpoint}` is one of the above breakpoints. There is no need to use `xs` because it mean all screen size. In other words, `.col` is a class that can be thought as `.col-xs`. The `#` is a number from 1 to 12 that specifies the number of columns for a column.
* Put only columns in a row wrapper and put content (or nested rows) only in columns.

#### 3.2 Responsive Columns

If you want to have the same layout regardless of devie size, use `.col` or `.col-#`, i.e., without using a breakpoint. For example:

```html
<div class="row">
  <div class="col bg-primary">col 1 of 4</div>
  <div class="col bg-secondary">col 2 of 4</div>
  <div class="col bg-success">col 3 of 4</div>
  <div class="col bg-info">col 4 of 4</div>
</div>
<div class="row">
  <div class="col-8 bg-danger">col-8</div>
  <div class="col-4 bg-warning">col-4</div>
</div>
```

The above layout has 4 columns in the first row and 2 columns in the second row regardless of the screen size. To make it stacked for an extra small screen, use the following code:

```html
<div class="row">
    <div class="col-sm bg-primary">col 1 of 4</div>
    <div class="col-sm bg-secondary">col 2 of 4</div>
    <div class="col-sm bg-success">col 3 of 4</div>
    <div class="col-sm bg-info">col 4 of 4</div>
</div>
<div class="row">
    <div class="col-sm-8 bg-danger">col-8</div>
    <div class="col-sm-4 bg-warning">col-4</div>
</div>
```

To change the layout differently for different screen size, add different styles for different screen ssize. For example, you have the following requirements for two content blocks:

* if the screen is large or up, each one has 6 columns.
* if the screen is medium, the 1st has 8 columns and the 2nd has 4 columns.
* if the screen is smaller than medium, stack them.

Then you have the following code:

```html
<div class="row">
    <div class="col-sm-8 col-lg-6 bg-danger">col-8</div>
    <div class="col-sm-4 col-lg-6 bg-warning">col-4</div>
</div>
```

One more example for 4 items, suppose you have the following requirements:

* if the screen is middle or up, the first item takes 8 columns, the second item takes 4 columns, the third takes 6 columns and the fourth takes 6 columns. Because one row can have no more than 12 columns, the four items wrap to the next line.
* if the screen size is smaller or extra small, the first item takes 12 columns, the rest three each has 5 columns. Here the rest three items are wrapped to the next two lines because the total number of columns is 27.

```html
<div class="row">
    <div class="col-12 col-md-8 bg-primary">col 1 of 4</div>
    <div class="col-5 col-md-4 bg-secondary">col 2 of 4</div>
    <div class="col-5 col-md-6 bg-success">col 3 of 4</div>
    <div class="col-5 col-md-6 bg-info">col 4 of 4</div>
</div>
```

#### 3.3 Auto-layout Columns

To make equal-width column, simply use `.col`.

```html
<div class="container">
    <div class="row">
        <div class="col bg-primary">
            1 of 3
        </div>
        <div class="col bg-secondary">
            2 of 3
        </div>
        <div class="col bg-info">
            3 of 3
        </div>
    </div>
</div>
```

The `bg-colorname` adds different background color to the columns.

To break into different a line, add `<div class="w-100"></div>` between two columns.

If you set a column width for some columns, the columns without width will share the rest columns.

```html
<div class="container">
    <div class="row">
        <div class="col bg-primary">
            1 of 3
        </div>
        <div class="col-6 bg-secondary">
            2 of 3 (col-6)
        </div>
        <div class="col bg-info">
            3 of 3
        </div>
    </div>
    <div class="row">
        <div class="col bg-info">
            1 of 4
        </div>
        <div class="col-5 bg-warning">
            2 of 4 (col-5)
        </div>
        <div class="col bg-danger">
            3 of 4
        </div>
        <div class="col-3 bg-success">
            4 of 4 (col-3)
        </div>
    </div>
</div>
```

To make a column width based on the natural width of its content, use `col-{breakpoint}-auto`. Change any of the above column to `col-md-auto` and check the effect.

### 3.4 Alignment

You can use flexbox alignment utilities to vertically or horizontally align columns. Similar to flexbox alignment, you can specify the alignment at the row level (the flexbox container) or the column level (flexbox item).

Check the [alignment document](https://getbootstrap.com/docs/4.0/layout/grid/#alignment) for details and the esay-to-follow examples.

### 3.5 Column Offset

You can move columns to the right useing `.offset-{breakpoint}-#` classes. For example, `.offset-md-4` moves an element over four columns.

```html
<div class="row">
    <div class="col-md-4 bg-info">.col-md-4</div>
    <div class="col-md-4 offset-md-4 bg-info">.col-md-4 .offset-md-4</div>
</div>
```

### 3.3.6 Nesting

You can nest one or more rows inside a column.

```html
<div class="row">
    <div class="col-sm-9 bg-info">
        Level 1: .col-sm-9
        <div class="row bg-secondary">
            <div class="col-8 col-sm-6 bg-warning">
                Level 2: .col-8 .col-sm-6
            </div>
            <div class="col-4 col-sm-6 bg-danger">
                Level 2: .col-4 .col-sm-6
            </div>
        </div>
        Other level 1 text
    </div>
</div>
```

## 4 Utilites

Bootstrap comes with utilities to set spacing, sizing, colors, text, border, display, vertical align, visibility, and etc. Please check [utilities doc](https://getbootstrap.com/docs/4.0/utilities) for a complete list.

### 4.1 Spacing

Bootstrap has a wide range of shorthand responsive margin and padding utility classes. The classes are named using the format `{property}{sides}-{size}` for extra small `xs` and `{property}{sides}-{breakpoint}-{size}` for small and up including `sm`, `md`, `lg`, and `xl`.

* the `{propery}` is `m` for margin and `p` for padding.
* The `{sides}` is one of `t` for top, `b` for bottom, `l` for left, `r` for right, `x` for left and right, `y` for top and bottom. If the `{sides}` is blank, it applies on all four sides.
* the `{size}` is one of `0` for 0, `1` for `0.25rem`, `2` for `0.5rem`, `3` for `1rem`, `4` for `1.5rem`, `5` for `3rem`, and `auto` set margin to `auto`.

For example, the following code set the row with a pading for `sm` of value `2`. `my-sm-1` means the top and bottom margin for `sm` of value `1`. `pl-5` means padding left is `3` that is `3rem`.

```html
<div class="row bg-success p-sm-2">
    <div class="col-sm-9 bg-info my-sm-1">
        Level 1: .col-sm-9
        <div class="row bg-secondary">
            <div class="col-8 col-sm-6 bg-warning pl-5">
                Level 2: .col-8 .col-sm-6
            </div>
            <div class="col-4 col-sm-6 bg-danger">
                Level 2: .col-4 .col-sm-6
            </div>
        </div>
        Other level 1 text
    </div>
</div>
```

To horizonally center a block element, use `mx-auto` and set a `width` like `<div class="mx-auto bg-primary" style="width: 200px;" >Centered element</div>`.

### 4.2 Sizing

There are four height percentage values (`h-25`, `h-50`, `h-75`, `h-100`, `mh-100`) and four width percentage values (`w-25`, `w-50`,`w-75`,`w-100`, `mw-100`).

```html
<div style="height: 100px; background-color: rgba(255,0,0,0.1);">
    <div class="h-25 d-inline-block" style="width: 120px; background-color: rgba(0,0,255,.1)">Height 25%</div>
    <div class="mh-50 d-inline-block" style="width: 120px; background-color: rgba(0,0,255,.1)">Height 50%</div>
    <div class="h-75 d-inline-block" style="width: 120px; background-color: rgba(0,0,255,.1)">Height 75%</div>
    <div class="h-100 d-inline-block" style="width: 120px; background-color: rgba(0,0,255,.1)">Height 100%</div>
</div>
```

### 4.3 Colors

Bootstrap has pre-defined color names that can be posfixed to `text-`, `btn-`, `btn-outline`, `border-` and `bg-`. The names are `primary`, `secondary`, `success`, `danger`, `warning`, `info`, `white`, `ligth`, and `dark`.

Check the [colors doc](https://getbootstrap.com/docs/4.0/utilities/colors/) for details and examples.

[getbootstrap]: https://getbootstrap.com/
[bootstrap-doc]: https://getbootstrap.com/docs
[start-template]: https://getbootstrap.com/docs/4.0/getting-started/introduction/#starter-template