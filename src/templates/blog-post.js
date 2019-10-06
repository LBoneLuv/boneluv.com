import React from "react";
import Layout from "../components/layout"
import Header from "../components/header.js"
import Footer from "../components/footer"
import Img from "gatsby-image"
import { graphql } from "gatsby"
import me from "../../static/imgs/jmr.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRocket,faUsers, faDraftingCompass, faBullhorn, faCrop, faMagic, faCheck, faCheckCircle, faPaperPlane, faCode, faChartBar, faSearch,faEye } from '@fortawesome/free-solid-svg-icons'
import { faArrowAltCircleRight } from "@fortawesome/free-regular-svg-icons"
import { faGoogle, faTwitter, faMedium, faFacebook, faGithub} from "@fortawesome/free-brands-svg-icons"

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
                <div class="authorpost" style={{marginTop:'40px'}}>
                  <div class="authorimg" style={{backgroundImage: 'url('+ me +')'}}></div>
                  <div class="authorinfo">
                    <h3>José Manuel Ramírez</h3>
                    <h5>Desarrollador web</h5>
                    <div class="socialauthor">
                      <a href="https://twitter.com/boneluvco" alt="Twitter" target="_blank"><i><FontAwesomeIcon icon={faTwitter} /></i></a>
                      <a href="https://medium.com/@boneluvco" alt="Twitter" target="_blank"><i><FontAwesomeIcon icon={faMedium} /></i></a>
                      <a href="https://facebook.com/boneluvco" alt="Twitter" target="_blank"><i><FontAwesomeIcon icon={faFacebook} /></i></a>
                      <a href="https://github.com/lboneluv" alt="Twitter" target="_blank"><i><FontAwesomeIcon icon={faGithub} /></i></a>

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