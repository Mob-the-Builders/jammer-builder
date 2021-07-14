import React from "react"
import styles from './blog.module.css'
import Layout from '../components/layout'
import get from 'lodash/get'
import { graphql } from 'gatsby'
import MemberPreview from '../components/memberPreview';

const AboutPage = props => {
  const builders = get(props, 'data.allContentfulAbout.edges')
  console.log(builders);
  return(
    <Layout location={props.location}>
    <main >
      <div style={{ background: '#fff' }}>
          <h1 className={styles.hero}>About the Mob the Builders</h1>
          <div className="wrapper">
            <p className="section-headline">The MTB gang consists of:</p>
            <ul className="article-list">
              {builders.map(({ node }) => {
                  return (
                    <li key={node.slug}>
                      < MemberPreview article={node}/>
                    </li>
                  )
                })}
            </ul>
          </div>
        </div>
      </main>
    </Layout>
)}
export default AboutPage


export const pageQuery = graphql`
query MyQuery {
  allContentfulAbout {
    edges {
      node {
        title
        slug
        description {
          description 
        }
        picture {
          description
          fluid(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
            ...GatsbyContentfulFluid_tracedSVG
          }
        }
      }
    }
  }
}
`