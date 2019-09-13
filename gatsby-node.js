const path = require("path")
const { createFilePath, createFileNode } = require(`gatsby-source-filesystem`)

exports.createPages = ({ actions, graphql }) => {
    const { createPage } = actions

    const blogPostTemplate = path.resolve(`src/templates/blog-post.js`)
    const portPostTemplate = path.resolve(`src/templates/port-post.js`)

    return new Promise((resolve, reject) => {

        resolve(graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
              fields{
                  slug
              }
            frontmatter {
              title
            }
          }
        }
      }
    }
  `).then(result => {
                if (result.errors) {
                    console.log(result.errors)
                    return reject(result.errors)
                }

                const blogTemplate = path.resolve('./src/templates/blog-post.js');
                const portTemplate = path.resolve('./src/templates/port-post.js');

                result.data.allMarkdownRemark.edges.forEach(({ node }) => {
                  if(node.frontmatter.template === `port`){
                      createPage({
                        path: node.fields.slug,
                        component: portTemplate,
                        context: {
                            slug: node.fields.slug,
                        }, // additional data can be passed via context
                      })
                    } else {
                        createPage({
                          path: node.fields.slug,
                          component: blogTemplate,
                          context: {
                              slug: node.fields.slug,
                          }, // additional data can be passed via context
                        })
                    }
                  })
                    
                return
            })
        )
    })
}


exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions
    if (node.internal.type === `MarkdownRemark`) {
        if(node.frontmatter.template === `post`){
          const slug = createFilePath({ node, getNode, basePath: `posts` })
        createNodeField({
            node,
            name: `slug`,
            value: slug,
        })
        } else {
          const slug = createFilePath({ node, getNode, basePath: `portfolio` })
          createNodeField({
              node,
              name: `slug`,
              value: slug,
          })
        }
        

    }
}