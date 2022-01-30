import React from 'react';
import './project-resume.styles.scss';
import { ReactComponent as Responsive} from '../../assets/responsive.svg';
import { ReactComponent as NodeJs} from '../../assets/nodejs.svg';
import { ReactComponent as Express} from '../../assets/express.svg';
import { ReactComponent as MongoDb} from '../../assets/mongodb.svg';
import { ReactComponent as Sass} from '../../assets/sass.svg';
import { ReactComponent as Javascript} from '../../assets/javascript.svg';
import { ReactComponent as ReactIcon} from '../../assets/react.svg';
import { ReactComponent as Redux} from '../../assets/redux.svg';
import { ReactComponent as Git} from '../../assets/git-icon.svg';
import { ReactComponent as TypeScript} from '../../assets/typescript.svg';



  const iconTypes = {
    javascript: Javascript,
    responsive: Responsive,
    nodejs: NodeJs,
    express: Express,
    mongodb: MongoDb,
    sass: Sass,
    react: ReactIcon,
    redux: Redux,
    git: Git,
    typescript: TypeScript 
  };

  const IconComponent = ( name) => {
    let Icon = iconTypes[name];
    return <Icon />;
  };

const ProjectResume = ({text}) => (


    <div className="resume" >
        {console.log(text)}
        <h1 className="crown-clothing-title">{text.title}</h1>
        <p className="description">{text.project_resume_description}</p>
        <div className="skill-description">
        {text.project_resume_tech.map((element)=>(
            <div className="tech">
            {IconComponent(element)}
            </div>
        ))}
        </div>
        <div className="crown-buttons">
        <a  href={text.project_resume_website_link} className="visit-website">VISIT WEBSITE</a>
        <a  href={text.project_resume_code_link} className="visit-website">VIEW CODE</a>
        </div>
    </div>
    
    

);

export default ProjectResume;