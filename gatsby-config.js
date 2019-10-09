/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: 'Diseño web, Wordpress y Marketing digital - Boneluv.com',
    siteUrl: 'https://www.boneluv.com'
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-boneluv`,
        short_name: `boneluv`,
        start_url: `/`,
        theme_color: `#ff187c`,
        icon: `src/boneicono.png`
      }
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        useMozJpeg: false,
        stripMetadata: true,
        defaultQuality: 75,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/imgs`,
        name: 'uploads',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options:
        {
        path: `${__dirname}/content/`,
        name: "posts",
        }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/portfolio/`,
        name: "portfolio",
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/sitemap.xml`,
        // Exclude specific pages or groups of pages using glob parameters
        // See: https://github.com/isaacs/minimatch
        // The example below will exclude the single `path/to/page` and all routes beginning with `category`
        query: `
          {
            site {
              siteMetadata {
                siteUrl
              }
            }
  
            allSitePage {
              edges {
                node {
                  path
                }
              }
            }
        }`,
        serialize: ({ site, allSitePage }) =>
          allSitePage.edges.map(edge => {
            return {
              url: site.siteMetadata.siteUrl + edge.node.path,
              changefreq: `daily`,
              priority: 0.7,
            }
          })
      }
    }
  ]
}
