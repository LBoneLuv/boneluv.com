import React from "react"
import Header from "../components/header.js"
import Footer from "../components/footer"
import Helmet from "react-helmet"
import {Link, graphql } from "gatsby"
import Layout from '../components/layout'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRocket,faUsers } from '@fortawesome/free-solid-svg-icons'
import { faArrowAltCircleRight,faFileAlt } from "@fortawesome/free-regular-svg-icons"

export default () => (
    <div>
        <Header/>
        <div>
            Enviado
        </div>
        <Footer/>
    </div>
)