const Promise = require('bluebird')
const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const blogPost = path.resolve('./src/templates/blog-post.js')
    const about = path.resolve('./src/templates/about-builders.js')
    resolve(
      graphql(
        `
          {
            allContentfulBlogPost
              {
              edges {
                node {
                  title
                  slug
                }
              }
            }
            builders: allContentfulAbout
              {
                edges {
                  node {
                    title
                    slug
                  }
                }
              }
          }
        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        const posts = result.data.allContentfulBlogPost.edges
        posts.forEach(post => {
          createPage({
            path: `/blog/${post.node.slug}/`,
            component: blogPost,
            context: {
              slug: post.node.slug,
            },
          })
        })
        const builders = result.data.builders.edges
        builders.forEach(builder => {
          createPage({
            path: `/about/${builder.node.slug}/`,
            component: about,
            context: {
              slug: builder.node.slug,
            },
          })
        })
      })
    )
  })
}
