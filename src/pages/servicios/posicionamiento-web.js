import React from "react"
import Helmet from "react-helmet"
import Header from "../../components/header"
import Footer from "../../components/footer"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRocket,faUsers, faDraftingCompass, faBullhorn, faCrop, faMagic, faCheck, faCheckCircle, faPaperPlane, faCode, faChartBar, faSearch,faEye } from '@fortawesome/free-solid-svg-icons'
import { faArrowAltCircleRight } from "@fortawesome/free-regular-svg-icons"
import { faGoogle} from "@fortawesome/free-brands-svg-icons"
import {Link, graphql } from "gatsby"

require ("../main.css")

export default () => (
    <div style={{background:'white'}}>
        <Helmet>
            <title>Posicionamiento web | SEO On Page, Off Page, SEM - Boneluv</title>
        </Helmet>
        <Header/>
        <div>
            <div class="landing-silhouette">
                <h1 class="big">SEO</h1>
                <h2 class="small">Posicionamiento web</h2>
            </div>
            <h3 style={{textAlign:'center',fontSize: '32px', fontWeight:'800',marginBottom:'30px'}}>Descubre nuestro proceso</h3>
            <div class="designer-features">
                
                <div class="feature">
                    <h5>
                        Analisis completo
                        <i><FontAwesomeIcon icon={faSearch} /></i>
                    </h5>
                    <p>
                        Analisis web completo de tu web y de tus competidores, analizando palabras clave, contenidos y posicionamiento para obtener
                        los mejores resultados.
                    </p>
                </div>
                <div class="feature">
                    <h5>
                        Optimización de código
                        <i><FontAwesomeIcon icon={faCode} /></i>
                    </h5>
                    <p>
                        Optimización de cada una de las páginas de tu web para aumentar el posicionamiento y las palabras clava utilizadas mediante snippets
                        y etiquetas de marcado.
                    </p>
                </div>
                <div class="feature">
                    <h5>
                        Motores de búsqueda
                        <i><FontAwesomeIcon icon={faGoogle} /></i>
                    </h5>
                    <p>
                        Registro de tu web en los principales motores de busqueda como Google, Bing, Yahoo, etc. Integración con Google Analytics para el 
                        seguimiento de visitas e informes de uso de tu web.
                    </p>
                </div>
                <div class="feature">
                    <h5>
                        Monitorización continua
                        <i><FontAwesomeIcon icon={faEye} /></i>
                    </h5>
                    <p>
                        Seguimiento del posicionamiento de tu web una vez finalizado el trabajo para recomendarte las optimizaciónes adecuadas para
                        no perder posicionamiento.
                    </p>
                </div>
                
            </div>
            <h3 style={{textAlign:'center',fontSize: '32px', fontWeight:'800',marginBottom:'60px'}}>Nuestros servicios de diseño web</h3>
            <div class="landing-item" style={{marginBottom:'20px;'}}>
                <div class="landing-content left">
                <div class="image" style={{marginBottom:'40px',marginTop:'40px'}}>
                        <img src={'../imgs/seolocal.svg'} />
                    </div>
                    <div class="half">
                        <h5>SEO Local</h5>
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
            <div class="landing-item"  style={{marginBottom:'80px;'}}>
                <div class="landing-content right">
                    <div class="half">
                        <h5>SEO Empresa</h5>
                        <p>Página web corporativa para ofertar y mostrar sus servicios profesionales y conseguir presencia en internet.</p>
                        <p><FontAwesomeIcon icon={faCheckCircle}  style={{color:'#ff187c'}} /> Ofrecer información sobre empresa, productos o servicios</p>
                        <p><FontAwesomeIcon icon={faCheckCircle}  style={{color:'#ff187c'}} /> Aumentar presencia local y en el extranjero</p>
                        <p><FontAwesomeIcon icon={faCheckCircle}  style={{color:'#ff187c'}} /> Integración de formularios y redes sociales</p>
                        <Link class="btn noicon" to="/portfolio">
                            <FontAwesomeIcon icon={faArrowAltCircleRight} style={{marginTop:'10px'}}/>
                            <span>Ver planes</span>
                        </Link>
                    </div>
                    <div class="image" style={{marginBottom:'40px',marginTop:'40px'}}>
                        <img src={'../imgs/seoempresa.svg'} />
                    </div>
                </div>
            </div>
            <div class="landing-item"  style={{marginBottom:'20px;'}}>
                <div class="landing-content left">
                <div class="image" style={{marginBottom:'40px',marginTop:'40px'}}>
                        <img src={'../imgs/seoecommerce.svg'} />
                    </div>
                    <div class="half">
                        <h5>SEO Ecommerce</h5>
                        <p>Obtén tu propia tienda online para incrementar vender sus productos y aumentar sus ingresos.</p>
                        <p><FontAwesomeIcon icon={faCheckCircle}  style={{color:'#ff187c'}} /> Catálogo de productos</p>
                        <p><FontAwesomeIcon icon={faCheckCircle}  style={{color:'#ff187c'}} /> Integración de formulario/compra</p>
                        <p><FontAwesomeIcon icon={faCheckCircle}  style={{color:'#ff187c'}} /> Autogestionable</p>
                        <Link class="btn noicon" to="/portfolio">
                            <FontAwesomeIcon icon={faArrowAltCircleRight} style={{marginTop:'10px'}}/>
                            <span>Ver planes</span>
                        </Link>
                    </div>
                    
                </div>
            </div>
        </div>
        <h3 style={{textAlign:'center',fontSize: '32px', fontWeight:'800',marginBottom:'30px'}}>Solicita tu presupuesto personalizado</h3>
        <form name="servicios" method="POST" data-netlify="true" action="/submited" id="jobsSidebarFilter" style={{maxWidth:'600px',width:'90%',margin:'0 auto'}} >                
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