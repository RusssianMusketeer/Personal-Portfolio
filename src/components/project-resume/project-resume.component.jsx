import React from 'react';
import './project-resume.styles.scss';


const ProjectResume = () => (
    
    <div className="resume" >
        <h1 className="crown-clothing-title">Crown Clothing</h1>
        <p className="description">This project required me to build a fully responsive ecommerce website with some functionalities. I used React, along with Styled Components and Redux for the areas that required interactivity, such as the shopping cart.</p>
        <div className="skill-description">
        <p className="tech">Interactive Design / Front End Development<br/>React /JS /Redux / Firebase/ Styled Components/Responsive </p>
        </div>
        <div className="crown-buttons">
        <a  href="https://crown-clothing-ecommerce-store.herokuapp.com/" className="visit-website">VISIT WEBSITE</a>
        <a  href="https://github.com/RusssianMusketeer/Crown-Clothing/tree/master/src" className="visit-website">VIEW CODE</a>
        </div>
    </div>
    

);

export default ProjectResume;