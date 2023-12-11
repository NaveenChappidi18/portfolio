import React, { useState } from 'react';
import "./nav.css";
import { AiTwotoneHome } from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";
import { BiBookAlt } from "react-icons/bi";
import { RiServiceFill } from "react-icons/ri";
import { MdContactPage } from "react-icons/md";

const Nav = () => {
    const [activeNav, setActiveNav] = useState("#home");

    return (
        <div>
            <nav className="nav">
                <a href="#home" onClick={() => { setActiveNav("#home") }} className={activeNav === "#home" ? "active" : ""}> <AiTwotoneHome /></a>
                <a href="#about" onClick={() => { setActiveNav("#about") }} className={activeNav === "#about" ? "active" : ""}> <BiUserCircle /></a>
                <a href="#experience" onClick={() => { setActiveNav("#experience") }}  className={activeNav === "#experience" ? "active" : ""}> <BiBookAlt /></a>
                <a href="#services" onClick={() => { setActiveNav("#services") }} className={activeNav === "#services" ? "active" : ""}> <RiServiceFill /></a>
                <a href="#contact" onClick={() => { setActiveNav("#contact") }} className={activeNav === "#contact" ? "active" : ""}> <MdContactPage /></a>
            </nav>
        </div>
    );
};

export default Nav;
