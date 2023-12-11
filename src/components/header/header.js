import React from "react";
import Cta from "./CTA";
import Imgme from "./../../assets/photo.jpg";
import HeaderSocial from "./headerSocial";
import  "./header.css";
function header() {
    return (
        <section id="home">
        <header>
            <div className="container header_container">
                <h5>Hello I'm</h5>
                <h1>Naveen</h1>
                <h5 className="text-light">Fullstack Developer</h5>
                <Cta />
                <div className="me" >
                    <img className="image" src={Imgme} alt="me"/>
                </div>
                <a href="#contact" className="scroll_down">Scroll Down</a>
                <HeaderSocial />
                
                
                
                 
                
            </div>
            </header>
        </section>
        
    )
}
export default header;