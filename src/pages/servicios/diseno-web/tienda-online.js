import React from "react"
import Helmet from "react-helmet"
import Header from "../../../components/header"
import Footer from "../../../components/footer"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRocket,faUsers, faDraftingCompass, faBullhorn, faCrop, faMagic, faCheck, faCheckCircle, faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { faArrowAltCircleRight,  } from "@fortawesome/free-regular-svg-icons"
import {Link, graphql } from "gatsby"

require ("../../main.css")

export default () => (
    <div>
        <Header/>
        <div>
            tienda online
        </div>
        <Footer/>
    </div>
)