import React, { Share, ShareLink, LinkLabel} from "react";
import Layout from "../components/layout"
import Header from "../components/header.js"
import Footer from "../components/footer"
import Helmet from "react-helmet"
import Img from "gatsby-image"
import { graphql } from "gatsby"
import me from "../../static/imgs/jmr.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRocket,faUsers, faDraftingCompass, faBullhorn, faCrop, faMagic, faCheck, faCheckCircle, faPaperPlane, faCode, faChartBar, faSearch,faEye } from '@fortawesome/free-solid-svg-icons'
import { faArrowAltCircleRight } from "@fortawesome/free-regular-svg-icons"
import { faGoogle, faTwitter, faMedium, faFacebook, faGithub} from "@fortawesome/free-brands-svg-icons"

function BlogPost(props) {

    const post = props.data.markdownRemark;
    const { title,image,description,tags,slugseo } = post.frontmatter;

    return (
        <Layout>
          <Helmet>
            <title>{title} | Boneluv</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={tags} />
        </Helmet>
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
                

<div>
  <h4 style={{fontWeight: '800', fontSize: '20px', textAlign: 'center', marginTop:'40px'}}>¡Compártelo!</h4>
  <div style={{display:'flex', justifyContent:'center'}}>
    <div style={{padding:'10px 10px'}}>
      <a
        href={`https://twitter.com/intent/tweet/?text=${
          post.frontmatter.title
        }&url=https://boneluv.com${post.fields.slug}&via=boneluvco`}
      >
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            stroke="currentColor"
            stroke-width="0"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="icon icon-twitter"
          >
            <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
          </svg>
        </span>
        
      </a>
    </div>
    <div style={{padding:'10px 10px'}}>
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=https://boneluv.com${
          post.fields.slug
        }`}
        target="_blank"
      >
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            stroke="currentColor"
            stroke-width="0"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="icon icon-facebook"
          >
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
          </svg>
        </span>
        
      </a>
    </div>
    <div style={{padding:'10px 10px'}}>
      <a
        href={`https://www.linkedin.com/shareArticle?mini=true&url=https://boneluv.com${
          post.fields.slug
        }&title=${post.frontmatter.title}&source=${post.frontmatter.title}`}
        target="_blank"
      >
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            stroke="currentColor"
            stroke-width="0"
            stroke-linecap="square"
            stroke-linejoin="square"
            class="icon icon-linkedin"
          >
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
            <rect x="2" y="9" width="4" height="12" />
            <circle cx="4" cy="4" r="2" />
          </svg>
        </span>
        
      </a>
    </div>
  </div>
</div>




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
       fields{
         slug
       }
       frontmatter {
        title
        description
        image
        tags
        
        }
       }
   }
`