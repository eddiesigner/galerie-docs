# Install Theme

To install this theme please follow these steps:

1. In the Ghost Admin go to **Settings**, click on **Theme** and scroll all the way down.

2. Press the **Upload a theme** button.

3. Then drag and drop the theme zip file or click to locate it. The file you have to upload in this case is the one you downloaded previously, it should be named `galerie.zip`

4. When the upload is finished, you can activate it right away by pressing the **Activate Now** button, or you can also activate it later if you wish.

Don't worry if you see the following warning message:

::: warning
Warning: The `@labs.members` helper should not be used.
:::

Although it looks like an error, it is not. Galerie uses this helper to detect if Members is deactivated and consequently hide all Members links and the Newsletter form.

At the moment this is the only way to detect it, in fact you can read the following in the official Ghost documentation:

> From Ghost 4.0.0 membership features are enabled by default and are no longer a Labs setting. The existing `@labs.members` flag will return true by default, and false if the Subscription access setting is set to Nobody.

Source: [https://ghost.org/docs/themes/helpers/labs/](https://ghost.org/docs/themes/helpers/labs/)

So don't worry, the theme will work just fine 😉
