import React from 'react';
import Project from './Project';
import './style.css';

export default function Projects(){
    return(
        <div className="project-container">
            <Project 
                title="Recipo" 
                image="https://user-images.githubusercontent.com/57569861/124129183-f973d680-da96-11eb-8400-204565340a17.png" 
                url="https://brave-hawking-18011e.netlify.app/"
                description=""
            />
            <Project 
                title="Go Cart" 
                image="https://user-images.githubusercontent.com/57569861/124126179-d98ee380-da93-11eb-91b0-58a7fb517c8d.png"
                description=""
            />
            <Project 
                title="Minesweeper" 
                image="https://user-images.githubusercontent.com/57569861/124124236-a4819180-da91-11eb-9e5e-84a5b9d269d5.png"
                description=""
            />
            <Project 
                title="Sort Visualizer" 
                image="https://user-images.githubusercontent.com/57569861/124125258-d8a98200-da92-11eb-92fc-795a5c95fbbd.png"
                description=""
            />
        </div>
    )
};