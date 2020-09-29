import React, { Component } from "react"
import { Router, Link } from "react-router-dom";
//import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import '../Navbar/Navbar.css'

class Navbar extends Component {
    render(){
        return(
            <Router>
            <nav id="nav">
                <div className="nav-center">
                    <div className="nav-header">
                        {/* <Link exact activeClassName="active" to="#home">
                            Home
                        </Link> */}
                        <Link to="#home" className="scroll-link">
                            <img src="../images/logo-01.png" className="logo" alt="logo" />
                        </Link>
                        <button className="nav-toggle">
                            {/* <FontAwesomeIcon icon="bars"/> */}
                        </button>
                    </div>
                    <div className="links-container">
                        <ul className="links">
                        <li>
                            <Link activeClassName="active scroll-link" to="#home">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link activeClassName="active scroll-link" to="#about">
                                About
                            </Link>
                        </li>
                        <li>
                            <Link activeClassName="active scroll-link" to="#portfolio">
                                Portfolio
                            </Link>
                        </li>
                        <li>
                            <Link activeClassName="active scroll-link"s to="#contact">
                                Contact
                            </Link>
                        </li>
                        </ul>
                    </div>
                </div>
            </nav>
            </Router>
        )
    }
}
export default Navbar
      