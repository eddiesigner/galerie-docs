# Theme Structure

The theme is organized with the following file structure:

```
.
├── LICENSE
├── README.md
├── assets
│   ├── css
│   │   ├── 404.css
│   │   ├── account.css
│   │   ├── app.css
│   │   ├── auth.css
│   │   ├── author.css
│   │   ├── authors.css
│   │   ├── hero.css
│   │   ├── home.css
│   │   ├── membership.css
│   │   ├── post.css
│   │   ├── tag.css
│   │   └── tags.css
│   ├── fonts
│   │   ├── atkinson
│   │   │   ├── Atkinson-Hyperlegible-Bold-102.woff
│   │   │   ├── Atkinson-Hyperlegible-Bold-102.woff2
│   │   │   ├── Atkinson-Hyperlegible-BoldItalic-102.woff
│   │   │   ├── Atkinson-Hyperlegible-BoldItalic-102.woff2
│   │   │   ├── Atkinson-Hyperlegible-Italic-102.woff
│   │   │   ├── Atkinson-Hyperlegible-Italic-102.woff2
│   │   │   ├── Atkinson-Hyperlegible-Regular-102.woff
│   │   │   └── Atkinson-Hyperlegible-Regular-102.woff2
│   │   ├── galerie
│   │   │   ├── Galerie.eot
│   │   │   ├── Galerie.svg
│   │   │   ├── Galerie.ttf
│   │   │   ├── Galerie.woff
│   │   │   └── Galerie.woff2
│   │   └── lightgallery
│   │       ├── lg.svg
│   │       ├── lg.ttf
│   │       └── lg.woff
│   │       └── lg.woff2
│   ├── images
│   │   ├── 404.jpg
│   │   ├── award-left.png
│   │   ├── award-right.png
│   │   ├── loading.gif
│   │   └── success.svg
│   ├── js
│   │   ├── app.js
│   │   ├── helpers.js
│   │   ├── home.js
│   │   ├── manifest.js
│   │   ├── post.js
│   │   └── vendor.js
│   ├── mix-manifest.json
│   ├── screenshot-desktop.jpg
│   └── screenshot-mobile.jpg
├── author.hbs
├── custom-hero.hbs
├── custom-no-newsletter.hbs
├── custom-toc.hbs
├── default.hbs
├── error-404.hbs
├── index.hbs
├── locales
│   ├── en.json
│   └── es.json
├── members
│   ├── account.hbs
│   ├── membership.hbs
│   ├── signin.hbs
│   └── signup.hbs
├── package.json
├── page-authors.hbs
├── page-newsletter.hbs
├── page-tags.hbs
├── page.hbs
├── partials
│   ├── author-social-links.hbs
│   ├── circles-shape.hbs
│   ├── comments.hbs
│   ├── footer.hbs
│   ├── header.hbs
│   ├── hero-image.hbs
│   ├── home-hero.hbs
│   ├── home-slide.hbs
│   ├── home-slider.hbs
│   ├── logo.hbs
│   ├── loop.hbs
│   ├── membership.hbs
│   ├── menu.hbs
│   ├── navigation.hbs
│   ├── newsletter-form.hbs
│   ├── pagination.hbs
│   ├── post-card.hbs
│   ├── post-header.hbs
│   ├── post-nav.hbs
│   ├── post-paywall.hbs
│   ├── post-share.hbs
│   ├── related-posts.hbs
│   ├── search.hbs
│   ├── social-links.hbs
│   └── toc.hbs
├── post.hbs
├── routes.yaml
└── tag.hbs
```

::: warning
Avoid making changes to the files in the `assets` folder as these will be overwritten with each new version. For small changes you can inject code in the Ghost Admin instead.
:::
