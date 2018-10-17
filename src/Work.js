import React from 'react';
import ProjectCard from './ProjectCard'
const Work = () => {
    return(
        <div className="page">
            <section>
                <h1>Work</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias laboriosam maiores autem nemo consectetur sed perspiciatis minus quibusdam dolorem ratione sapiente amet quia quis voluptates, earum culpa odio.</p>
                <ul className="grid">
                    <ProjectCard/>
                    <ProjectCard/>
                    <ProjectCard/>
                    <ProjectCard/>
                    <ProjectCard/>
                </ul>
            </section>
        </div>   
    )
}

export default Work;