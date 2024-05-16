# Theme Translation

## Change Language

Galerie is fully translatable and it comes with the following translations out of the box:

* 🇺🇸 English
* 🇪🇸 Spanish

To change the language of your website just open the Ghost Admin, head to **General** and expand the **Publication language** section, now simply enter the [language locale](https://www.w3schools.com/tags/ref_language_codes.asp) that you prefer, for example `en` for English or `es` for Spanish.

If you want to use a different language you have to make a copy of `locales/en.json` and rename it to `[language_code].json`. The `[language_code]` part needs to be replaced with a valid [ISO Language Code](https://www.w3schools.com/tags/ref_language_codes.asp), for example `de.json` for German.

Then you have to edit that file with a text editor and replace all the translations with yours.

::: tip
To find more info about theme translation please head over the [Ghost documentation](https://ghost.org/docs/themes/helpers/translate/).
:::

## Replace Translations With Your Own Text

If you want to replace any of the texts that come with the theme you can do the following:

1. Unzip the theme folder (`galerie.zip`).
2. Open the file `/locales/en.json` (for English) with some text/code editor.
3. Search for the text you want to change and replace the text on the **right side** with your own text.

For example, if you want to replace the text `Subscribe now and have access to all our stories, enjoy exclusive content and stay up to date with constant updates.` with the text `Signup now to have access to all the premium content.` you can search for it within the file and replace it on the **right side**, then it should look like this:

```json
"Subscribe now and have access to all our stories, enjoy exclusive content and stay up to date with constant updates.": "Signup now to have access to all the premium content."
```

4. Save your changes, zip the theme folder and upload it again.

::: warning
Please note that you must leave the text on the **left side** as it is because that part works like a key, you only need to modify the text on the **right side**.
:::
