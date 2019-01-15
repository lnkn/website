import React from 'react';
import ProfilePicture from './assets/IMG_3620.jpg'
import Footer from './Footer';

const About = () => {
    return(
        <div className="container bind">
            <div className="about">
                <h1 className="about__title">About</h1>
                <div className="about__portrait">
                    <img
                    className="profilepicture"
                    alt="Lincoln Doyle"
                    src={ProfilePicture}
                    />
                </div>
                <div className="about__blackbox">
                    <div className="about__subtitle">Lincoln Doyle</div>
                        <p>I have spent 6 years working in startups, garnering quite the collection of the proverbial hats, doing everything from marketing, product management, product design, customer support, code reviews, development, and janitorial duties.</p>
                        <p>Designing product in close contact with experienced, senior teams has shaped my perspective, business acumen, and approach to design. Learning alot of lessons the hard way in scrappy teams, I bring a different approach to the table.</p>
                        <p>In my spare time you can find me feriously scouring the free and endless knowledege of our age or laughing with friends &amp; family.</p>
                    </div>
            </div>
            <Footer />
        </div>
    )
}

export default About;