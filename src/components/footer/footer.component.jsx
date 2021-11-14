import React from 'react';
import './footer.styles.scss';
import { ReactComponent as Github} from '../../assets/github.svg';
import { ReactComponent as LinkedIn} from '../../assets/linkedin.svg';
import { NavLink} from 'react-router-dom';
import { ReactComponent as LogoPersonal} from '../../assets/Arseni_logo_2.svg';

const Footer = () => (
<footer>
        <div className='footer-container'>
            <div className='footer-logo-choice-container'>
             <LogoPersonal className ='choice-logo'/>
             <NavLink className ='choice' to='/'> HOME </NavLink>
             <NavLink className ='choice' to='/portfolio'> PORTFOLIO </NavLink>
             <NavLink className ='choice' to='/skills'> SKILLS </NavLink>
             <NavLink className ='choice' to='/contact'> CONTACT ME </NavLink>
            </div>
            <div className='socials'>
            <a className ='social' href='https://github.com/RusssianMusketeer'> <Github/> </a>
            <a className ='social' href='https://www.linkedin.com/in/arseni-dmitriev-63b774225/'> <LinkedIn/>  </a> 

            </div>

        </div>
</footer>
)

export default Footer