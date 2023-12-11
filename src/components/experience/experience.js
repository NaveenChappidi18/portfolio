import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";
const experience = () => {
    return (
        <section id="experience">
            <h5>What Skills I Have</h5>
            <h2>My Experience</h2>
            <div className="container experience_container">
                <div className="experience_frontend">
                    <h3>
                        Frontend Development
                    </h3>
                    <div className="experience_content">
                        <article className="experience_details">
                            <BsPatchCheckFill className="experience_details-icon" className="experience_icon" />
                            <div>
                                <h4>HTML</h4>
                                <small className="text-light"> Experienced </small>
                            </div>
                        </article>
                        <article className="experience_details">
                            <BsPatchCheckFill className="experience_details-icon" className="experience_icon" />
                            <div>
                                <h4>CSS</h4>
                                <small className="text-light"> Intermidiate </small>
                            </div>
                        </article>
                        <article className="experience_details">
                            <BsPatchCheckFill className="experience_details-icon" className="experience_icon" />
                            <div>
                                <h4>React</h4>
                                <small className="text-light"> Experienced </small>
                            </div>
                        </article>
                        <article className="experience_details">
                            <BsPatchCheckFill className="experience_details-icon" className="experience_icon" />
                            <div>
                                <h4>JavaScript</h4>
                                <small className="text-light"> Experienced </small>
                            </div>
                        </article>
                        <article className="experience_details">
                            <BsPatchCheckFill className="experience_details-icon" className="experience_icon" />
                            <div>
                                <h4>Bootstrap</h4>
                                <small className="text-light"> Experienced </small>
                            </div>
                        </article>
                        <article className="experience_details">
                            <BsPatchCheckFill className="experience_details-icon" className="experience_icon" />
                            <h4>SQL</h4>
                            <div>
                                <small className="text-light"> Experienced </small>
                            </div>                        </article>
                    </div>

                </div>
                <div className="experience_backend">
                    <h3>
                        Other Skills
                    </h3>
                    <div className="experience_content">
                        <article className="experience_details">
                            <BsPatchCheckFill className="experience_details-icon" className="experience_icon" />
                            <div>
                                <h4>AWS</h4>
                                <small className="text-light"> Experienced </small>
                            </div>
                        </article>
                        <article className="experience_details">
                            <BsPatchCheckFill className="experience_details-icon" className="experience_icon" />
                            <div>
                                <h4>Data Structures</h4>
                                <small className="text-light"> Intermidiate </small>
                            </div>
                        </article>
                        <article className="experience_details">
                            <BsPatchCheckFill className="experience_details-icon" className="experience_icon" />
                            <div>
                                <h4>Java</h4>
                                <small className="text-light"> Experienced </small>
                            </div>
                        </article>
                        <article className="experience_details">
                            <BsPatchCheckFill className="experience_details-icon" className="experience_icon" />
                            <div>
                                <h4>Python</h4>
                                <small className="text-light"> Experienced </small>
                            </div>
                        </article>
                        <article className="experience_details">
                            <BsPatchCheckFill className="experience_details-icon" className="experience_icon" />
                            <div>
                                <h4>C++</h4>
                                <small className="text-light"> Experienced </small>
                            </div>
                        </article>
                        <article className="experience_details">
                            <BsPatchCheckFill className="experience_details-icon" className="experience_icon" />
                            <div>
                                <h4>Git</h4>
                                <small className="text-light"> Experienced </small>
                            </div>
                        </article>
                    </div>

                </div>
            </div>

        </section>

    )
}
export default experience;