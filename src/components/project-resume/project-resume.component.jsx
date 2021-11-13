import React from 'react';
import './project-resume.styles.scss';


const ProjectResume = ({text}) => (
    
    <div className="resume" >
        {console.log(text)}
        <h1 className="crown-clothing-title">{text.title}</h1>
        <p className="description">{text.project_resume_description}</p>
        <div className="skill-description">
        <p className="tech">{text.project_resume_tech} </p>
        </div>
        <div className="crown-buttons">
        <a  href={text.project_resume_website_link} className="visit-website">VISIT WEBSITE</a>
        <a  href={text.project_resume_code_link} className="visit-website">VIEW CODE</a>
        </div>
    </div>
    

);

export default ProjectResume;