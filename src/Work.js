import React from 'react';
import ProjectCard from './ProjectCard'
import Footer from './Footer';

const Work = () => {
    return(
        <div className="container work">
                <h1>Projects</h1>
                <div className="animated_list">
                    <ul className="grid projects">
                        <ProjectCard label="LumaTax" title="LumaTax"/>
                        <ProjectCard label="ThroneFantasy" title="Throne Fantasy"/>
                        <ProjectCard label="Legato" title="Legato"/>
                        <ProjectCard label="DigitalLifeboat" title="Digital Lifeboat"/>
                        <ProjectCard label="Coming Soon" title="Coming Soon"/>  
                    </ul>
                </div>
                <Footer/>
        </div>   
    )
}
export default Work;