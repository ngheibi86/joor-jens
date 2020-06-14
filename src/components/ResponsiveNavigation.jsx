import React, { useState } from 'react';
import { Link } from "@reach/router";
import '../assets/scss/toolbar.scss';


function ResponsiveNavigation({ background, hoverBackground, linkColor, navLinks, logo }) {
    const [ navOpen, setNavOpen ] = useState(0)
    const [ hoverIndex, setHoverIndex ] = useState(-1)
    return (
        <nav
            className="responsive-toolbar"
            style={{ background: background }}>
            <ul
                style={{ background: background }}
                className={ navOpen ? 'active' : '' }  >
                           
             
                { navLinks.map((link, index) => 
                    <li
                        key={ index }
                        onMouseEnter={ () => { setHoverIndex(index) } }
                        onMouseLeave={ () => { setHoverIndex(-1) } }
                        style={{ background: hoverIndex === index ? (hoverBackground || '#999') : '' }}
                    >
                        <Link
                            to={link.path}
                            style={{ color: linkColor }}>
                         <i className={link.icon} ></i>   { link.text } 
                        </Link>
                    </li>
                )}
                   <figure className="image-logo" onClick={ () => { setNavOpen(!navOpen) } }>
                    <img src={ logo } height="40px" width="40px" alt="toolbar-logo"  />
                  
                </figure>
            </ul>
        </nav>
    )
}

export default ResponsiveNavigation