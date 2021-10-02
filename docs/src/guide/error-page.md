# Error Page

The error page is automatically displayed when someone tries to load a page that does not exist, you can see a demo at [this link](https://galerie.eduardogomez.io/404/)

![Error page](https://res.cloudinary.com/edev/image/upload/v1633181351/galerie/error-page.jpg)

This page shows a default background image but you can change it if you wish, there are two ways to do it:

**Replace the default image file**

1. Unzip the theme folder.

2. Replace the image located in the directory `/galerie/assets/images/404.jpg`. You should keep the same name and the same file extension.

3. Zip the theme folder and upload it again.

**Change image URL**

1. Inject the following styles in the Ghost Admin (Settings --> Code injection --> Site Header):

```html
<style>
  .g-404-background__image {
    background-image: url(YOUR_IMAGE_URL);
  }
</style>
```

2. Replace `YOUR_IMAGE_URL` with the image URL you want to use. You must first host your image on an external service and obtain a public URL.

3. Save your changes.
