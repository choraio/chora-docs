const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Chora Docs',
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
    ['meta', { name: 'theme-color', content: '#3399CC' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
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
        text: 'Research',
        link: '/research/',
      },
      {
        text: 'Development',
        link: '/development/',
      },
      {
        text: 'GitHub',
        link: 'https://github.com/choraio'
      }
    ],
    sidebar: {
      '/research/': [
        {
          title: 'Research',
          collapsable: false,
          children: [
            '',
          ]
        },
        {
          title: 'Green NFT',
          collapsable: false,
          children: [
            '/research/green-nft/introduction',
            '/research/green-nft/ecodex-module',
            '/research/green-nft/econft-module',
          ]
        }
      ],
      '/development/': [
        {
          title: 'Welcome',
          collapsable: false,
          children: [
            '',
          ]
        },
        {
          title: 'Testing',
          collapsable: false,
          children: [
            '/development/testing/overview',
            '/development/testing/installation',
            '/development/testing/ibc-test-1',
            '/development/testing/ibc-test-2',
            '/development/testing/ibc-test-3',
            '/development/testing/ecocredit-test-1',
            '/development/testing/ecocredit-test-2',
            '/development/testing/ecodex-test-1',
          ]
        }
      ],
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
