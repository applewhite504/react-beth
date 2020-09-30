import React, { Component } from "react"
import { NavLink } from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import logo from '../images/logo-01.png'
import '../Navbar/Navbar.css'

class Navbar extends Component {
    
    render(){
        // ********** close links ************
        window.onload=function(){
            let navWindow = document.getElementById("root");
            navWindow.addEventListener("click", this.navToggle);
            navWindow.addEventListener("click", this.navbarFixed);
        }
        const navToggle = document.querySelector(".nav-toggle");
        const linksContainer = document.querySelector(".links-container");
        const links = document.querySelector(".links");
        this.navToogle = () => {
        // linksContainer.classList.toggle("show-links");
        const linksHeight = links.getBoundingClientRect().height;
        const containerHeight = linksContainer.getBoundingClientRect().height;
            if (containerHeight === 0) {
                linksContainer.style.height = `${linksHeight}px`;
            } else {
                linksContainer.style.height = 0;
            }
        };

        // ********** fixed navbar ************
        const navbarFixed = document.getElementById("nav");
        const topLink = document.querySelector(".top-link");
        this.navbarFixed = () => {
        const scrollHeight = window.pageYOffset;
        const navHeight = navbarFixed.getBoundingClientRect().height;
            if (scrollHeight > navHeight) {
                navbarFixed.classList.add("fixed-nav");
            }else {
                navbarFixed.classList.remove("fixed-nav");
            }
        // setup back to top link
            if (scrollHeight > 500) {
                console.log("helo");
                topLink.classList.add("show-link");
            } else {
                topLink.classList.remove("show-link");
            }
        };
        return(
            <nav id="nav">
                <div className="nav-center">
                    <div className="nav-header">
                        <NavLink to="#home" className="scroll-link">
                            <img src={logo} className="logo" alt="logo" />
                        </NavLink>
                        <button className="nav-toggle">
                            {/* <FontAwesomeIcon icon={["far", "bars"]} /> */}
                            {/* <i className="fas fa-bars" /> */}
                            <FontAwesomeIcon icon="bars"/>
                        </button>
                    </div>
                    <div className="links-container">
                        <ul className="links">
                        <li>
                            <NavLink activeClassName="active scroll-link" to="/home">
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName="active scroll-link" to="/about">
                                About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName="active scroll-link" to="/portfolio">
                                Portfolio
                            </NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName="active scroll-link" to="/contact">
                                Contact
                            </NavLink>
                        </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}
export default Navbar
      