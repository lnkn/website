import React from 'react';
import {
    NavLink,
  } from "react-router-dom";

const ProjectCard = (props) => {
   
    return(
        <li className="link__sexy">
            <NavLink to={'/' + props.label} activeClassName="active">
                <div>{props.title}</div>
            </NavLink>
        </li>
    )
}

export default ProjectCard;