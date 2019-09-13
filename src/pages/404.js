import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import { Link } from 'gatsby'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faHome} from "@fortawesome/free-solid-svg-icons"

export default () => (
    <div style={{background:'#FFF'}}>
        <Header/>
        <div class="landing-silhouette" style={{zIndex:'99999999999999999999999'}}>
            <h1 class="big">404</h1>
            <h2 class="small">Página no encontrada</h2>
        </div>
        <div class="designer-info-page" style={{marginBottom:'100px'}}>
            <div class="info-video">
                <div class="video-title">
                    Lo sentimos, no se ha podido encontrar la página que buscas.
                </div>
                <div class="square">&nbsp;</div>
                <div class="circle">&nbsp;</div>

                <br/>
                <Link to={'/'}>
                <button class="btn noicon big">    
                    <FontAwesomeIcon icon={faHome} style={{marginTop:'15px'}}/>
                    <span>Volver a inicio</span>
                </button>
                </Link>
            </div>
        </div>
        
        <Footer/>
    </div>
)