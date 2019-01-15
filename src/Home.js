import React from 'react';
import Footer from './Footer';


const Home = () => {
    return(
        <div className="container bind">
            <div className="home">
                <div className="top">
                    <h1>Product Designer, Prototyper, and Generalist</h1>
                    <h3>Building product and keeping it 100</h3>
                    <h3>coffee or colab? lincolndoyle@outlook.com </h3>
                    <br/><br/>
                </div>
                <div className="row">
                    <a className="media_item" href="#">
                        <div>
                        </div>
                    </a>
                    <div className="content_item">
                        <div className="subtitle">Game - Throne Fantasy</div>
                        <div className="title">Fantasy Deathsport</div>
                        <div className="button">Read More</div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Home;