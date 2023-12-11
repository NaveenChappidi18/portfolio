import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { SiLeetcode } from "react-icons/si";
const HeaderSocial = () => {
    return (
        <div className="header_socials"> 
            <a href="https://www.linkedin.com/feed/" target="-blank"><BsLinkedin/></a>
            <a href="https://leetcode.com/ChappidiNaveen/" target="-blank"><SiLeetcode/></a>
            <a href="https://github.com/dashboard" target="-blank"><BsGithub/></a>
        </div>
    )
}  
export default HeaderSocial; 