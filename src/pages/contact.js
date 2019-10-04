import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRocket,faUsers, faDraftingCompass, faBullhorn, faCrop, faMagic, faCheck, faCheckCircle, faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { faArrowAltCircleRight,  } from "@fortawesome/free-regular-svg-icons"
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
                <h5 style={{textAlign:'center',marginBottom:'40px',fontSize:'22px', fontWeight:'800'}}>Solicita tu presupuesto personalizado</h5>
                    <div class="landing-content right">
                    
                      <div class="half">
                      
            <form name="servicios" method="POST" data-netlify="true" action="/submited" id="jobsSidebarFilter" style={{width:'100%',margin:'0 auto'}} >                
            <input type="hidden" name="form-name" value="servicios" />
                <div class="filter-group">
                    <div class="filter-label">Nombre</div>
                    <input type="text" name="nombre" placeholder="Escribe tu nombre" class="ng-valid ng-dirty ng-valid-parse ng-empty ng-touched" />
                </div>
                <div style={{display:'flex',justifyContent:'space-between'}}>
                <div class="filter-group" style={{width:'40%'}}>
                    <div class="filter-label">Email</div>
                    <input type="email" name="email" placeholder="persona@increible.com" class="ng-valid ng-dirty ng-valid-parse ng-empty ng-touched" />
                </div>

                <div class="filter-group" style={{width:'40%'}}>
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
                    <div class="toggle-group" style={{marginBottom:'10px'}}>
                        <input type="checkbox" name="privacy" id="privacy" class="ng-pristine ng-untouched ng-valid ng-not-empty" required />
                        <label for="privacy">
                            <span>Acepto la politica de privacidad</span>
                            <div class="switch"></div>
                        </label>
                    </div>
                    <div class="toggle-group">
                        <input type="checkbox" name="promo" id="promo" class="ng-pristine ng-untouched ng-valid ng-not-empty"/>
                        <label for="promo">
                            <span>Acepto recibir correos promocionales</span>
                            <div class="switch"></div>
                        </label>
                    </div>
                </div>
                <div data-netlify-recaptcha="true"></div>

                <div class="job-filter-action">
                    <button class="btn black noicon" type="submit" style={{width:'100%'}}>
                        <i><FontAwesomeIcon icon={faPaperPlane} /></i>
                        <span>Enviar</span>
                    </button>
                </div>


            </form>
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