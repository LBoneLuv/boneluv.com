import React from "react"
import Header from "../components/header.js"
import Footer from "../components/footer"
import Helmet from "react-helmet"
import {Link, graphql } from "gatsby"
import Layout from '../components/layout'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRocket,faUsers } from '@fortawesome/free-solid-svg-icons'
import { faArrowAltCircleRight,faFileAlt } from "@fortawesome/free-regular-svg-icons"

require ("./main.css")
const IndexPage = (props) => {
    const postList = props.data.allMarkdownRemark;
    return (
      <Layout>
          <Header/>
          <div class="landing-silhouette">
            <h1 class="big">Blog</h1>
            <h2 class="small">Programación, diseño, etc.</h2>
          </div>
          <div class="page-content" style={{justifyContent:'center',width:'60%',margin:'0 auto'}}> 
          <div style={{width:'100%'}}>
          <section class="dashboard-featured-links ng-scope">

              {postList.edges.map(({ node }, i) => (
                <Link to={node.fields.slug} key={i} class="featured-link" style={{backgroundImage: "url(" + node.frontmatter.image + ")",backgroundPosition:'center',minHeight:'250px'}}>
                
                  <div class="title">{node.frontmatter.title}</div>
                  <div class="subtitle">{node.frontmatter.description}</div>
                  <div class="posttagspost" style={{marginTop:'10px',marginBottom:'10px'}}>
                  {node.frontmatter.tags.map(tag =>(
                    <span style={{background:'#2cf7a4',marginTop:'5px',marginRight:'5px',borderRadius:'4px',color:'#050821',padding:'3px 10px', fontSize:'14px',fontWeight:'600',float:'left'}} key={tag}>{tag}</span>
                  ))}
                  </div>
                    
                </Link>
              ))}

          </section>
          </div>
          </div>
          
        <Footer/>
      </Layout>
    )
  }
  export default IndexPage;

  export const listQuery = graphql`
    query ListQuery {
      allMarkdownRemark(filter: {frontmatter: {template: {eq: "blog"}}}, sort: { order: DESC, fields: [frontmatter___date] }) {
        group(field: frontmatter___tags) {
          tag: fieldValue
          totalCount
        }
        edges {
          node {
            fields{
              slug
            }
            excerpt(pruneLength: 250)
            frontmatter {
              title
              description
              image
              tags
            }
          }
        }
      }
    }
  `