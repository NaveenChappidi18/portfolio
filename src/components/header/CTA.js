import React from "react";
import Resume from "./20121A0571_CHAPPIDI NAVEEN.pdf";
const CTA = () => {
    return (
        <div className="cta">
            <a href={Resume} download className='btn'>Download CV</a>
            <a href="" className="btn btn-primary">Let's Talk</a>

        </div>
    )
}
export default CTA;