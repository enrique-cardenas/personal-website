module.exports = {
  siteMetadata: {
    title: `Enrique Cardenas`,
    description: `Enrique Cardenas' personal website `,
    author: `Enrique`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/my-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-emotion`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
        {
          resolve: "gatsby-remark-external-links",
        },
        {
          resolve: `gatsby-remark-images`,
          options: {
            maxWidth: 400,
            linkImagesToOriginal: false
          },
        },
        `gatsby-remark-component`,
        {
          resolve: `gatsby-remark-custom-image-component`,
          options: {
            // plugin options
            componentName: 'project-image',
            imagePropName: 'src',
            sharpMethod: 'fluid',
            // fluid's arguments
            quality: 50,
            maxWidth: 400,
          }
        },
        `gatsby-remark-prismjs`
        ]
      }
    },
    `gatsby-remark-images`


    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
