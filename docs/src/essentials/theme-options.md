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

By default the featured articles slider on the home page changes slides automatically every 5 seconds, if you want to disable that feature so that you can only change slides manually using the buttons or swiping you can do the following:

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

To always display the title and the rest of the post tile information you can inject the following code in the Ghost Admin:

```html
<style>
  :root {
    --hide-post-card-overlay: 0; /* The default value is 1 */
  }
</style>
```

If you want to change the height of the tiles on desktop you can inject the following code in the Ghost Admin:

```html
<style>
  /* The default value is 38.75rem or 620 pixels */
  :root {
    --post-card-height: 720px; /* Here you can set your preferred height */
  }
</style>
```

## Disable Post Images Lightbox

By default, when you click on any of the images that appear in the body of an article, it is displayed in a lightbox where you can zoom or view other images of the article. This is especially useful to be able to appreciate the images in a higher quality.

Below you can see an example of what this functionality looks like:

![Image lightbox](https://res.cloudinary.com/edev/image/upload/v1633338570/galerie/image-lightbox.jpg)

If for some reason you wish to disable this feature completely you can do the following:

1. Inject the following code in the Ghost Admin (Settings --> Code injection --> Site Header):

```html
<script>
  const disableImagesGallery = true;
</script>
```

2. Save your changes.

### Disable Lightbox individually

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

## Configure Loading Animation

When loading any page Galerie displays a quick transition to improve the user experience, it shows your publication's logo in the center and then an animation moves the page content slightly from bottom to top.

In the demo website it looks like this:

![Loading](https://res.cloudinary.com/edev/image/upload/v1633372198/galerie/loading.jpg)

You can disable the loading animation if you wish, to do so you can inject the following style in the Ghost Admin:

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
