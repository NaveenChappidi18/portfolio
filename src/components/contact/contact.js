import React from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { FiGithub } from "react-icons/fi";
import { BsLinkedin } from "react-icons/bs";
import { PiMicrosoftOutlookLogoBold } from "react-icons/pi";
import { BsWhatsapp } from "react-icons/bs";


const Contact = () => {
    return (
        <section id="contact">
            <h1>Get In Touch</h1>
            <h2>Contact Me</h2>
            <div className="container contact_container">
                <div className="contact_options">
                    <article className="contact_option">
                        <MdOutlineEmail className="contact_icon_option"/>
                        <h4>Email</h4>
                        <h5>chappidinaveen18102001@gmail.com</h5>
                        <a href=" mailto:chappidinaveen18102001@gmail.com">Send a Message</a>
                    </article>
                    <article className="contact_option">
                        <BiLogoInstagramAlt className="contact_icon_option" />
                        <h4>Instagram</h4>
                        <h5>chappidinaveen18102001@gmail.com</h5>
                        <a href=" mailto:chappidinaveen18102001@gmail.com">Send a Message</a>
                    </article>
                    <article className="contact_option">
                        <PiMicrosoftOutlookLogoBold className="contact_icon_option" />
                        <h4>Outlook</h4>
                        <h5>20121A0571@vidyanikethan.asia</h5>
                        <a href=" mailto:chappidinaveen18102001@gmail.com">Send a Message</a>
                    </article>
                    <article className="contact_option">
                        <BsWhatsapp className="contact_icon_option" />
                        <h4>Whatsapp</h4>
                        <h5>7989225277</h5>
                        <a href="https://api.whatsapp.com/send?phone+7989225277">Send a Message</a>
                    </article>
                </div>
                <form action="">
                    <input type="text" name='name' placeholder='Your Name' />
                    <input type="email" name='email' placeholder='Your Mail' />
                    <textarea name="message" rows="7" placeholder="Your Message" required />
                    <button type='submit' className="btn btn-primary">Send Message</button>
                </form>

               
            </div>
        </section>
    );
};

export default Contact;
