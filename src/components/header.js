import React from "react"
import { Link } from "gatsby";
import logo from "../../static/imgs/bonel.png"

export default () => (
  <nav class="landing-nav">
            <Link to="/" activeClassName="landing-nav-logo" class="landing-nav-logo">
                <div><img src={logo} alt="Boneluv" /></div>
            </Link>
            <div class="landing-nav-links">
                <span class="links">
                    <div class="item">
                        <Link to="/">Inicio</Link>
                    </div>
                    <div class="item">
                            <Link to="/about">Sobre mí</Link>
                        </div>
                        <div class="item">
                                <Link to="portfolio">Portfolio</Link>
                            </div>
                            <div class="item">
                                    <Link to="prices">Servicios</Link>
                                </div>
                            <div class="item">
                                    <Link to="blog">Blog</Link>
                                </div>
                </span>
                
                <span class="buttons">
                    <div class="item" style={{marginRight:'10px'}}>
                        <Link class="accent alt" to="/contact" activeClassName="accent alt">Contacto</Link>
                    </div>
                    <div class="item">
                        <Link class="accent" to="/prices" activeClassName="accent">Precios</Link>
                    </div>        
                </span>
                

            </div>
    </nav>
)