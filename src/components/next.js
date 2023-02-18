import React from "react"

export default function next_button(){
    return(
        <>
            <button onClick={project} id="next">To Projects</button>
        </>
    )
}
var x;
function project(){
    console.log("hi");

    document.getElementById("hello").classList.remove("animatedown");
    document.getElementById("hello").classList.add("animateup");
    x = document.getElementById("next");
    x.style.display = "none";
    setTimeout(function(){
        document.getElementById("proj").style.display = "flex";
        document.getElementById("proj").classList.remove("animate-proj-rev");
        document.getElementById("proj").classList.add("animate-proj");
    },500);
    
}