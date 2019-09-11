// @ts-check
const docsTheme = require('@minipress/minipress-theme-docs')
const { resolve } = require('path')

module.exports = {
  theme: docsTheme,
  build: {
    base: '/minipress/'
  },
  configureSiteData(site) {
    site.productName = 'miniPress'
  },
  pages: resolve(__dirname, '..', 'pages'),
  themeConfig: {
    navbar: {
      items: [
        { text: 'Home', link: '/' },
        { text: 'Guide', link: '/guide/' },
        { text: 'Configuration', link: '/configuration/' },
        { text: 'Themes', link: '/themes/' },
        { text: 'GitHub', link: '/404' },
      ]
    }
  }
}
