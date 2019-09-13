import React from "react"
import {Link} from "gatsby"
import Header from "../components/header"
import Footer from "../components/footer"

require ("./main.css")
export default () => (
    <div style={{background:'#FFF'}}>
        <Header/>
        <div class="landing-silhouette">
            <h1 class="big">Soporte</h1>
            <h2 class="small">Preguntas frecuentes</h2>
        </div>
        <div class="page-body">
            <div class="page-main">
                <div class="page-content">
                    <section class="help-question ng-scope">
                        <h3 class="header-faq ng-binding">What do I have to do to make sure my resume prints/saves correctly?</h3>
                        <p class="help-answer ng-binding">The instructions are a little different for every device and browser. You must use the 'Print to PDF' option in your browser. If you're using Google Chrome, when the print window pops up, click the button labeled 'Change' under 'Destination' on the left hand side. Select Save as PDF.<br/><br/>In order for your resume to look correct after saving or printing, you must also change some settings in the print window before finishing. Find and <b><u>disable</u></b> Headers &amp; Footers, and also <b><u>enable</u></b> background graphics.<br/><br/>If you are unable to figure out these settings, the easiest thing to do would be to Google 'How to print to PDF on _____ browser'. Fill in the browser you're using. Otherwise you can message me in the chatbox on this site and I can see if I can help!</p>
                    </section>
                </div>
            </div>
        </div>        
        <Footer/>
    </div>
)