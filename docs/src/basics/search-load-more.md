# Search And Load More Posts

Galerie uses the [Ghost Content API](https://ghost.org/docs/content-api/) to load more articles by pressing the corresponding button and to make the search work, because of this it is _very important_ that you don't forget to configure a special key that the Ghost Content API needs to work properly.

## Generate your Content API Key

To generate and add the Content API Key follow these steps:

1. In the Ghost Admin head to the **Integrations** page and press the **Add custom integration** button. You can name it as you like but I recommend that you name it _Content API Key_.

2. Copy the **Content API Key** value.

![Content Key](https://res.cloudinary.com/edev/image/upload/v1633261733/galerie/content-key.png)

## Save your Content API Key

If you're using Ghost 4.20.0 or later and Galerie 1.1.0 or later you can simply paste the key in the theme design settings as shown bellow:

![](https://res.cloudinary.com/edev/image/upload/v1643459429/galerie/CleanShot_2022-01-29_at_13.29.33.png)

::: warning
If you had previously added your key and now you prefer to add your key in the theme design settings please make sure to delete the code you injected otherwise an error will appear in the console because that variable had already been declared previously.
:::

If you're using a previous version please do the following instead:

Head to the **Code injection** page and paste the following code into the **Site Header** block:

```html
<script>
  const ghostApiKey = 'YOUR_CONTENT_API_KEY_GOES_HERE';
</script>
```

Replace `YOUR_CONTENT_API_KEY_GOES_HERE` with the Content API Key that you got previously (please **keep the single quotes**).

Don't forget to save your changes.

::: warning
If you do not configure the Content API Key, no more articles can be loaded and the search will not work, also the following error message will be displayed in the browser console:

> Please make sure to setup the Content API custom integration in the Ghost Admin first, see the documentation for more information.
:::
