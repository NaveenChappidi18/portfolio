import React from "react";
import "./about.css";
import Image from "./../../assets/photo.jpg";
import { FaAward } from "react-icons/fa";
import { AiOutlineUser } from "react-icons/ai";
import { VscFolderLibrary } from "react-icons/vsc";


const about = () => {
    return (
        <section id="about">
            <h5> Get To Know </h5>
            <h2>About Me</h2>
            <div className="container about_container">
                <div className="about_me">
                    <div className="about_me-image">
                        <img src={Image} alt="About Image"/>
                    </div>
                </div>
                <div className="about_content">
                    <div className="about_cards">
                        <article className="about_card">
                            <FaAward className="about_icon"/>
                            <h5>Experience</h5>
                            <small>3+ years</small>
                        </article>
                        <article className="about_card">
                            <AiOutlineUser className="about_icon" />
                            <h5>Clients</h5>
                            <small>300+ clients</small>
                            </article>
                            <article className="about_card">
                            <VscFolderLibrary className="about_icon" />
                            <h5>Projects</h5>
                            <small>80+ completed projects</small>
                        </article>
                        

                      


                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisic
                        ing elit. Obcaecati aliquam reprehenderit voluptatem non excepturi rem dolores perspiciatis veniam sapiente cupiditate molestias, exercitationem sint, velit cumque aspernatur! Aperiam nemo sequi cumque.</p>
                    <button className="btn btn-primary">Lets Talk</button>

        
                </div>

            </div>

            

        </section>

    )
}
export default about;