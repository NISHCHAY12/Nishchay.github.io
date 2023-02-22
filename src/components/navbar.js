import React from "react"
import logo from "../images/logo.png"

export default function navbar(){
    return(
        <nav className="navbar">
            <div id="name-tag">
                <img id="logo" src={logo} alt="logo"/>
                <h2 id="name">Nishchay Singh</h2>
            </div>

            <ul id="lists">
                <li><a onClick={project_rev} href="#home">Home <i className="fa fa-home"/></a></li>
                <li><a href="mailto:nishchaysingh13579@gmail.com">E-mail <i className="fa fa-envelope"/></a></li>
                <li className="drop">
                    <a className="social_drop" href="#social_links">Social <i className="fa fa-caret-down"/></a>
                    <div className="drop_content">
                        <a href="https://www.linkedin.com/in/nishchay-singh-2a8bb4229"><i className="fa fa-linkedin"/>LinkedIn</a>
                        <a href="https://instagram.com/nishchay2309?igshid=NTA5ZTk1NTc="><i className="fa fa-instagram"/>Instagram</a>
                        <a href="https://www.facebook.com/nishchay.singh.180"><i className="fa fa-facebook"/>Facebook</a>
                        <a href="https://twitter.com/Nishchay404?t=efCTR6vXDNMasTHHlcaCQQ&s=08"><i className="fa fa-twitter"/>Twitter</a>
                    </div>
                </li>
            </ul>

            <div onClick={burg} id="burger">
                <p></p>
                <p></p>
                <p></p>
            </div>
        </nav>
    )
}

var x;
function project_rev(){
    
    document.getElementById("proj").classList.remove("animate-proj");
    document.getElementById("proj").classList.add("animate-proj-rev");
    setTimeout(function(){
        document.getElementById("proj").style.display = "none";
    },600);
    
    setTimeout(function(){
        document.getElementById("hello").classList.remove("animateup");
        document.getElementById("hello").classList.add("animatedown");
    x = document.getElementById("next");
    x.style.display = "block";
    },600);
    
}
var c = 0;
function burg(){
    if(c === 0)
    {
        document.getElementById("lists").style.left = "-5vh";
        document.getElementById("main_page").style.filter = "brightness(60%)";
        document.getElementById("proj").style.filter = "brightness(60%)";
        document.getElementById("burger").style.border = "2px solid #cc00ff"
        c++;
    }
    else
    {
        document.getElementById("main_page").style.filter = "brightness(100%)";
        document.getElementById("proj").style.filter = "brightness(100%)";
        document.getElementById("lists").style.left = "-25vh";
        document.getElementById("burger").style.border = "2px solid #ffffff"
        c = 0;
    }
}
