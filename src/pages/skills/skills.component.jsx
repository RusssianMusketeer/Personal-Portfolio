import React from 'react';
import './skills.styles.scss';
import CallToAction from '../../components/call-to-action/call-to-action.component';
import { ReactComponent as Sass} from '../../assets/sass.svg';
import { ReactComponent as Javascript} from '../../assets/javascript.svg';
import { ReactComponent as ReactIcon} from '../../assets/react.svg';
import { ReactComponent as Redux} from '../../assets/redux.svg';
import { ReactComponent as Git} from '../../assets/git-icon.svg';
import { ReactComponent as Responsive} from '../../assets/responsive.svg';
import { ReactComponent as NodeJs} from '../../assets/nodejs.svg';
import { ReactComponent as Express} from '../../assets/express.svg';
import { ReactComponent as MongoDb} from '../../assets/mongodb.svg';
import { ReactComponent as TypeScript} from '../../assets/typescript.svg';
import { ReactComponent as Docker} from '../../assets/docker.svg';
import { motion } from 'framer-motion';


const Skills = () => (

    <motion.div
    initial={{ opacity: 0, x: -200 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: 200 }}
    transition={{ duration: 0.7 }}
    >
    <section  className="skills-section">

        <div className="skills-container">
        <h1 className="skills-title">Skill Set</h1>
        <p className="skills-text">These are the technologies I use to build various projects. I always try to improve my knowledge and learn something new with each new project.There can always be improvements made and new things to learn. I have experience and knowledge of Sass, JS, React JS, Redux, Node.js, Express.js, MongoDB, Docker, Git, Responsive Design and more...</p>
        <div className="skill-display">
        <div className="wobble-hor-bottom ">     
        <Sass className="hover-icons"/>
        </div>
        <div className="wobble-hor-bottom ">  
        <Javascript className="hover-icons"/>
        </div>
        <div className="wobble-hor-bottom ">  
        <TypeScript className="hover-icons"/>
        </div>
        <div className="wobble-hor-bottom ">  
        <ReactIcon className="hover-icons"/>
        </div>
        <div className="wobble-hor-bottom ">  
        <Redux className="hover-icons"/>
        </div>
        <div className="wobble-hor-bottom ">  
        <NodeJs className="hover-icons"/>
        </div>
        <div className="wobble-hor-bottom ">  
        <Express className="hover-icons"/>
        </div>
        <div className="wobble-hor-bottom ">  
        <MongoDb className="hover-icons"/>
        </div>
        <div className="wobble-hor-bottom ">  
        <Docker className="hover-icons"/>
        </div>
        <div className="wobble-hor-bottom ">  
        <Git className="hover-icons"/>
        </div>
        <div className="wobble-hor-bottom ">  
        <Responsive className="hover-icons"/>
        </div>
        </div>
        </div>
        <CallToAction style={{marginBottom:"10rem"}}></CallToAction>
    
    </section>
    </motion.div>
)

export default Skills