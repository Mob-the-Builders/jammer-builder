import React from "react"
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import styles from './article-preview.module.css'

const MemberPreview = ({ article }) => {
    console.log(article);
    return (
        <div className={styles.preview}>
            <Img alt={article.description} fluid={article.picture.fluid} />
            <h3 className={styles.previewTitle}>
            <Link to={`/about/${article.slug}`}>{article.title}</Link>
            </h3>
                <small>{article.title}</small>
            {/* <p
            dangerouslySetInnerHTML={{
                __html: props.description.childMarkdownRemark.html,
            }}
            /> */}
        </div>
    )
}

export default MemberPreview
