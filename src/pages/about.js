import React from "react"
import styles from './blog.module.css'
import Layout from '../components/layout'

const AboutPage = () => (
  <Layout >
  <main >
  <div style={{ background: '#fff' }}>
    <h1 className={styles.hero}>About the Mob the Builders</h1>
    <div className="wrapper">
    <p className="section-headline">Welcome to my Gatsby site.</p>
    </div>
    </div>
  </main>
  </Layout>
)
export default AboutPage