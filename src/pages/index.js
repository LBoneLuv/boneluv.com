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
export default () => (
    <div style={{background:'#FFF'}}>
        <Helmet>
            <title>Boneluv | Diseño web, WordPress y Marketing digital</title>
            <meta name="description" content="Diseñador web en sevilla: diseño web a medida para cualquier tipo de web, página web corporativa, blog, tienda online.
                 En Boneluv realizamos posicionamiento web y gestionamos tus redes sociales. " />
            <meta name="keywords" content="boneluv,diseño web, diseño web a medida, diseño web profesional, diseño web en sevilla" />
        </Helmet>
        
            <Header/>
            <div class="landing-hero" style={{marginTop:'40px'}}>
                <h1>Diseño web a medida</h1>
                <h2>Diseños web responsive adaptado a las últimas tendencias y con las mejores tecnologías.</h2>
                <div class="action">
                        <Link class="btn noicon" to="servicios/diseno-web">
                                <FontAwesomeIcon  icon={faArrowAltCircleRight} style={{marginTop:'10px'}}/>
                                <span>Ver planes</span>
                            </Link>
                            <small>
                                <span>Landing page</span>
                                    <span>•</span>
                                    <span>Web Corporativa</span>
                                    <span>•</span>
                                    <span>Tienda online</span>
                            </small>
                </div>
                
        </div>   
        <div class="landing-item">
                <div class="landing-content right">
                    <div class="image">
                        <img src={'imgs/seo.svg'} />
                    </div>
                    <div class="half">
                        <h5>Optimización SEO</h5>
                        <p>
                            Optimizacion web para SEO on page y off page, para que tu web despegue.
                        </p>
                        <Link class="btn noicon" to="servicios/posicionamiento-web">
                            <FontAwesomeIcon icon={faRocket} style={{marginTop:'10px'}}/>
                            <span>Ver planes de posicionamiento</span>
                        </Link>
                    </div>
                </div>
            </div>
            <div class="landing-item">
                <div class="landing-content left">
                    <div class="half">
                        <h5>Redes sociales</h5>
                        <p>
                           Aumenta tu presencia en las redes sociales y destaca sobre tu competencia con contenidos únicos y de valor.
                        </p>
                        <Link class="btn noicon" to="servicios/redes-sociales">
                            <FontAwesomeIcon icon={faUsers} style={{marginTop:'10px'}}/>
                            <span>Ver planes de redes sociales</span>
                        </Link>
                    </div>
                    <div class="image">
                        <img src={'imgs/social.svg'} />
                    </div>
                    
                </div>
            </div>
            <div class="landing-item">
                <div class="landing-content right">
                    <div class="image">
                        <img src={'imgs/portfolio.svg'} />
                    </div>
                    <div class="half">
                        <h5>Portfolio</h5>
                        <p>
                           Puedes ver mis trabajos y proyectos recientes de diseño web, branding, posicionamiento y más.
                        </p>
                        <Link class="btn noicon" to="/portfolio">
                            <FontAwesomeIcon icon={faFileAlt} style={{marginTop:'10px'}}/>
                            <span>Explorar proyectos</span>
                        </Link>
                    </div>
                </div>
            </div>
            <div class="landing-silhouette">
                <div class="big">diseños únicos</div>
                <div class="small">personas únicas</div>
            </div>
            <Footer/>
        </div>
        
)