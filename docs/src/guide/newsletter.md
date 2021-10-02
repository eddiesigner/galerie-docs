# Newsletter

In Ghost 4 the Members feature is enabled by default, that means you don't have to do anything to enable the Newsletter form.

If you disable the Members feature, the Newsletter form will be removed automatically.

## Newsletter Page

Additionally you can also enable the [Newsletter page](https://galerie.eduardogomez.io/newsletter/), to do so please follow these steps:

1. In the Ghost Admin head to the **Pages** page and press the **New page** button.

2. Give it a title (e.g. _Newsletter_).

3. You can also add a **feature image** in the page settings.

3. Publish the page.

::: tip
You do not need to add content to this page as it is automatically generated.
:::

::: warning
If you decide to use another title for this page it is important that you manually change the **Page URL** in the page settings so that the value is `newsletter`, otherwise it will not work.
:::

::: warning
If you want to use a different URL, `subscribe` for example, you have to unzip the theme folder, rename the file `page-newsletter.hbs` to `page-subscribe.hbs`, zip the theme folder and upload it again.
:::
