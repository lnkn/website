import React from 'react';
import { Container, Row, Col } from 'react-grid-system';
import ProfilePicture from './assets/lincolndoyle-80.jpg'

const About = () => {
    return(
        <div className="page">
            <section>
                <h1>About</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias laboriosam maiores autem nemo consectetur sed perspiciatis minus quibusdam dolorem ratione sapiente amet quia quis voluptates, earum culpa odio.</p>
                <img
                className="profilepicture"
                src={ProfilePicture}
                />
            </section>
        </div>
    )
}

export default About;