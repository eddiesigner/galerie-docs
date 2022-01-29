# Change Log

## v1.1.0

> 01/02/2022

* Add support for new content cards: [https://ghost.org/changelog/cardmas/](https://ghost.org/changelog/cardmas/)
* Custom settings support: [https://ghost.org/changelog/custom-design-settings/](https://ghost.org/changelog/custom-design-settings/)
* New Hero page template: [additional-notes/post-page-templates.html#hero](/additional-notes/post-page-templates.html#hero)
* Add more icons: [additional-notes/icon-pack.html](/additional-notes/icon-pack.html)
* Update Docker Ghost image (development only)
* Bug fixes and improvements

```
Added files:

custom-hero.hbs
src/sass/hero.scss

Modified files:

README.md
default.hbs
index.hbs
package.json
partials/footer.hbs
partials/home-hero.hbs
partials/home-slider.hbs
partials/logo.hbs
partials/loop.hbs
src/docker-compose.yml
src/js/app.js
src/js/helpers.js
src/js/post.js
src/sass/common/_icons.scss
src/sass/common/_theme.scss
src/sass/components/common/_logo.scss
src/sass/components/post/_post-content.scss
src/sass/fonts/galerie/Galerie.eot
src/sass/fonts/galerie/Galerie.svg
src/sass/fonts/galerie/Galerie.ttf
src/sass/fonts/galerie/Galerie.woff
src/sass/fonts/galerie/Galerie.woff2
src/sass/post.scss
src/webpack.mix.js

Renamed files:

custom-post-no-newsletter.hbs → custom-no-newsletter.hbs
custom-post-toc.hbs → custom-toc.hbs

Removed files:

custom-page-no-newsletter.hbs
custom-page-toc.hbs
```

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
