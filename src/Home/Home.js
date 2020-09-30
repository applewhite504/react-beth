import React, { Component } from "react"
import '../Home/Home.css'

export default function Home() {
    return (
        <div className="banner">
            <div className="container">
                <h1>Hi, I'm Beth!</h1>
                <p>Full-Stack Developer</p>
                <a href="#contact" className="scroll-link btn btn-white">Contact Me, I'm for hire!</a>
            </div>
        </div>
    )
}