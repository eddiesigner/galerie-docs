const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Galerie Ghost Theme',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#111111' }],
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'Change Log',
        link: '/misc/changelog',
      },
      {
        text: 'Terms',
        link: '/misc/terms',
      },
      {
        text: 'Features',
        link: 'https://galerie.eduardogomez.io/features',
      },
      {
        text: 'Style Guide',
        link: 'https://galerie.eduardogomez.io/style-guide',
      },
      {
        text: 'Get Galerie',
        link: 'https://gum.co/ZXLha'
      }
    ],
    sidebar: [
      {
        title: 'Guide',
        collapsable: false,
        children: [
          '/guide/',
          '/guide/install-theme',
          '/guide/update-theme',
          '/guide/theme-structure',
          '/guide/publication-settings',
          '/guide/navigation',
          '/guide/members',
          '/guide/newsletter',
          '/guide/search',
          '/guide/authors-page',
          '/guide/tags-page',
          '/guide/comments',
          '/guide/table-of-contents',
          '/guide/theme-translation',
          '/guide/dark-mode',
          '/guide/theme-development',
        ]
      }
    ]
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/medium-zoom',
  ]
}
