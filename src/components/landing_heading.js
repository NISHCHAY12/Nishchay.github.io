import React from "react"
import me from "../images/myself.jpg"

export default function heading(){
    return(
        <div className="animatedown" id="hello">
            <h1 id="intro">Myself , Nishchay Singh<br/>A budding web Developer.</h1>
            <img id="my_img" src={me} alt="me"/>
        </div>
    )
}