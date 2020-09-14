/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Hersh Kataria's Personal Website`,
    siteUrl: `https://www.hershkat.com`,
    description: `Welcome to my home on the internet, where you can get to know who I am and what I do!`,
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-material-ui`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Hersh Kataria's Personal Website`,
        short_name: `HershKat`,
        start_url: `/`,
        background_color: `#0a192f`,
        theme_color: `#4becff`,
        icon: `src/assets/icon.svg`,
        display: `standalone`,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Fira Sans:300,400,500,600,700`, `Fira Code:300,400,500`],
        display: "swap",
      },
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown`,
        path: `src/data/`,
      },
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `src/data/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `src/assets/`,
      },
    },
  ],
};
