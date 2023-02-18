import React from "react"
import Nav from "./components/navbar"
import Head from "./components/landing_heading"
import Info from "./components/landing_info"
import Next from "./components/next"
import Side from "./components/sidebar"
import Card from "./components/card"
import Gallery from "./components/gallery"
import "./css/style.css"

export default function app(){
    return(
        <>
            <Nav/>
            <div id="main_page">
                <Head/>
                <Info/>
                <Next/>
            </div>
            <div id="proj">
                <Side/>
                <div id="block">
                    <div className="animatedown" id="project1"><Card/></div>
                    <div id="project2"><Gallery/></div>
                    <div id="project3"></div>
                </div>
            </div>
        </>
    )
}