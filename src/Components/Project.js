import React from 'react';
import './style.css';

export default function Project(props){
    return(
        <div className="project">
            <img className="project-img" src={props.image}></img>
            <div className="content">
                <h5>{props.title}</h5>
                <p>{props.description}</p>
                <button className="project-btn" onClick={() => window.location.href = props.url} >Go to Project</button>
            </div>
        </div>
    )
};