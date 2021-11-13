import React from 'react';
import './portfolio-container.styles.scss';
import ProjectResume from '../project-resume/project-resume.component';
import ProjectBackground from '../project-background/project-background.component';

const PortfolioContainer =({text}) => (
    <div className="portfolio-container">
        <ProjectResume text={text}/>
        <ProjectBackground text={text}/>

    </div>

)

export default PortfolioContainer;