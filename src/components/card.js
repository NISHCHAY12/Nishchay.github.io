import React from "react"
import card from "../images/card.png"

export default function card_web(){
    return(
        <div id="card-project">
            <h1>My Digital Card</h1>
            <img id="card-img" src={card} alt="Digital_card"/>
            <p>This Digital Card is a Front-end project implemented with the help of technologies like HTML , CSS , Javascript and React framework .</p>
            <a href="#link_to_card">Link to the Project</a>
        </div>
    )
}