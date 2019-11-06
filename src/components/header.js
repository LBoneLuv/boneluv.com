import React from "react"
import { Link } from "gatsby";
import logo from "../../static/imgs/bonel.png"
import IdentityModal, { useIdentityContext } from "react-netlify-identity-widget"
import "react-netlify-identity-widget/styles.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRocket,faUsers,faUser } from '@fortawesome/free-solid-svg-icons'
import { faArrowAltCircleRight,faFileAlt,  } from "@fortawesome/free-regular-svg-icons"
  

export default () => {
    const identity = useIdentityContext()
  const [dialog, setDialog] = React.useState(false)
  const name =
    (identity && identity.user && identity.user.user_metadata && identity.user.user_metadata.name) || "NoName"

  console.log(JSON.stringify(identity))
  const isLoggedIn = identity && identity.isLoggedIn
    
    return(
  <nav class="landing-nav">
            <Link to="/" activeClassName="landing-nav-logo" class="landing-nav-logo">
                <div><img src={logo} alt="Boneluv" /></div>
            </Link>
            <div class="landing-nav-links">
                <span class="links">
                    <div class="item">
                            <Link to="/boneluv-jose-manuel-ramirez-diseno-web">Sobre mí</Link>
                        </div>
                        <div class="item">
                                <Link to="/portfolio">Portfolio</Link>
                            </div>
                            <div class="item">
                                    <Link to="/planes-y-precios-diseno-web-marketing-digital">Servicios</Link>
                                </div>
                            <div class="item">
                                    <Link to="/blog">Blog</Link>
                                </div>
                </span>
                
                <span class="buttons">
                    <div class="item">
                    <button class="accent" onClick={() => setDialog(true)} style={{background:'#ff187c',color:'white',borderRadius:'4px'}}>
                    <i style={{fontSize:'14px'}}><FontAwesomeIcon icon={faUser} /></i>
                </button>
                    </div>
                
                    <div class="item" style={{marginRight:'10px'}}>
                        <Link class="accent alt" to="/contacto" activeClassName="accent alt">Contacto</Link>
                    </div>
                    <div class="item">
                        <Link class="accent" to="/planes-y-precios-diseno-web-marketing-digital" activeClassName="accent">Precios</Link>
                    </div>        
                </span>
                
                <IdentityModal showDialog={dialog} onCloseDialog={() => setDialog(false)} />
            </div>
    </nav>
)
}