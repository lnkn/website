import React from 'react';
import ProjectCard from './ProjectCard'
const Work = () => {
    return(
        <div className="page">
            <section>
                <h1>Work</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias laboriosam maiores autem nemo consectetur sed perspiciatis minus quibusdam dolorem ratione sapiente amet quia quis voluptates, earum culpa odio.</p>
                <ul className="grid projects">
                    <ProjectCard label="LumaTax" title="LumaTax"/>
                    <ProjectCard label="ThroneFantasy" title="Throne Fantasy"/>
                    <ProjectCard label="Legato" title="Legato"/>
                    <ProjectCard label="DigitalLifeboat" title="Digital Lifeboat"/>
                    <ProjectCard label="Coming Soon" title="Coming Soon"/>  
                </ul>
            </section>
        </div>   
    )
}

export default Work;