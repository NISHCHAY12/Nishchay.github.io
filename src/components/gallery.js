import React from "react"
import gallery from "../images/gallery.png"

export default function card_web(){
    return(
        <div id="gallery-project">
            <h1>Gallery Webpage</h1>
            <img id="gallery-img" src={gallery} alt="Gallery"/>
            <p>This Digital Card is a Front-end project implemented with the help of technologies like HTML , CSS , Javascript and React framework .</p>
            <a href="http://hgallery.000webhostapp.com/">Link to the Project</a>
        </div>
    )
}