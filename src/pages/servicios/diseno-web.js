import React from "react"
import Header from "../../components/header"
import Footer from "../../components/footer"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRocket,faUsers, faDraftingCompass, faBullhorn, faCrop, faMagic, faCheck, faCheckCircle, faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { faArrowAltCircleRight,  } from "@fortawesome/free-regular-svg-icons"
import {Link, graphql } from "gatsby"

require ("../main.css")

export default () => (
    <div style={{background:'white'}}>
        <Header/>
        <div>
            <div class="landing-silhouette">
                <h1 class="big">Diseño web</h1>
                <h2 class="small">Profesional y a medida</h2>
            </div>
            <h3 style={{textAlign:'center',fontSize: '32px', fontWeight:'800',marginBottom:'30px'}}>Descubre nuestro proceso</h3>
            <div class="designer-features">
                
                <div class="feature">
                    <h5>
                        Diseño web a medida
                        <i><FontAwesomeIcon icon={faDraftingCompass} /></i>
                    </h5>
                    <p>
                        Cada proyecto es <b>único</b> por eso cada <b>diseño</b> o <b>desarrollo</b> es hecho <b>a medida</b> y ajustado para cada cliente
                        utilizando las <b>mejores tecnologías</b> y servicios disponibles adaptándose a las necesidades de cada cliente.
                    </p>
                </div>
                <div class="feature">
                    <h5>
                        Estrategia online
                        <i><FontAwesomeIcon icon={faBullhorn} /></i>
                    </h5>
                    <p>Analisis de tu negocio con uso de herramientas de medición para poder realizar el trabajo optimizado a un nicho en concreto
                        para su correcto posicionamiento.
                    </p>
                </div>
                <div class="feature">
                    <h5>
                        Diseño web responsive
                        <i><FontAwesomeIcon icon={faCrop} /></i>
                    </h5>
                    <p>Diseño adaptado para y optimizado para uso en dispositivos moviles, y en cualquier tipo de pantallas para llegar al maximo
                        numero de personas posibles.
                    </p>
                </div>
                <div class="feature">
                    <h5>
                        Experiencia de usuario
                        <i><FontAwesomeIcon icon={faMagic} /></i>
                    </h5>
                    <p>
                        Uso de las mejores herramientas y un codigo unico para proporcionar la mejor experiencia de usuario a los visitantes de tu
                        web para que hagan uso y se sientan comodos navegando por tu web.
                    </p>
                </div>
                
            </div>
            <h3 style={{textAlign:'center',fontSize: '32px', fontWeight:'800',marginBottom:'30px'}}>Nuestros servicios de diseño web</h3>
            <div class="landing-item">
                <div class="landing-content left">
                <div class="image">
                        <img src={'../imgs/landing.svg'} />
                    </div>
                    <div class="half">
                        <h5>Landing page</h5>
                        <p>Página diseñada para atraer personas a tu negocio y convertirlos en clientes potenciales.</p>
                        <p><FontAwesomeIcon icon={faCheckCircle}  style={{color:'#ff187c'}} /> Orientada a conversiones</p>
                        <p><FontAwesomeIcon icon={faCheckCircle}  style={{color:'#ff187c'}} /> Integración de formulario/compra</p>
                        <p><FontAwesomeIcon icon={faCheckCircle}  style={{color:'#ff187c'}} /> Optimizada para anuncios</p>
                        <Link class="btn noicon" to="/portfolio">
                            <FontAwesomeIcon icon={faArrowAltCircleRight} style={{marginTop:'10px'}}/>
                            <span>Ver planes</span>
                        </Link>
                    </div>
                    
                </div>
            </div>
            <div class="landing-item">
                <div class="landing-content right">
                    <div class="half">
                        <h5>Landing page</h5>
                        <p>Página diseñada para atraer personas a tu negocio y convertirlos en clientes potenciales.</p>
                        <p><FontAwesomeIcon icon={faCheckCircle}  style={{color:'#ff187c'}} /> Orientada a conversiones</p>
                        <Link class="btn noicon" to="/portfolio">
                            <FontAwesomeIcon icon={faArrowAltCircleRight} style={{marginTop:'10px'}}/>
                            <span>Ver planes</span>
                        </Link>
                    </div>
                    <div class="image">
                        <img src={'../imgs/landing.svg'} />
                    </div>
                </div>
            </div>
            <div class="landing-item">
                <div class="landing-content left">
                <div class="image">
                        <img src={'../imgs/landing.svg'} />
                    </div>
                    <div class="half">
                        <h5>Landing page</h5>
                        <p>Página diseñada para atraer personas a tu negocio y convertirlos en clientes potenciales.</p>
                        <p><FontAwesomeIcon icon={faCheckCircle}  style={{color:'#ff187c'}} /> Orientada a conversiones</p>
                        <Link class="btn noicon" to="/portfolio">
                            <FontAwesomeIcon icon={faArrowAltCircleRight} style={{marginTop:'10px'}}/>
                            <span>Ver planes</span>
                        </Link>
                    </div>
                    
                </div>
            </div>
        </div>
        <h3 style={{textAlign:'center',fontSize: '32px', fontWeight:'800',marginBottom:'30px'}}>Solicita tu presupuesto personalizado</h3>
        <form name="servicios" method="POST" data-netlify="true" id="jobsSidebarFilter" style={{width:'90%',margin:'0 auto'}} >                
                
                <div class="filter-group">
                    <div class="filter-label">Nombre</div>
                    <input type="text" name="nombre" placeholder="Escribe tu nombre" class="ng-valid ng-dirty ng-valid-parse ng-empty ng-touched" />
                </div>
                <div style={{display:'flex',justifyContent:'space-between'}}>
                <div class="filter-group" style={{width:'45%'}}>
                    <div class="filter-label">Email</div>
                    <input type="email" name="email" placeholder="persona@increible.com" class="ng-valid ng-dirty ng-valid-parse ng-empty ng-touched" />
                </div>

                <div class="filter-group" style={{width:'45%'}}>
                    <div class="filter-label">Teléfono</div>
                    <input type="tel" name="tel" placeholder="+34 600 00 00 00" pattern="+[0-9]{2} [0-9]{3} [0-9]{2} [0-9]{2} [0-9]{2}" class="ng-valid ng-dirty ng-valid-parse ng-empty ng-touched" />
                </div>
                </div>
                

                <div class="filter-group">
                    <div class="filter-label">Servicio</div>
                    <select name="servicio" ng-model="jobFilter.field" class="exterior-label-select ng-pristine ng-untouched ng-valid ng-empty" id="jobFilterType">
                        <option value="" selected="">Elegir</option>
                        <optgroup label="Diseño web" class="ng-scope">
                           <option value="Diseño web : Landing page" class="ng-binding ng-scope">Landing page</option>
                           <option  value="Diseño web : Web corporativa" class="ng-binding ng-scope">Web corporativa</option>
                           <option value="Diseño web : Tienda online" class="ng-binding ng-scope">Tienda online</option>
                           <option value="Diseño web : Blog" class="ng-binding ng-scope">Blog</option>
                           <option value="Diseño web : Otros" class="ng-binding ng-scope">Otros</option>
                        </optgroup>
                        <optgroup label="Posicionamiento web" class="ng-scope">
                            <option value="Posicionamiento : SEO Local" class="ng-binding ng-scope">SEO Local</option>
                            <option value="Posicionamiento : SEO Empresa" class="ng-binding ng-scope">SEO Empresa</option>
                            <option value="Posicionamiento : SEO Ecommerce" class="ng-binding ng-scope">SEO Ecommerce</option>
                            <option value="Posicionamiento : Otros" class="ng-binding ng-scope">Otros</option>
                        </optgroup>
                        <optgroup label="Redes sociales" class="ng-scope">
                            <option value="Redes sociales : Presencia" class="ng-binding ng-scope">Presencia</option>
                            <option value="Redes sociales : Influencia" class="ng-binding ng-scope">Influencia</option>
                            <option value="Redes sociales : Marca" class="ng-binding ng-scope">Marca</option>
                            <option value="Redes sociales : Otros" class="ng-binding ng-scope">Otros</option>
                        </optgroup>
                        <optgroup label="Diseño gráfico" class="ng-scope">
                            <option value="Diseño gráfico : Chemical" class="ng-binding ng-scope">Flyers / Folletos</option>
                            <option value="Diseño gráfico : Civil" class="ng-binding ng-scope">Carteles</option>
                            <option value="Diseño gráfico : Electrical" class="ng-binding ng-scope">Logos</option>
                            <option value="Diseño gráfico : Mechanical" class="ng-binding ng-scope">Tarjetas de visita</option>
                            <option value="Diseño gráfico : Other" class="ng-binding ng-scope">Otros</option>
                        </optgroup>
                        <optgroup label="Mantenimiento web" class="ng-scope">
                            <option value="Mantenimiento web : Básico" class="ng-binding ng-scope">Básico</option>
                            <option value="Mantenimiento web : Empresa" class="ng-binding ng-scope">Empresa</option>
                            <option value="Mantenimiento web : Tienda online" class="ng-binding ng-scope">Tienda online</option>
                        </optgroup>

                    </select>
                </div>
               
                
                
                <div class="filter-group">
                    <div class="toggle-group">
                        <input name="privacy" type="checkbox" id="privacy" class="ng-pristine ng-untouched ng-valid ng-not-empty" required />
                        <label for="privacy">
                            <span>Acepto la politica de privacidad</span>
                            <div class="switch"></div>
                        </label>
                    </div>
                    <div class="toggle-group">
                        <input type="checkbox" name="promo" id="promo" class="ng-pristine ng-untouched ng-valid ng-not-empty" required />
                        <label for="promo">
                            <span>Acepto recibir correos promocionales</span>
                            <div class="switch"></div>
                        </label>
                    </div>
                </div>
                

                <div class="job-filter-action">
                    <button class="btn black noicon" type="submit">
                        <i><FontAwesomeIcon icon={faPaperPlane} /></i>
                        <span>Enviar</span>
                    </button>
                </div>


            </form>
        <Footer/>
    </div>
)