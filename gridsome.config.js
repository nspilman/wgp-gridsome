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
    plugins: [
      {
        use: '@gridsome/source-filesystem',
        options: {
          path: 'content/IndexServices/*.md',
          typeName: 'IndexServices',
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
          path: 'pricing/events/*.md',
          typeName: 'Pricing_events',
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
          path: 'content/Pricing/*/*.md',
          typeName: 'Pricing',
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
