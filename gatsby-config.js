module.exports = {
  siteMetadata: {
    siteTitle: `gatsby-starter-hpp`,
    siteTitleAlt: `Gatsby Starter hpp - @hppRC/gatsby-starter-hpp`,
    siteHeadline: `Gatsby Starter hpp - Gatsby Starter from @hppRC`,
    siteUrl: `https://gatsby-starter-hpp.netlify.com`,
    siteDescription: `simple gatsby starter with mdx, typescript, pwa`,
    siteLanguage: `en`,
    siteImage: ``,
    author: `@hppRC`,
    basePath: '/'
  },
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-emotion`,
    `gatsby-plugin-catch-links`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          `gatsby-remark-relative-images`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 690,
              quality: 90,
              linkImagesToOriginal: true
            }
          }
        ]
      }
    },
    {
      resolve: 'gatsby-plugin-graphql-codegen',
      options: {
        fileName: `types/graphql-types.d.ts`
      }
    }
  ]
};