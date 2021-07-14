import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import get from 'lodash/get'
import Img from 'gatsby-image'
import Layout from '../components/layout'

import heroStyles from '../components/hero.module.css'

const AboutBuildersTemplate = props => {
    const builders = get(props, 'data.contentfulAbout')
    console.log(builders)

    console.log(builders)
  return(
    <Layout location={props.location}>
      <div style={{ background: '#fff' }}>
        <Helmet title={`${builders.title}`} />
        Hello there
        <div className={heroStyles.hero}>
            <Img
              className={heroStyles.heroImage}
              alt={builders.title}
              fluid={builders.picture.fluid}
            />
          </div>
          <div className="wrapper">
            <h1 className="section-headline">{builders.title}</h1>
            </div>
      </div>
    </Layout>

  )
} 
// class BlogPostTemplate extends React.Component {
//   render() {
//     const post = get(this.props, 'data.builders')
//     const siteTitle = get(this.props, 'data.site.siteMetadata.title')
//     console.log(this.props);

//     return (
//       <Layout location={this.props.location}>
//         <div style={{ background: '#fff' }}>
//           <Helmet title={`${post.title} | ${siteTitle}`} />
//           <div className={heroStyles.hero}>
//             <Img
//               className={heroStyles.heroImage}
//               alt={post.title}
//               fluid={post.heroImage.fluid}
//             />
//           </div>

//               dangerouslySetInnerHTML={{
//                 __html: post.body.childMarkdownRemark.html,
//               }}
//             />
//           </div>
//         </div>
//       </Layout>
//     )
//   }
// }

export default AboutBuildersTemplate;

export const pageQuery = graphql`
query TemplateQueryAbout($slug: String!) {
  contentfulAbout(slug: { eq: $slug }) {
    picture {
      fluid(maxWidth: 1180, background: "rgb:000000") {
        ...GatsbyContentfulFluid_tracedSVG
      }
    }
    title
    description{
      description
    }
  }
}
`
