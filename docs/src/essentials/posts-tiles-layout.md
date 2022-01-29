# Posts Tiles Layout

With Galerie it is possible to display the list of articles in more than one way, by default the articles are displayed following a mosaic layout (**Default**) but they can also be displayed in three additional layouts: **Two Columns**, **Grid** and **Insta Layout**.

## Default Layout

![Default layout](https://res.cloudinary.com/edev/image/upload/v1633269373/galerie/default-layout.png)

This is the default layout in which the articles are displayed in a mosaic fashion following a predetermined composition. The mosaic adapts according to the width of the viewport.

## Two Columns Layout

![Two columns layout](https://res.cloudinary.com/edev/image/upload/v1633269707/galerie/two-columns-layout.png)

In this layout, two articles are displayed per row, each of them occupying half of the available width no matter how large or small the viewport is.

## Grid Layout

![Grid layout](https://res.cloudinary.com/edev/image/upload/v1633270023/galerie/grid-layout.png)

In this layout the articles are displayed in the form of a grid, on small screens 2 articles per row are displayed, on slightly larger screens 3 articles per row are displayed while on larger screens up to 4 articles per row are displayed.

## Insta Layout

![Insta layout](https://res.cloudinary.com/edev/image/upload/v1633270328/galerie/insta-layout.png)

This distribution could be interesting for publications that focus on photography, here the articles are displayed in a grid but the aspect ratio of the images is respected so that they can be appreciated in their entirety, thus achieving a _collage-like_ effect.

## Change Posts Layout

There are two ways to change the layout of the articles to use any of the available options, either globally or individually for each page.

### Globally

If you want all pages to display articles using the same particular layout you can choose the layout you prefer in the theme design settings as shown bellow:

![](https://res.cloudinary.com/edev/image/upload/v1643470250/galerie/CleanShot_2022-01-29_at_16.30.06.png)

As you can see, you can choose one of the different four layouts:

* Mosaic (default)
* Two columns
* Grid
* Insta

If you are not using Ghost 4.20.0 or later and Galerie 1.1.0 or later you can do the following instead:

1. Unzip the theme folder.

2. Open the file `partials/loop.hbs` with a text/code editor and look for this code:

```html
<div
  class="g-posts-grid {{#if layout}}{{layout}}{{else}}default{{/if}} js-main-content"
>
```

3. Replace it with one of the following lines of code (depending on the layout you want to use):

**Default Layout**
```html
<div class="g-posts-grid default js-main-content">
```

::: tip
This is the default layout, if you want it to stay that way then there is no need to change anything.
:::

**Two Columns Layout**
```html
<div class="g-posts-grid two-columns-layout js-main-content">
```

**Grid Layout**
```html
<div class="g-posts-grid grid-layout js-main-content">
```

**Insta Layout**
```html
<div class="g-posts-grid insta-layout js-main-content">
```

4. Save your changes.

5. Zip the theme folder and upload it again.

### Individually

There are three places where the list of articles is displayed currently: **Index Page**, **Author Page** and the **Tag Page**. You have the option to set the type of layout in which the articles of these pages will be displayed individually, to do so follow these steps:

1. Unzip the theme folder.

2. You will have to open with a text/code editor one of the following files depending on the page you want to modify:

| Page        | File     |
|:------------:|:-------------:|
| Index | `index.hbs` |
| Author | `author.hbs` |
| Tag | `tag.hbs` |

3. Look for the following line of code:

```hbs
{{> loop}}
```

4. Replace that line with one of the following depending on the type of layout you want to use:

**Default Layout**
```hbs
{{> loop layout="default"}}
```

::: tip
This is the default layout, if you want it to stay that way then there is no need to change anything.
:::

**Two Columns Layout**
```hbs
{{> loop layout="two-columns-layout"}}
```

**Grid Layout**
```hbs
{{> loop layout="grid-layout"}}
```

**Insta Layout**
```hbs
{{> loop layout="insta-layout"}}
```

5. Save your changes.

6. Zip the theme folder and upload it again.
