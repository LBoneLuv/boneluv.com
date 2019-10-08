import React from 'react';
import Layout from '../components/layout';
import Header from "../components/header.js"
import Footer from "../components/footer"
import { graphql } from "gatsby"

function PortPost(props) {

    const port = props.data.markdownRemark;
    const { title,slugseo } = port.frontmatter;

    return (
        <Layout>
            <Header/>
            <div>
                <h1 style={{fontSize:'20px'}}>{title}</h1>
                <span>portfolio</span>
                <div dangerouslySetInnerHTML={{ __html: post.html }} />
            </div>
            <Footer/>
        </Layout>
    )
}


export default PortPost;

export const query = graphql`

 query PortQuery($slug: String!) {
     markdownRemark(fields: { slug: { eq: $slug } }) {
       html
       excerpt
       fields{
           slug
       }
       frontmatter {
        title
        description
        tags
        }
       }
   }
`