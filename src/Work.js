import React from 'react';
import ProjectCard from './ProjectCard'
const Work = () => {
    return(
        <div className="page work">
            <section>
                <h1>Projects</h1>
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