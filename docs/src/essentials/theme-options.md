# Theme Options

In addition to being able to configure the behavior of the home page and to choose how to display articles on the pages, Galerie offers multiple additional options for further customization.

## Posts Per Page

By default Galerie shows up to 12 entries on each page, if you wish to change that number please follow these steps:

1. Unzip the theme folder.

2. Open the file `package.json` with a text/code editor.

3. Locate the following line of code and change the number to the one you prefer:

```json
"posts_per_page": 12,
```

4. Save the changes.

5. Zip the theme folder and upload it again.

It is important to note that this change will only take effect when loading a page for the first time, to also change the number of entries that are loaded when you press the "Load More" button you must do the following:

1. Inject the following code in the Ghost Admin (Settings --> Code injection --> Site Header):

```html
<script>
  // Use the number you prefer.
  // It is recommended that it is the same 
  // as the number you set in the previous steps.
  const customPaginationLimit = 12;
</script>
```

2. Save your changes.

## Disable Home Slider Autoplay

By default the featured articles slider on the home page changes slides automatically every 5 seconds. You can of course disable this feature and let users change slides manually.

If you're using Ghost 4.20.0 or later and Galerie 1.1.0 or later you can simply disable it in the theme design settings as shown bellow:

![](https://res.cloudinary.com/edev/image/upload/v1643474533/galerie/CleanShot_2022-01-29_at_17.41.39.png)

::: warning
If you had previously disabled that option and now you prefer to disable it in the theme design settings please make sure to delete the code you injected otherwise an error will appear in the console because that variable had already been declared previously.
:::

If you're using a previous version please do the following instead:

1. Inject the following code in the Ghost Admin (Settings --> Code injection --> Site Header):

```html
<script>
  const disableFeaturedSliderAutoplay = true;
</script>
```

2. Save your changes.

## Configure Posts Tiles

By default the post tiles only show the title and other information when the pointer is placed over the tile and disappears again when the pointer is moved away. By default also the tiles have a height of 620 pixels on desktop.

Like other parts of the theme, this can also be configured.

![Post tile](https://res.cloudinary.com/edev/image/upload/v1633376347/galerie/tile.jpg)

### Display post titles always

To always display the title and the rest of the post tile information you can enable the option "Always show post title" in the theme design seetings as shown bellow:

![](https://res.cloudinary.com/edev/image/upload/v1643474900/galerie/CleanShot_2022-01-29_at_17.47.37.png)

If you are not using Ghost 4.20.0 or later and Galerie 1.1.0 or later you can inject the following code in the Ghost Admin instead:

```html
<style>
  :root {
    --hide-post-card-overlay: 0; /* The default value is 1 */
  }
</style>
```

### Change the height of the post tiles

If you want to change the height of the tiles on desktop you can inject the following code in the Ghost Admin:

```html
<style>
  /* The default value is 38.75rem or 620 pixels */
  :root {
    --post-card-height: 720px; /* Here you can set your preferred height */
  }
</style>
```


### Show post excerpt

If you want to show the excerpt in the post tiles you can inject the following code in the Ghost Admin:

```html
<style>
  :root {
    --show-post-card-excerpt: block; /* The default value is none */
  }
</style>
```

Please note that this change will be visible on desktop devices only, on mobile devices it will still be hidden unless the post doesn't have a feature image. As of Galerie version 2.2.0 the post excerpt will always be visible regardless of this option as long as the post doesn't have a feature image.

## Post Images Lightbox

By default, when you click on any of the images that appear in the body of an article, it is displayed in a lightbox where you can zoom or view other images of the article. This is especially useful to be able to appreciate the images in a higher quality.

Below you can see an example of what this functionality looks like:

![Image lightbox](https://res.cloudinary.com/edev/image/upload/v1633338570/galerie/image-lightbox.jpg)

### Adding custom config and additional plugins

Galerie uses the [lightGallery](https://www.lightgalleryjs.com/) plugin to display the images of a post as a gallery in which they can stand out and be displayed in a more detailed way. Although the theme has a default configuration that in most cases is more than enough, some users wanted to be able to provide a custom configuration and even be able to add additional functions, now this is possible thanks to this new theme option.

To extend the default configuration of the lightGallery plugin you can inject the following code in the Ghost Admin (Settings --> Code injection --> Site Footer):

```html
<script>
  const customLightGalleryConfig = {
    speed: 500,
    mode: 'lg-fade',
    download: true,
  };
</script>
```

You can find all the available core settings in the [plugin's documentation](https://www.lightgalleryjs.com/docs/settings/).

lightGallery also offers the possibility to add additional functionality through plugins, for example, to add the [Thumbnails plugin](https://www.lightgalleryjs.com/docs/settings/#thumbnails-plugin) you can inject the following code in the Ghost Admin (Settings --> Code injection --> Site Footer):

```html
<script src="/assets/vendor/lightgallery/js/plugins/lg-thumbnail.min.js"></script>

<script>
  const customLightGalleryPlugins = [lgThumbnail];
  const customLightGalleryConfig = {
    thumbnail: true,
  };
</script>
```

All the following plugins are available:

`lgZoom`, `lgAutoplay`, `lgComment`, `lgFullscreen` , `lgHash`, `lgPager`, `lgRotate`, `lgShare`, `lgThumbnail`, `lgVideo`, `lgMediumZoom`

Please refer to the [plugin's documentation](https://www.lightgalleryjs.com/docs/settings/) to learn about all the possible options for each plugin.

As you may have noticed, in this case you also have to add the file of the plugin you want to use through the `src` attribute in the `script` tag, you can find all the available files in the theme's folder `assets/vendor/lightgallery/js/plugins/`

::: warning
This option is only available if you're using Ghost 4.20.0 or later and Galerie 2.3.0 or later.
:::

### Disable Post Images Lightbox

If for some reason you wish to disable this feature completely you can do it in the theme design settings as shown bellow:

![](https://res.cloudinary.com/edev/image/upload/v1643476370/galerie/CleanShot_2022-01-29_at_18.12.06.png)

If you are not using Ghost 4.20.0 or later and Galerie 1.1.0 or later you can do the following instead:

1. Inject the following code in the Ghost Admin (Settings --> Code injection --> Site Header):

```html
<script>
  const disableImagesGallery = true;
</script>
```

2. Save your changes.

#### Disable Lightbox individually

On the other hand, if you want to disable this function only for a specific image you can add that image using the **HTML card** where you will have to use a code like this:

```html
<img src="YOUR_IMAGE_URL" class="js-disable-zoom" />
```

The important thing about this is the class `js-disable-zoom`.

And as you may have noticed, at the moment this only works for images you add using HTML which means you will have to use images hosted somewhere else in order to get a public URL that you can use in the `src` attribute.

## Use Image Float Format

When writing an article you can also add images that are aligned right next to the text, as shown in the following screenshot:

![Float format](https://res.cloudinary.com/edev/image/upload/v1633339733/galerie/float-format.jpg)

To use such a format you need to add the image using the **HTML card** with a code like this:

```html
<img src="YOUR_IMAGE_URL" class="float gallery-image js-gallery-image">
```

The important thing about this is the class `float`.

And as you may have noticed, at the moment this only works for images you add using HTML which means you will have to use images hosted somewhere else in order to get a public URL that you can use in the `src` attribute.

## Use Normal Size For The First Letter

By default the size of the first letter of the first paragraph of an article is significantly larger than the size of the rest of the characters, the theme emphasizes in this way the beginning of the text to make it a little more interesting and attract the reader's attention.

![](https://res.cloudinary.com/edev/image/upload/v1643479210/galerie/CleanShot_2022-01-29_at_18.59.27.png)

If for some reason you prefer the first letter to be the same size as the rest of the text, you can do so by injecting the following code in the Ghost Admin (Settings --> Code injection --> Site Header):

```html
<style>
  :root {
    --first-letter-size: 100%;
    --first-letter-vertical-align: none;
  }
</style>
```

## Configure Loading Animation

When loading any page Galerie displays a quick transition to improve the user experience, it shows your publication's logo in the center and then an animation moves the page content slightly from bottom to top.

In the demo website it looks like this:

![Loading](https://res.cloudinary.com/edev/image/upload/v1633372198/galerie/loading.jpg)

You can disable the loading animation in the theme design seetings as shown bellow:

![](https://res.cloudinary.com/edev/image/upload/v1643475186/galerie/CleanShot_2022-01-29_at_17.52.20.png)

If you are not using Ghost 4.20.0 or later and Galerie 1.1.0 or later you can inject the following code in the Ghost Admin instead:

```html
<style>
  :root {
    --show-loading-animation: 0; /* Or 1 to restore it */
  }
</style>
```

You can also disable the slide up animation by injecting the following code in the Ghost Admin:

```html
<style>
  :root {
    --show-slide-up-animation: 0; /* Or 1 to restore it */
  }
</style>
```

## Configure Home's First Section

In the first section of the home page you can configure the opacity of the cover image of the publication as well as the opacity of the images of the featured articles.

It is also possible to configure the opacity of the light shadow displayed below the main bar and above the background image.

![Hero oprions](https://res.cloudinary.com/edev/image/upload/v1633374405/galerie/hero-options.jpg)

To configure both values you can inject the following styles in the Ghost Admin:

```html
<style>
  :root {
    --hero-image-transparency: 0.6; /* This is the default value */
    --hero-image-gradient-transparency: 0.4; /* This is the default value */
  }
</style>
```

In both cases you can enter a value anywhere from 0 to 1.

In the case of `--hero-image-transparency` a value close to zero will make the image more transparent while a value close to one will make it more opaque. Making the image more transparent gives the image a darker appearance.

In the case of `--hero-image-gradient-transparency` a value close to zero will make the shadow more transparent while a value close to one will make it more visible.

You can play with these values to make the appearance of the first section of the home page suit your needs.

## Configure Backdrop Area

The backdrop area is the semi-transparent space that appears underneath when opening the main menu or when opening the search, it also appears when displaying an image using the lightbox on article pages.

![Backdrop area](https://res.cloudinary.com/edev/image/upload/v1633375480/galerie/backdrop.jpg)

You can configure its opacity according to your preferences by injecting the following code into the Ghost Admin:

```html
<style>
  :root {
    --backdrop-opacity: 0.8; /* This is the default value */
  }
</style>
```

You can enter a value anywhere from 0 to 1, a value close to zero will make it more transparent while a value close to one will make it more opaque.
