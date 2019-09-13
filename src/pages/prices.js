import React from "react"
import Helmet from "react-helmet"
import Header from "../components/header"
import Footer from "../components/footer"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRocket,faUsers } from '@fortawesome/free-solid-svg-icons'
import { faArrowAltCircleRight,faFileAlt } from "@fortawesome/free-regular-svg-icons"

export default () => (
    <div style={{background:'#FFF'}}>
        <Header/>
        <div class="animateview ng-scope">
                <div class="landing-silhouette">
                        <h1 class="big">Servicios</h1>
                        <h2 class="small">Planes y precios</h2>
                    </div>

                <div class="page-body dashboard wait ng-scope">
                <div class="page-main">
                <h1 class="section-header ng-scope">Mis servicios</h1>
                <div align="center">
                <div class="resume-container ng-scope" ng-if="userData.resumes">
                    <section class="resume-card ng-scope" style={{backgroundColor: '#5555FF'}} onclick="window.location='webprices'">
                        <div class="title ng-binding">
                            Diseño web
                        </div>
                        <div class="subtitle ng-binding">
                                <small>
                                        <span>Landing page</span>
                                            <span>•</span>
                                            <span>Web Corporativa</span>
                                            <span>•</span>
                                            <span>Tienda online</span>
                                    </small>
                        </div>
                
                    </section>
                    <section class="resume-card ng-scope" style={{backgroundColor: '#8bc34a'}} onclick="window.location='seoprices'">
                        <div class="title ng-binding">
                           Posicionamiento web
                        </div>
                        <div class="subtitle ng-binding">
                                <small>
                                        <span>SEO Local</span>
                                            <span>•</span>
                                            <span>SEO Empresa</span>
                                            <span>•</span>
                                            <span>SEO Ecommerce</span>
                                    </small>
                        </div>
                
                    </section>
                    
                    <section class="resume-card ng-scope" style={{backgroundColor: '#ff4081'}} onclick="window.location='socialprices'">
                            <div class="title ng-binding">
                               Redes sociales
                            </div>
                            <div class="subtitle ng-binding">
                                    <small>
                                            <span>Presencia</span>
                                                <span>•</span>
                                                <span>Influencia</span>
                                                <span>•</span>
                                                <span>Marca</span>
                                        </small>
                            </div>
                    
                        </section>
                        <section class="resume-card ng-scope" style={{backgroundColor: '#78909c'}} onclick="window.location='manprices'">
                                <div class="title ng-binding">
                                   Mantenimiento
                                </div>
                                <div class="subtitle ng-binding">
                                        <small>
                                                <span>Básico</span>
                                                    <span>•</span>
                                                    <span>Empresa</span>
                                                    <span>•</span>
                                                    <span>Ecommerce</span>
                                            </small>
                                </div>
                        
                            </section>
                    
                
                
                </div>
                </div>
                </div>
                </div>
                </div>
        <Footer/>
    </div>
)