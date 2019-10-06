import React from "react"
import Helmet from "react-helmet"
import Header from "../../components/header"
import Footer from "../../components/footer"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRocket,faUsers, faDraftingCompass, faBullhorn, faCrop, faMagic, faCheck, faCheckCircle, faPaperPlane, faUser, faHashtag, faChartPie, faPencilRuler } from '@fortawesome/free-solid-svg-icons'
import { faArrowAltCircleRight,  } from "@fortawesome/free-regular-svg-icons"
import {Link, graphql } from "gatsby"

require ("../main.css")

export default () => (
    <div style={{background:'white'}}>
        <Helmet>
            <title>Redes sociales | Gestionamos tu Facebook, Instagram, Twitter - Boneluv</title>
        </Helmet>
        <Header/>
        <div>
            <div class="landing-silhouette">
                <h1 class="big">Redes sociales</h1>
                <h2 class="small">Social media</h2>
            </div>
            <h3 style={{textAlign:'center',fontSize: '32px', fontWeight:'800',marginBottom:'30px'}}>Descubre nuestro proceso</h3>
            <div class="designer-features">
                
                <div class="feature">
                    <h5>
                        Creación de cuenta
                        <i><FontAwesomeIcon icon={faUser} /></i>
                    </h5>
                    <p>
                        Creación y diseño de cuenta adaptada a los principios, ideales y estilo de tu marca, para generar más impacto y 
                        dar una imagen profesional.
                    </p>
                </div>
                <div class="feature">
                    <h5>
                        Publicaciones diarias
                        <i><FontAwesomeIcon icon={faHashtag} /></i>
                    </h5>
                    <p>
                        Realizamos publicaciones diarias para ser activos con tu publico y hacemos uso de diferentes metodos para obtener mas
                        alcance con tus publicaciones y llegar a mas personas.
                    </p>
                </div>
                <div class="feature">
                    <h5>
                        Generacion de contenido
                        <i><FontAwesomeIcon icon={faPencilRuler} /></i>
                    </h5>
                    <p>Creamos y diseñamos tanto tus publicaciones como imagenes o recursos que utilicemos en ellas para que tu puedas centrarte en tu negocio
                        y nosotros nos ocupamos de de tus redes.
                    </p>
                </div>
                <div class="feature">
                    <h5>
                        Informe de resultados
                        <i><FontAwesomeIcon icon={faChartPie} /></i>
                    </h5>
                    <p>
                        Realizamos un reporte mensual con los resultados obtnidos de alcance y de seguidores nuevos, con datos importantes para el uso en campañas
                        de publicidad y orientacion de contenido.
                    </p>
                </div>
                
            </div>
            <h3 style={{textAlign:'center',fontSize: '32px', fontWeight:'800',marginBottom:'60px'}}>Nuestros servicios de diseño web</h3>
            <div class="landing-item" style={{marginBottom:'20px;'}}>
                <div class="landing-content left">
                <div class="image" style={{marginBottom:'40px',marginTop:'40px'}}>
                        <img src={'../imgs/socialpresencia.svg'} />
                    </div>
                    <div class="half">
                        <h5>Presencia</h5>
                        <p>Ideal para particulares o pequeñas empresas que quieran obtener presencia en las redes sociales.</p>
                        <p><FontAwesomeIcon icon={faCheckCircle}  style={{color:'#ff187c'}} /> Gestión de 1 red social</p>
                        <p><FontAwesomeIcon icon={faCheckCircle}  style={{color:'#ff187c'}} /> +10 publicaciones mensuales</p>
                        <p><FontAwesomeIcon icon={faCheckCircle}  style={{color:'#ff187c'}} /> Reportes mensuales</p>
                        <Link class="btn noicon" to="/portfolio">
                            <FontAwesomeIcon icon={faArrowAltCircleRight} style={{marginTop:'10px'}}/>
                            <span>Ver planes</span>
                        </Link>
                    </div>
                    
                </div>
            </div>
            <div class="landing-item"  style={{marginBottom:'80px;'}}>
                <div class="landing-content right">
                    <div class="half">
                        <h5>Influencia</h5>
                        <p>Diseñado para personas o empresas establecidas que requieran publicar mas habitualmente para un crecimiento exponencial.</p>
                        <p><FontAwesomeIcon icon={faCheckCircle}  style={{color:'#ff187c'}} /> Gestión de 2 redes sociales</p>
                        <p><FontAwesomeIcon icon={faCheckCircle}  style={{color:'#ff187c'}} /> +20 publicaciones mensuales</p>
                        <p><FontAwesomeIcon icon={faCheckCircle}  style={{color:'#ff187c'}} /> Reportes mensuales</p>
                        <Link class="btn noicon" to="/portfolio">
                            <FontAwesomeIcon icon={faArrowAltCircleRight} style={{marginTop:'10px'}}/>
                            <span>Ver planes</span>
                        </Link>
                    </div>
                    <div class="image" style={{marginBottom:'40px',marginTop:'40px'}}>
                        <img src={'../imgs/socialinfluencia.svg'} />
                    </div>
                </div>
            </div>
            <div class="landing-item"  style={{marginBottom:'20px;'}}>
                <div class="landing-content left">
                <div class="image" style={{marginBottom:'40px',marginTop:'40px'}}>
                        <img src={'../imgs/socialmarca.svg'} />
                    </div>
                    <div class="half">
                        <h5>Marca</h5>
                        <p>Plan pensado para empresas o marcas que busquen llevar su imagen de marca a otro nivel para un publico mas exigente.</p>
                        <p><FontAwesomeIcon icon={faCheckCircle}  style={{color:'#ff187c'}} /> Gestión de hasta 4 redes sociales</p>
                        <p><FontAwesomeIcon icon={faCheckCircle}  style={{color:'#ff187c'}} /> +30 publicaciones mensuales</p>
                        <p><FontAwesomeIcon icon={faCheckCircle}  style={{color:'#ff187c'}} /> Reportes mensuales</p>
                        <Link class="btn noicon" to="/portfolio">
                            <FontAwesomeIcon icon={faArrowAltCircleRight} style={{marginTop:'10px'}}/>
                            <span>Ver planes</span>
                        </Link>
                    </div>
                    
                </div>
            </div>
        </div>
        <h3 style={{textAlign:'center',fontSize: '32px', fontWeight:'800',marginBottom:'30px'}}>Solicita tu presupuesto personalizado</h3>
        <form name="servicios" method="POST" data-netlify="true" id="jobsSidebarFilter" style={{maxWidth:'600px',width:'90%',margin:'0 auto'}} action="/submited" >                
        <input type="hidden" name="form-name" value="servicios" />
                <div class="filter-group">
                    <div class="filter-label">Nombre</div>
                    <input type="text" name="nombre" placeholder="Escribe tu nombre" class="ng-valid ng-dirty ng-valid-parse ng-empty ng-touched" />
                </div>
                <div style={{display:'flex',justifyContent:'space-between'}}>
                <div class="filter-group" style={{width:'47%'}}>
                    <div class="filter-label">Email</div>
                    <input type="email" name="email" placeholder="persona@increible.com" style={{width:'100%'}} class="ng-valid ng-dirty ng-valid-parse ng-empty ng-touched" />
                </div>

                <div class="filter-group" style={{width:'47%'}}>
                    <div class="filter-label">Teléfono</div>
                    <input type="tel" name="tel" placeholder="+34 600 00 00 00" pattern="+[0-9]{2} [0-9]{3} [0-9]{2} [0-9]{2} [0-9]{2}" class="ng-valid ng-dirty ng-valid-parse ng-empty ng-touched" />
                </div>
                </div>
                

                <div class="filter-group">
                    <div class="filter-label">Servicio</div>
                    <select name="servicio" class="exterior-label-select ng-pristine ng-untouched ng-valid ng-empty" id="jobFilterType">
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
                <div class="filter-group" style={{width:'100%'}}>
                    <div class="filter-label">Comentarios</div>
                    <textarea type="asunto" name="asunto" style={{resize:'none',width:'100%'}} placeholder="Proyecto personalizado" class="ng-valid ng-dirty ng-valid-parse ng-empty ng-touched" />
                </div>
                
                
                <div class="filter-group">
                    <div class="toggle-group">
                        <input name="privacy" type="checkbox" id="privacy" class="ng-pristine ng-untouched ng-valid ng-not-empty" required />
                        <label for="privacy">
                            <span>Acepto la politica de privacidad</span>
                            <div class="switch"></div>
                        </label>
                    </div>
                    <div class="toggle-group" style={{marginTop:'10px'}}>
                        <input type="checkbox" name="promo" id="promo" class="ng-pristine ng-untouched ng-valid ng-not-empty"/>
                        <label for="promo">
                            <span>Acepto recibir correos promocionales</span>
                            <div class="switch"></div>
                        </label>
                    </div>
                </div>
                
                <div data-netlify-recaptcha="true"></div>
                <div class="job-filter-action" style={{justifyContent:'center'}}>
                    <button class="btn black noicon" type="submit" style={{width:'100%',maxWidth:'600px',margin:'0 auto', textAlign: 'center'}}>
                        <i><FontAwesomeIcon icon={faPaperPlane} /></i>
                        <span>Enviar</span>
                    </button>
                </div>


            </form>
        <Footer/>
    </div>
)