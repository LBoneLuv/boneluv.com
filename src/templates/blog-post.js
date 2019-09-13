import React from "react";
import Layout from "../components/layout"
import Header from "../components/header.js"
import Footer from "../components/footer"
import Img from "gatsby-image"
import { graphql } from "gatsby"
import me from "../../static/imgs/jmr.jpg"

function BlogPost(props) {

    const post = props.data.markdownRemark;
    const { title,image,tags } = post.frontmatter;

    return (
        <Layout>
            <Header/>
            <div>
                <div class="templatepost"> 
                <h1>{title}</h1>
                <div class="posttagspost" style={{marginTop:'10px',marginBottom:'10px',display:'flex',flexWrap:'wrap'}}>
                  {tags.map(tag =>(
                    <span style={{marginBottom:'5px',background:'#2cf7a4',marginRight:'5px',borderRadius:'4px',color:'#050821',padding:'3px 10px', fontSize:'14px',fontWeight:'600'}} key={tag}>{tag}</span>
                  ))}
                  </div>
                <div dangerouslySetInnerHTML={{ __html: post.html }} />
                <div style={{margin:'0 auto'}}>
                <div class="authorpost">
                  <div class="authorimg" style={{backgroundImage: 'url('+ me +')'}}></div>
                  <div class="authorinfo">
                    <h3>José Manuel Ramírez</h3>
                    <h5>Desarrollador web</h5>
                    <div class="socialauthor">
                      <a>Twitter</a>
                      <a>Facebook</a>
                      <a>Medium</a>
                      <a>Github</a>

                    </div>
                  </div>
                </div>
                </div>
                
                </div>
                
            </div>
            <Footer/>
        </Layout>
    )
}


export default BlogPost;

export const query = graphql`

 query PostQuery($slug: String!) {
     markdownRemark(fields: { slug: { eq: $slug } }) {
       html
       excerpt
       frontmatter {
        title
        description
        image
        tags
        }
       }
   }
`