import React from 'react';
import './project-background.styles.scss';

const ProjectBackground =({text}) => (
    <div className="project_background">
        <h1 className="project-background-title">Project Background</h1>
        <p className="project_text">{text.project_background_text}</p>
    </div>

)

export default ProjectBackground;