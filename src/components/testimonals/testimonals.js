import React from "react";
import "./testimonals.css";
import {BiCheck} from "react-icons/bi";
const testimonals = () => {
    return (
        <section id="services">
            <h5>What I Offer</h5>
            <h2> Services</h2>
            <div className="container services_container">
                <article className="service">
                    <div className="service_head">
                        <h3>UI/UX Design</h3>

                    </div>
                    <ul className="service_list">
                        <li>
                            <BiCheck className="service_list-icon"/>
                            <p>Web design</p>
                        </li>
                        <li>
                            <BiCheck className="service_list-icon"/>
                            <p>Web development</p>
                        </li>
                        <li>
                            <BiCheck className="service_list-icon"/>
                            <p>UI/UX design</p>
                        </li>
                        <li>
                            <BiCheck className="service_list-icon"/>
                            <p>UX research</p>
                        </li>
                        <li>
                            <BiCheck className="service_list-icon" />
                            <p>UX research</p>
                        </li>
                        <li>
                            <BiCheck className="service_list-icon" />
                            <p>UX research</p>
                        </li>

                    </ul>

                </article>
                {/* END */}
                <article className="service">
                    <div className="service_head">
                        <h3>UI/UX Design</h3>

                    </div>
                    <ul className="service_list">
                        <li>
                            <BiCheck className="service_list-icon" />
                            <p>Web design</p>
                        </li>
                        <li>
                            <BiCheck className="service_list-icon" />
                            <p>Web development</p>
                        </li>
                        <li>
                            <BiCheck className="service_list-icon" />
                            <p>UI/UX design</p>
                        </li>
                        <li>
                            <BiCheck className="service_list-icon" />
                            <p>UX research</p>
                        </li>
                        <li>
                            <BiCheck className="service_list-icon" />
                            <p>UX research</p>
                        </li>
                        <li>
                            <BiCheck className="service_list-icon" />
                            <p>UX research</p>
                        </li>

                    </ul>

                </article>
                {/* END */}
                <article className="service">
                    <div className="service_head">
                        <h3>UI/UX Design</h3>

                    </div>
                    <ul className="service_list">
                        <li>
                            <BiCheck className="service_list-icon" />
                            <p>Web design</p>
                        </li>
                        <li>
                            <BiCheck className="service_list-icon" />
                            <p>Web development</p>
                        </li>
                        <li>
                            <BiCheck className="service_list-icon" />
                            <p>UI/UX design</p>
                        </li>
                        <li>
                            <BiCheck className="service_list-icon" />
                            <p>UX research</p>
                        </li>
                        <li>
                            <BiCheck className="service_list-icon" />
                            <p>UX research</p>
                        </li>
                        <li>
                            <BiCheck className="service_list-icon" />
                            <p>UX research</p>
                        </li>

                    </ul>

                </article>
                {/* END */}
                
            </div>
        </section>

    )
}
export default testimonals;