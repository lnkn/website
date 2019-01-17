import React from 'react';
import ProfilePicture from './assets/IMG_3620.jpg'
import Footer from './Footer';

const About = () => {
    return(
        <div className="container bind">
            <div className="about">
                <div className="about__blackbox">
                    <h1 className="about__title">Lincoln Doyle</h1>
                    <p>Cross functional product designer with broad set of skills acquired in years of startup experience. Experience clarifying vision and turning business process into software products. Successfully shipped both prototypes and products that achieved multiple rounds of funding from world class institutions.</p>
                </div>
                <div className="about__portrait">
                    <img
                    className="profilepicture"
                    alt="Lincoln Doyle"
                    src={ProfilePicture}
                    />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default About;