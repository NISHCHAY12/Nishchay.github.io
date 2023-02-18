import React from "react"

export default function sidebar(){
    return(
        <div id="side">
            <div id="side-bar">
                <h1>Projects</h1>
                <button onClick={() => project("project1")}>My Digital Card</button>
                <button onClick={() => project("project2")}>A Gallery Webpage</button>
                <button onClick={() => project("project3")}>Car Rental Website</button>
            </div>
            <div id="sep"></div>
        </div>
    )
}

function project(id){
    var array = ["project1","project2","project3"];
    var i;
    for(i = 0; i< 3 ; i++)
    {
        if(id !== array[i])
        {
            document.getElementById(array[i]).classList.remove("animatedown");
            document.getElementById(array[i]).classList.add("animateup");
            document.getElementById(array[i]).style.display = "none";
        }
        
        if(id === array[i])
        {
            document.getElementById(array[i]).style.display = "block";
            document.getElementById(array[i]).classList.remove("animateup");
            document.getElementById(array[i]).classList.add("animatedown");
        }
        
    }
    console.log(id);
}