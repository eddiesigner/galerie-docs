# Change Log

## v2.1.1

> 02/11/2022

* Fixed an issue where images were not centered after pressing the zoom button in the lightbox gallery
* Fixed an issue where uploaded images didn't fill the full width in full-wide mode
* Update Ghost image version (development only)
* Bump version

```
Added files:

+ src/sass/fonts/lightgallery/lg.woff2
+ src/sass/vendor/lightgallery/transitions/_lg-lollipop-rev.scss

Modified files:

* package.json
* src/package-lock.json
* src/docker-compose.yml
* src/package.json
* src/sass/components/post/_post-content.scss
* src/sass/hero.scss
* src/sass/vendor/lightgallery/_lg-fonts.scss
* src/sass/vendor/lightgallery/_lg-theme-default.scss
* src/sass/vendor/lightgallery/_lg-variables.scss
* src/sass/vendor/lightgallery/lg-transitions.scss
* src/sass/vendor/lightgallery/lg-zoom.scss
* src/sass/vendor/lightgallery/lightgallery-core.scss
* src/sass/vendor/lightgallery/lightgallery.scss
```

## v2.1.0

> 01/09/2022

* Native Search support: [ghost.org/changelog/search/](https://ghost.org/changelog/search/)
* Native Comments support: [ghost.org/changelog/native-comments/](https://ghost.org/changelog/native-comments/)
* Fix theme mode flickering when page loads
* Fix Docker development environment
* Update Docker Ghost image (development only)
* Update dependencies

```
Modified files:

* README.md
* default.hbs
* package.json 
* partials/comments.hbs
* partials/footer.hbs
* partials/header.hbs
* partials/menu.hbs
* src/docker-compose.yml
* src/package-lock.json
* src/package.json
* src/sass/components/post/_post-comments.scss
* src/webpack.mix.js
```

## v2.0.0

> 07/06/2022

* **Ghost 5 support** 🎉
* Membership Tiers support: [ghost.org/help/tiers/](https://ghost.org/help/tiers/)
* New icons added: Behance, Pinterest, Discord, Stackoverflow, Podcast
* Hero template now includes comments, related posts and posts navigation
* Search is now way faster and more efficient
* Fixed an issue where lists inside a toggle card had a wrong font size

```
Added files:

src/sass/components/membership/_plan-switcher.scss

Modified files:

README.md
custom-hero.hbs
locales/en.json
locales/es.json
package.json
partials/footer.hbs
partials/home-hero.hbs
partials/home-slider.hbs
partials/membership.hbs
partials/menu.hbs
partials/newsletter-form.hbs
src/docker-compose.yml
src/js/app.js
src/js/post.js
src/package-lock.json
src/package.json
src/sass/common/_icons.scss
src/sass/components/membership/_tier-card.scss
src/sass/components/membership/_tiers-container.scss
src/sass/components/post/_post-content.scss
src/sass/fonts/galerie/Galerie.eot
src/sass/fonts/galerie/Galerie.svg
src/sass/fonts/galerie/Galerie.ttf
src/sass/fonts/galerie/Galerie.woff
src/sass/fonts/galerie/Galerie.woff2
src/sass/hero.scss
src/sass/membership.scss
```

## v1.1.3

> 17/05/2022

* Some small style issues with `mark` tags and social icons were fixed
* Table Of Contents now ignores non-wanted headings such as the new Headers cards (fixed again due some Ghost updates)
* The lightgallery plugin was updated to fix a couple of small issues

```
Modified files:

package.json
src/docker-compose.yml
src/js/post.js
src/package-lock.json
src/package.json
src/sass/components/common/_social-list.scss
src/sass/components/post/_post-content.scss
```

## v1.1.1

> 28/02/2022

* Footnote override is now applied in the main menu as well
* Table Of Contents now ignores non-wanted headings such as the new Headers cards
* Small improvements in the way plans and subscriptions prices are displayed

```
Modified files:

members/account.hbs
package.json
partials/membership.hbs
partials/menu.hbs
src/js/post.js
```

## v1.1.0

> 31/01/2022

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
