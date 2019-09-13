import React from "react"
import Helmet from "react-helmet"
import Header from "../components/header"
import Footer from "../components/footer"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRocket,faUsers } from '@fortawesome/free-solid-svg-icons'
import { faArrowAltCircleRight,faFileAlt } from "@fortawesome/free-regular-svg-icons"

export default () => (
    <div style={{background:'#FFF'}}>
    <Header />
    <div id="publicProfile">
        <div class="pp-header">
        
            <div class="pp-header-content">
               <div class="image ng-scope">
                    <div class="photo-display" style={{backgroundImage: 'url('+'imgs/jmr.jpg'+')', borderRadius: '50%'}}></div>
                </div>
                <div class="text">
                    <div class="text-content">
                        <div class="name ng-binding ng-scope">José Manuel Ramírez</div>
                        <div class="headline ng-binding ng-scope">Desarrollador web</div>
                        <div class="location basefont ng-binding ng-scope">Fuentes de Andalucía, SE</div>
                        <div class="contact-info">
                        <div class="contact basefont ng-binding ng-scope">info@boneluv.es</div>
                        <div class="contact basefont ng-binding ng-scope">+34644770223</div>
                        <a class="contact basefont ng-binding ng-scope" href="https://boneluv.com" target="_blank" >boneluv.com</a>
                            
                        </div>
    
                    </div>

                </div>
            </div>
        
        </div>
    
    

        <div class="r-section-wrapper-split">
            <div class="r-section-wrapper left" id="publicProfileBody">
    

               <div class="r-section ng-scope">
        
                    <div class="header" style={{margin: '3.5999999999999996px 0px'}}>
                        <span class="section-header profile ng-binding">Sobre mí</span>
                    </div>
        
                    <div class="r-entry" style={{paddingBottom: '3.5999999999999996px'}} data-index="0">
                        <span class="r-entry-include">
                            <p class="entry-body basefont profile-body ng-binding ng-scope">Desarrollador web con experiencia en maquetación HTML5 y diseño CSS3 así como algunos conocimientos de JavaScript, controlo con fluidez los CMS de WordPress y Joomla, desarrollando en Angular.js y React.js, como también tecnologias de Back-End como MongoDB y NodeJS. Mi objetivo principal es llegar a ser un desarrollador Full Stack competente.</p>
                        </span>
        
                    </div>
        
                </div>
        
                
               <div class="r-section ng-scope" id="experience">
        
                    <div class="header" style={{margin: '3.5999999999999996px 0px'}}>
                        <span class="section-header experience">Experiencia</span>
                    </div>
                    <div class="r-entry ng-scope" style={{paddingBottom: '3.5999999999999996px'}} data-index="0">
                           
                            <span class="r-entry-include">
                                <div class="titles ng-scope">
                                    <div class="line1 ng-binding ng-scope">Freelance</div>
                                    <div class="line2 ng-binding ng-scope">Desarrollador web</div>
                                </div>
                                    <div class="subtitles ng-scope">
                                    <div class="line3 ng-binding ng-scope">Octubre 2017 - Presente</div>
                                    <div class="line4 ng-binding ng-scope">Sevilla, ES</div>
                                </div>
                            </span>
            
                        </div>
                   <div class="r-entry ng-scope" style={{paddingBottom: '3.5999999999999996px'}} data-index="0">
                        <span class="r-entry-include">
                            <div class="titles ng-scope">
                                    <div class="line1 ng-binding ng-scope">TECHE Clothing</div>
                                <div class="line2 ng-binding ng-scope">Desarrollador web</div>
                            </div>
                                <div class="subtitles ng-scope">
                                <div class="line3 ng-binding ng-scope">Junio, 2017 - Presente</div>
                                <div class="line4 ng-binding ng-scope">Sevilla, ES</div>
                            </div>
                            
                        </span>
        
                    </div>
                    <div class="r-entry ng-scope" style={{paddingBottom: '3.5999999999999996px'}} data-index="0">
                        
                            <span class="r-entry-include">
                                <div class="titles ng-scope">
                                    <div class="line1 ng-binding ng-scope">Camera di Commercio</div>
                                    <div class="line2 ng-binding ng-scope">Desarrollador web</div>
                                </div>
                                    <div class="subtitles ng-scope">
                                    <div class="line3 ng-binding ng-scope">Enero 2017 - Mayo, 2017</div>
                                    <div class="line4 ng-binding ng-scope">Arezzo, IT</div>
                                </div>
                            </span>
            
                        </div>
                        <div class="r-entry ng-scope" style={{paddingBottom: '3.5999999999999996px'}} data-index="0">
                                <span class="r-entry-include">
                                    <div class="titles ng-scope">
                                        <div class="line1 ng-binding ng-scope">MyShoeRoom</div>
                                        <div class="line2 ng-binding ng-scope">Desarrollador web</div>
                                    </div>
                                        <div class="subtitles ng-scope">
                                        <div class="line3 ng-binding ng-scope">Julio 2016 - Diciembre, 2016</div>
                                        <div class="line4 ng-binding ng-scope">Sevilla, ES</div>
                                    </div>
                                </span>
                
                            </div>
        
                </div><div class="r-section ng-scope" ng-repeat="key in resume.options.sectionOrderLeft" id="projects">
        
                    <div class="header" style={{margin: '3.5999999999999996px 0px'}}>
                        <span class="section-header projects" ng-bind-html="resume.sectionNames[key]">Otros proyectos</span>
                    </div>
        
                    <div class="r-entry ng-scope" ng-repeat="entry in resume.entries[key] | orderBy: 'order' track by $index" style={{paddingBottom: '3.5999999999999996px'}} data-index="0" ng-if="key != 'skills'"> 
                        <span class="r-entry-include">
                            <div class="titles ng-scope" ng-if="entry.line1 || entry.line2">
                                <div class="line1 ng-binding ng-scope" ng-if="entry.line1" ng-bind-html="resume.entries[key][getEntryIndex(key, entry)].line1">BL Gang</div>
                                <div class="line2 ng-binding ng-scope" ng-if="entry.line2" ng-bind-html="resume.entries[key][getEntryIndex(key, entry)].line2">Ecommerce</div>
                            </div>
                            <div class="subtitles ng-scope" ng-if="entry.line3 || entry.line4">
                                <div class="line3 ng-binding ng-scope" ng-if="entry.line3" ng-bind-html="resume.entries[key][getEntryIndex(key, entry)].line3">Abril, 2019</div>
                                <div class="line4 ng-binding ng-scope" ng-if="entry.line4" ng-bind-html="resume.entries[key][getEntryIndex(key, entry)].line4">https://blgangshop.com</div>
                            </div>
    
                        </span>
        
                    </div>
                   
        
                   
        
                </div><div class="r-section ng-scope" ng-repeat="key in resume.options.sectionOrderLeft" id="skills" ng-if="resume.entries[key][0] &amp;&amp; key != 'profile'">
        
                    <div class="header" style={{margin: '3.5999999999999996px 0px'}}>
                        <span class="section-header skills" ng-bind-html="resume.sectionNames[key]">Habilidades</span>
                    </div>
        
                    <div class="r-entry skill-entry skill-theme-bar" ng-if="key == 'skills'" ng-repeat="entry in resume.entries['skills'] track by $index" data-index="0" style={{paddingBottom: '3.5999999999999996px'}}>
                    
                        <div class="skill-label ng-binding ng-scope" ng-if="entry.line1" ng-bind-html="entry.line1">HTML</div>
                      
                       <span class="skill-bar ng-scope" ng-if="entry.line2 &amp;&amp; resume.options.skillTheme == 'bar'">
                            <span class="skill-bar-progress" style={{width: '100%', backgroundColor: '#FF187C'}}></span>
                        </span>

                    </div><div class="r-entry skill-entry skill-theme-bar" ng-if="key == 'skills'" ng-repeat="entry in resume.entries['skills'] track by $index" data-index="1" style={{paddingBottom: '3.5999999999999996px'}}>
                    
                        <div class="skill-label ng-binding ng-scope" ng-if="entry.line1" ng-bind-html="entry.line1">CSS/LESS/SASS</div>
                        <span class="skill-bar ng-scope" ng-if="entry.line2 &amp;&amp; resume.options.skillTheme == 'bar'">
                            <span class="skill-bar-progress" style={{width: '100%', backgroundColor: '#FF187C'}}></span>
                        </span>
                    </div><div class="r-entry skill-entry skill-theme-bar" ng-if="key == 'skills'" ng-repeat="entry in resume.entries['skills'] track by $index" data-index="2" style={{paddingBottom: '3.5999999999999996px'}}>
                    
                        <div class="skill-label ng-binding ng-scope" ng-if="entry.line1" ng-bind-html="entry.line1">Javascript</div>
                        <span class="skill-bar ng-scope" ng-if="entry.line2 &amp;&amp; resume.options.skillTheme == 'bar'">
                            <span class="skill-bar-progress" style={{width: '90%', backgroundColor: '#FF187C'}}></span>
                        </span>
                    </div><div class="r-entry skill-entry skill-theme-bar" ng-if="key == 'skills'" ng-repeat="entry in resume.entries['skills'] track by $index" data-index="3" style={{paddingBottom: '3.5999999999999996px'}}>
                    
                        <div class="skill-label ng-binding ng-scope" ng-if="entry.line1" ng-bind-html="entry.line1">Angular</div>
                        <span class="skill-bar ng-scope" ng-if="entry.line2 &amp;&amp; resume.options.skillTheme == 'bar'">
                            <span class="skill-bar-progress" style={{width: '90%', backgroundColor: '#FF187C'}}></span>
                        </span>
                    </div><div class="r-entry skill-entry skill-theme-bar" ng-if="key == 'skills'" ng-repeat="entry in resume.entries['skills'] track by $index" data-index="4" style={{paddingBottom: '3.5999999999999996px'}}>
                    
                        <div class="skill-label ng-binding ng-scope" ng-if="entry.line1" ng-bind-html="entry.line1">React</div>
                        <span class="skill-bar ng-scope" ng-if="entry.line2 &amp;&amp; resume.options.skillTheme == 'bar'">
                            <span class="skill-bar-progress" style={{width: '80%', backgroundColor: '#FF187C'}}></span>
                        </span>
                    </div><div class="r-entry skill-entry skill-theme-bar" ng-if="key == 'skills'" ng-repeat="entry in resume.entries['skills'] track by $index" data-index="5" style={{paddingBottom: '3.5999999999999996px'}}>
                    
                        <div class="skill-label ng-binding ng-scope" ng-if="entry.line1" ng-bind-html="entry.line1">Ionic</div>
                        <span class="skill-bar ng-scope" ng-if="entry.line2 &amp;&amp; resume.options.skillTheme == 'bar'">
                            <span class="skill-bar-progress" style={{width: '70%', backgroundColor: '#FF187C'}}></span>
                        </span>
                    </div>
    
                   
        
                </div><div class="r-section ng-scope" ng-repeat="key in resume.options.sectionOrderLeft" id="languages" ng-if="resume.entries[key][0] &amp;&amp; key != 'profile'">
        
                    <div class="header" style={{margin: '3.5999999999999996px 0px'}}>
                        <span class="section-header languages" ng-bind-html="resume.sectionNames[key]">Idiomas</span>
                    </div>
        
                    <div class="r-entry ng-scope" ng-repeat="entry in resume.entries[key] | orderBy: 'order' track by $index" style={{paddingBottom: '3.5999999999999996px'}} data-index="0" ng-if="key != 'skills'">
                        
                        <span class="r-entry-include">
                            <div class="titles ng-scope" ng-if="entry.line1 || entry.line2">
                                <div class="line1 ng-binding ng-scope" ng-if="entry.line1" ng-bind-html="resume.entries[key][getEntryIndex(key, entry)].line1">Español</div>
                                <div class="line2 ng-binding ng-scope" ng-if="entry.line2" ng-bind-html="resume.entries[key][getEntryIndex(key, entry)].line2">Nativo</div>
                            </div>
                            
                        </span>
        
                    </div><div class="r-entry ng-scope" ng-repeat="entry in resume.entries[key] | orderBy: 'order' track by $index" style={{paddingBottom: '3.5999999999999996px'}} data-index="1" ng-if="key != 'skills'">
                        
                        <span class="r-entry-include">
                            <div class="titles ng-scope" ng-if="entry.line1 || entry.line2">
                                <div class="line1 ng-binding ng-scope" ng-if="entry.line1" ng-bind-html="resume.entries[key][getEntryIndex(key, entry)].line1">Inglés</div>
                                <div class="line2 ng-binding ng-scope" ng-if="entry.line2" ng-bind-html="resume.entries[key][getEntryIndex(key, entry)].line2">Medio</div>
                            </div>
                        </span>
        
                    </div>
                    <div class="r-entry ng-scope" ng-repeat="entry in resume.entries[key] | orderBy: 'order' track by $index" style={{paddingBottom: '3.5999999999999996px'}} data-index="1" ng-if="key != 'skills'">
                           
                            <span class="r-entry-include">
                                <div class="titles ng-scope" ng-if="entry.line1 || entry.line2">
                                    <div class="line1 ng-binding ng-scope" ng-if="entry.line1" ng-bind-html="resume.entries[key][getEntryIndex(key, entry)].line1">Italiano</div>
                                    <div class="line2 ng-binding ng-scope" ng-if="entry.line2" ng-bind-html="resume.entries[key][getEntryIndex(key, entry)].line2">Medio</div>
                                </div>
                            </span>
            
                        </div>
        
                </div>
        
        
            </div>
    
        </div>
        <div id="publicProfileFooterPromo" style={{backgroundColor: '#FF187C', backgroundImage:'tubes.png', backgroundSize:'auto 100%',
 backgroundPosition:'100%',backgroundRepeat:'no-repeat',textAlign: 'center'}} class="ng-hide">
            <h1>Comentame tu proyecto y solicita tu presupuesto</h1>
            <h2>Rápido y sin compromiso.</h2>
            <div class="buttons" onclick="window.location='contact'">
                <button class="btn black big noicon reverse" >
                    
                    <span>¿Hablamos?</span>
                </button>
            </div>
        </div>
        </div>
        <Footer/>
        </div>
)