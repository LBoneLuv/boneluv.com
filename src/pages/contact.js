import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import Helmet from "react-helmet"

require ("./main.css")
export default () => (
    <div style={{background:'#FFF'}}>
        <Helmet>
            <title>Contacto | Boneluv</title>
        </Helmet>    
        
        <Header/>
        <div class="landing-silhouette">
                        <h1 class="big">Contacto</h1>
                        <h2 class="small">Presupuestos y consultas</h2>
                    </div>
                <div class="landing-item" style={{marginBottom: '100px'}}>
                    <div class="landing-content right">
                      <div class="half">
                            <h5>Solicita ya tu presupuesto personalizado</h5>
                      </div>
                      <div class="half" style={{display: 'flex', flexDirection:'column'}}>
                          <div>
                                <p style={{fontSize: '20px',fontWeight: '600'}}>Escribeme</p>
                                <a href="mailto:boneluvco@gmail.com" target="_blank"><h5 style={{color: '#FF187C'}}>boneluvco@gmail.com</h5></a>
                          </div>
                          <div>
                                <p style={{fontSize: '20px',fontWeight: '600'}}>Llamame</p>
                                <a href="tel:34644770223" target="_blank"><h5 style={{color: '#FF187C'}}>+34644770223</h5></a>
                          </div>
                     </div>  
                    </div>
                </div>
        <Footer/>
    </div>
)