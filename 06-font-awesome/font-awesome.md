# Font Awesome

Adding appropriate icons will make your page more attractive. [Font Awesome](https://fontawesome.com/icons?d=gallery) is a popular icon library that has some free icons and is easy to use.

Add the following line to `head` section of your html file.
`<script defer src="https://use.fontawesome.com/releases/v5.0.6/js/all.js"></script>`.

Then you can place Font Awesome icons just about anywhere using a CSS style prefix `. fas` and the icon’s name such as `fa-camera-retro`. Font Awesome is designed to be used with inline elements. Use `i` tag for brevity, but using a `span` is more semantically correct.

Follown code shows the basic usage, differnt sizes, and spinners.

```html
<h2>Icon Demos</h2>
<<div>
    <i class="fas fa-user"></i>
    <i class="far fa-user"></i>

    <!--some special brand icons-->
    <i class="fab fa-github-square"></i>
    <i class="fab fa-font-awesome"></i>

</div>

<!-- customize size -->
<div>
    <i class="fas fa-home fa-sm"></i>
    <i class="fas fa-info fa-lg"></i>
    <i class="fas fa-camera-retro fa-2x"></i>
    <i class="fas fa-camera-retro fa-7x"></i>
    <i class="fas fa-camera-retro fa-10x"></i>
</div>

<!-- spinner -->
<div class="fa-3x">
    <i class="fas fa-spinner fa-spin"></i>
    <i class="fas fa-spinner fa-pulse"></i>
    <i class="fas fa-circle-notch fa-spin"></i>
    <i class="fas fa-sync fa-spin"></i>
    <i class="fas fa-camera fa-spin"></i>
</div>

```