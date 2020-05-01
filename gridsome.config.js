// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Wine Guy Photography',
  siteUrl: 'https://www.wineguyphotography.com',
  siteDescription: 'Wine Guy Photography - Professional & Affordable',
  icon: 'src/favicon.png',
  remark: {
    externalLinksTarget: '_blank',
    externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
    anchorClassName: 'icon icon-link',
  },
  chainWebpack (config) {
    config.mode('development')
  },
    plugins: [
      {
        use: '@gridsome/source-filesystem',
        options: {
          path: 'content/Services/*.md',
          typeName: 'Services',
          remark: {
            plugins: [
              // ...local plugins
            ]
          }
        }
      },
      {
        use: '@gridsome/source-filesystem',
        options: {
          path: 'content/*.md',
          typeName: 'Content',
          remark: {
            plugins: [
              // ...local plugins
            ]
          }
        }
      },
      {
        use: '@gridsome/source-filesystem',
        options: {
          path: 'portfolio/*.md',
          typeName: 'Portfolio',
          remark: {
            plugins: [
              // ...local plugins
            ]
          }
        }
      },
      {
        use: '@gridsome/source-filesystem',
        options: {
          path: 'content/Pricing/*.md',
          typeName: 'Pricing',
          remark: {
            plugins: [
              // ...local plugins
            ]
          }
        }
      },
      {
        use: '@gridsome/source-filesystem',
        options: {
          path: '/clientlove/*.md',
          typeName: 'Clientlove',
          remark: {
            plugins: [
              // ...local plugins
            ]
          }
        }
      },
      {
        use: `gridsome-plugin-netlify-cms`,
        options: {
          publicPath: `/admin`
        }
      },
    ]
}
