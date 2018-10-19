import React from 'react';
import {
    NavLink,
  } from "react-router-dom";

const ProjectCard = (props) => {
   
    return(
        <li>
            <div>
                <NavLink to={'/' + props.label} activeClassName="active">{props.title}</NavLink>
            </div>
        </li>
    )
}

export default ProjectCard;