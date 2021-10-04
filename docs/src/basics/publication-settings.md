# Publication Settings

After installing the theme you will most likely want to configure the following basic settings in your publication:

## Title & Description

In the **General Settings** of the Ghost Admin you can change the name of your publication and enter a description, as you can see in the following screenshot:

![General settings](https://res.cloudinary.com/edev/image/upload/v1633197841/galerie/title-description.png)

The theme uses this information in a variety of places, for example in the first section of the home page, so if you want to display other content in that section, these are the settings you will need to change.

## Social Accounts

Ghost allows you to add social accounts links for **Facebook** and **Twitter**. By default it includes links from their own social accounts.

To change these links just delete them and enter yours in the **Social Accounts** section at the bottom of the **General Settings** page:

![Social accounts](https://res.cloudinary.com/edev/image/upload/v1633197948/galerie/social.png)

If you don't want to show Facebook and Twitter links just delete the default links and save the changes.

## Branding

In the **Branding Settings** of the Ghost Admin you can change the Publication icon and the Publication logo as well.

### Accent Color

This is the primary color that the theme uses to highlight certain elements such as buttons or some borders. To change the color you can enter a hexadecimal value or you can click on the small square that appears in the options to select it visually.

For example, the Galerie blog demo uses `#7209b7` as the accent color.

::: warning
Since only one color can be chosen in the Ghost Admin you must make sure that the color you choose is visible in both the light and dark modes of the theme and also that the contrast between the color and the font color allows the font to be legible.
:::

### Publication Icon

The icon or _favicon_ is a small image that can be seen in the browser tab, next to the title. You can change the icon in this section.

### Publication Logo

Ghost by default includes a white logo, I recommend you to remove it and upload your own logo. You can do this in the **Publication logo** field located in this section.

In case you delete the default logo and don't upload any logo of your own, the theme will show the publication title instead.

If you decide to use an image as logo it is recommended that it is in PNG or SVG format and that it is in black and white or grayscale since this theme inverts the color of the logo in the dark mode so that it has enough contrast in relation to the background color.

You can see an example of this in the following screenshots:

**Light mode**

![Light logo](https://res.cloudinary.com/edev/image/upload/v1633377807/galerie/light-logo.png)

**Dark mode**

![Dark logo](https://res.cloudinary.com/edev/image/upload/v1633377806/galerie/dark-logo.png)

If the color of the logo you use works well in both light and dark mode you may want to prevent the theme from inverting its color, to do this you can inject the following code in the Ghost Admin:

```html
<style>
  [theme-mode="dark"] {
    --logo-invert-color: 0; /* The default value is 1 */
  }
</style>
```

### Publication Cover

You can also change the cover which is shown in the first section of the home page. To change it just delete the default image in the **Publication Cover** field and upload the image you want.

Here's a screenshot of these settings:

![Publication identity](https://res.cloudinary.com/edev/image/upload/v1633198278/galerie/branding.png)
