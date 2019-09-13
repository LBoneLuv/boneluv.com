import React, { Component } from "react"
import Header from "../components/header.js"
import Footer from "../components/footer"
import Helmet from "react-helmet"
import {Link, graphql } from "gatsby"
import Layout from '../components/layout'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRocket,faUsers } from '@fortawesome/free-solid-svg-icons'
import {faGithub} from "@fortawesome/free-brands-svg-icons"
import { faArrowAltCircleRight,faFileAlt, faEnvelope } from "@fortawesome/free-regular-svg-icons"

// export default class portPage extends Component{
//   state = {
//     posts: this.props.data.allMarkdownRemark
//   }
//   render(){
//     const postList = this.state.posts
//     return (
//       <Layout>
//           <Header/>
//           <div class="landing-silhouette">
//             <h1 class="big">Portfolio</h1>
//             <h2 class="small">Mis trabajos</h2>
//           </div>
//           <div class="page-content" style={{justifyContent:'center',width:'60%',margin:'0 auto'}}> 
//           <div style={{width:'100%'}}>
//           <h1 class="section-header">Read</h1>
//           <section class="dashboard-featured-links ng-scope">

//               {postList.edges.map(({ node }, i) => (
//                 <Link to={node.fields.slug} key={i} class="featured-link" style={{backgroundImage: "url(" + node.frontmatter.image + ")",position:'relative'}}>
//                   {/* <img src={node.frontmatter.image} style={{position:'absolute',width:'100%',margin:'0',padding:'0',objectFit:'cover'}}/> */}
//                   <div class="title">{node.frontmatter.title}</div>
//                   <div class="subtitle">{node.frontmatter.description}</div>
//                 </Link>
//               ))}

//           </section>
//           </div>
//           </div>

//           <section class="feature-section ng-scope">

//         <div class="header">
//             <h1>Proyectos personales</h1>
//             <p>Visita mi github para ver mis respositorios con proyectos personales y open source.</p>
//         </div> 

//         <div class="buttons">
//             <a class="btn black noicon" href="http://github.com/lboneluv" target="_blank">
//                 <FontAwesomeIcon icon={faGithub} style={{marginTop:'10px'}}/>
//                 <span>Ver repositorios</span>
//             </a>
//             <Link class="btn green noicon" to="/contact">
//                 <FontAwesomeIcon icon={faEnvelope}  style={{marginTop:'10px'}}/>
//                 <span>Contactar</span>
//             </Link>
//         </div>

//         </section>
//         <Footer/>
//       </Layout>
//     )
//   }
// }
const portPage = (props) => {
    const portList = props.data.allMarkdownRemark;
    return (
      <Layout>
          <Header/>
          <div class="landing-silhouette">
            <h1 class="big">Portfolio</h1>
            <h2 class="small">Mis trabajos</h2>
          </div>
          <div class="page-content" style={{justifyContent:'center',width:'60%',margin:'0 auto'}}> 
          <div style={{width:'100%'}}>
          <section class="dashboard-featured-links ng-scope">

              {portList.edges.map(({ node }, i) => (
                <Link to={node.fields.slug} key={i} class="featured-link" style={{backgroundImage: "url(" + node.frontmatter.image + ")",position:'relative',backgroundPosition:'center',minHeight:'250px'}}>
                  {/* <img src={node.frontmatter.image} style={{position:'absolute',width:'100%',margin:'0',padding:'0',objectFit:'cover'}}/> */}
                  <div class="title">{node.frontmatter.title}</div>
                  <div class="subtitle">{node.frontmatter.description}</div>
                  <div class="posttagspost" style={{marginTop:'10px',marginBottom:'10px'}}>
                  {node.frontmatter.tags.map(tag =>(
                    <span style={{marginTop:'5px',background:'#ff187c',marginRight:'5px',borderRadius:'4px',color:'#fff',padding:'3px 10px', fontSize:'14px',fontWeight:'600',float:'left'}} key={tag}>{tag}</span>
                  ))}
                  </div>
                </Link>
              ))}

          </section>
          </div>
          </div>

          <section class="feature-section ng-scope">

        <div class="header">
            <h1>Proyectos personales</h1>
            <p>Visita mi github para ver mis respositorios con proyectos personales y open source.</p>
        </div> 

        <div class="buttons">
            <a class="btn black noicon" href="http://github.com/lboneluv" target="_blank">
                <FontAwesomeIcon icon={faGithub} style={{marginTop:'10px'}}/>
                <span>Ver repositorios</span>
            </a>
            <Link class="btn green noicon" to="/contact">
                <FontAwesomeIcon icon={faEnvelope}  style={{marginTop:'10px'}}/>
                <span>Contactar</span>
            </Link>
        </div>

        </section>
        <Footer/>
      </Layout>
    )
  }
  export default portPage;

  export const portQuery = graphql`
    query portQuery {
      allMarkdownRemark(filter: { frontmatter: {template: {eq: "port"}}}, sort: { order: DESC, fields: [frontmatter___date] }) {
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



// export default () => (
//     <div style={{background:'#FFF'}}>
//         <Header/>
//         <div class="landing-silhouette">
//             <h1 class="big">Portfolio</h1>
//             <h2 class="small">Descubre mis proyectos</h2>
//         </div>

//         <section class="feature-section ng-scope">

//         <div class="header">
//             <h1>Proyectos personales</h1>
//             <p>Visita mi github para ver mis respositorios con proyectos personales y open source.</p>
//         </div> 

//         <div class="buttons">
//             <a class="btn black noicon" href="http://github.com/lboneluv" target="_blank">
//                 <FontAwesomeIcon icon={faGithub} style={{marginTop:'10px'}}/>
//                 <span>Ver repositorios</span>
//             </a>
//             <Link class="btn green noicon" to="/contact">
//                 <FontAwesomeIcon icon={faEnvelope}  style={{marginTop:'10px'}}/>
//                 <span>Contactar</span>
//             </Link>
//         </div>

//         </section>
//         <Footer/>
//     </div>
