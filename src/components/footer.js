import React, { Component } from "react"
import {Link} from "gatsby"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faPaperPlane,faFileAlt} from "@fortawesome/free-regular-svg-icons"
import styled from "styled-components"




export default () => (
<div >
  <div class="landing-cta" style={{background:'#F5F5F5'}}>
                <h3>Lanza tu proyecto ya</h3>
                <h4>Ponte en contacto conmigo y te asesoraré lo mejor posible.</h4>
                <div class="buttons">
                    <Link to="/contact" class="btn noicon" activeClassName="btn noicon">
                        <FontAwesomeIcon icon={faPaperPlane} style={{marginTop:'10px'}}/>
                        <span style={{fontSize:'13px',marginLeft:'5px',}}>Contacto</span>
                    </Link>
                    <Link to="/prices" class="btn noicon green" activeClassName="btn noicon green">
                        <FontAwesomeIcon icon={faFileAlt} style={{marginTop:'10px'}}/>
                        <span>Precios</span>
                    </Link>
                </div>
            </div> 
            <div class="landing-footer" style={{background:'#F5F5F5'}}>
                <div class="content">
                    <div class="links">
                        <ul>
                            <li>Enlaces</li>
                            <li><Link to="/about">Sobre mí</Link></li>
                            <li><Link to="/portfolio">Portfolio</Link></li>
                            <li><Link to="/prices">Planes</Link></li>
                        </ul>
                        <ul>
                            <li>Información</li>
                            <li><Link to="/faq">Preguntas frecuentes</Link></li>
                            <li><Link to="/privacy">Politica de privacidad</Link></li>
                            <li><a href="mailto:boneluvco@gmail.com" target="_blank">boneluvco@gmail.com</a></li>
                        </ul>
                        <ul>
                            <li>Sígueme</li>
                            <li><a href="https://twitter.com/boneluvco" target="_blank">Twitter</a></li>
                            <li><a href="https://facebook.com/boneluvco" target="_blank">Facebook</a></li>
                            <li><a href="https://instagram.com/boneluvco" target="_blank">Instagram</a></li>
                        </ul>
                    </div>
                </div>
            </div>  
</div>
)