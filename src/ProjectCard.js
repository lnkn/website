import React from 'react';
import {
    NavLink,
  } from "react-router-dom";

const ProjectCard = (props) => {
   
    return(
        <li className="grid-box">
           <span>
               <NavLink to={'/' + props.label} activeClassName="active">{props.title}</NavLink>
            </span>
        </li>
    )
}

export default ProjectCard;