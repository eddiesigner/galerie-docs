# Change Log

## v1.0.5

> 27/11/2021

* Uses the proper translations for the sharing buttons
* Renames the font files in `woff2` format so that they can be loaded correctly by the browser.

```
Modified files:

package.json
partials/post-share.hbs

Renamed files:

src/sass/fonts/atkinson/Atkinson-Hyperlegible-Bold-102a.woff2 --> src/sass/fonts/atkinson/Atkinson-Hyperlegible-Bold-102.woff2
src/sass/fonts/atkinson/Atkinson-Hyperlegible-BoldItalic-102a.woff2 --> src/sass/fonts/atkinson/Atkinson-Hyperlegible-BoldItalic-102.woff2
src/sass/fonts/atkinson/Atkinson-Hyperlegible-Italic-102a.woff2 --> src/sass/fonts/atkinson/Atkinson-Hyperlegible-Italic-102.woff2
src/sass/fonts/atkinson/Atkinson-Hyperlegible-Regular-102a.woff2 --> src/sass/fonts/atkinson/Atkinson-Hyperlegible-Regular-102.woff2
```

## v1.0.4

> 20/11/2021

* Support for multiple authors in posts

```
Modified files:

locales/en.json
locales/es.json
package.json
partials/post-header.hbs
src/sass/components/post/_post-header.scss
```

## v1.0.3

> 23/10/2021

* Correctly loads posts after pressing the "Load More" button when they don't have a tag assigned to them.

* Correctly displays the featured image of each post after pressing the "Load More" button when they come directly from Unsplash.

```
Modified files:

package.json
partials/loop.hbs
partials/post-card.hbs
```

## v1.0.2

> 22/10/2021

* Fixes an issue in Safari where the gradient styling of tag cards was displayed incorrectly.

```
Modified files:

package.json
src/sass/common/_theme.scss
src/sass/components/tags/_tag-card.scss
```

## v1.0.1

> 13/10/2021

* Remove Newsletter link in the first slide of the featured slider when Members is disabled in the Ghost Admin.

```
Modified files:

package.json
partials/home-slide.hbs
partials/home-slider.hbs
```

## v1.0.0

> 07/10/2021

* First release 🎉
