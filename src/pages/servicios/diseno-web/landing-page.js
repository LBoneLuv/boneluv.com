import React from "react"
import Helmet from "react-helmet"
import Header from "../../../components/header"
import Footer from "../../../components/footer"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight,faRocket,faUsers, faDraftingCompass, faBullhorn, faCrop, faMagic, faCheck, faCheckCircle, faPaperPlane, faAngleDoubleRight, faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons'
import { faArrowAltCircleRight,faArrowAltCircleLeft  } from "@fortawesome/free-regular-svg-icons"
import {Link, graphql } from "gatsby"


require ("../../main.css")

export default () => (
    <div>
        <Header/>
        <div class="landing-hero hide-mob" style={{marginTop:'40px'}}>
                <h1>Landing page</h1>
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
        <div class="bone-bread-list">
            <div class="bone-bread">
            <Link class="bread-link" to="/" activeStyle={{textDecoration: 'underline', color:'black', fontSize:'14px', fontWeight:'600'}} replace>
                <span>Inicio</span>
            </Link>
            <span><FontAwesomeIcon icon={faChevronRight} /></span>
            <Link class="bread-link" to="/planes-y-precios-diseno-web-marketing-digital" activeStyle={{textDecoration: 'underline', color:'black', fontSize:'14px', fontWeight:'600'}} replace>
                
                <span>Servicios</span>
            </Link>
            <span><FontAwesomeIcon icon={faChevronRight} /></span>
            <Link class="bread-link" to="/servicios/diseno-web/" activeStyle={{textDecoration: 'underline', color:'black', fontSize:'14px', fontWeight:'600'}} replace>
                <span>Diseño web</span>
            </Link>
            <span><FontAwesomeIcon icon={faChevronRight} /></span>
            <Link class="bread-link" to="/servicios/diseno-web/landing-page" activeStyle={{textDecoration: 'underline', color:'black', fontSize:'14px', fontWeight:'600'}} replace>
                <span>Landing page</span>
            </Link>
            </div>
            <div>
                Landing
            </div>
        </div>
        <Footer/>
    </div>

)