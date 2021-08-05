import React from 'react';
import './footer.styles.scss';
import { ReactComponent as Github} from '../../assets/github.svg';
import { ReactComponent as Logo} from '../../assets/logo.svg';
import { ReactComponent as LinkedIn} from '../../assets/linkedin.svg';
import { NavLink} from 'react-router-dom';

const Footer = () => (
<footer>
        <div className='footer-container'>
            <div className='footer-logo-choice-container'>
             <Logo className ='choice-logo'/>
             <NavLink className ='choice' to='/'> HOME </NavLink>
             <NavLink className ='choice' to='/portfolio'> PORTFOLIO </NavLink>
             <NavLink className ='choice' to='/contact'> CONTACT ME </NavLink>
            </div>
            <div className='socials'>
            <a className ='social' href='https://github.com/RusssianMusketeer'> <Github/> </a>
            <a className ='social' href='https://ca.linkedin.com/'> <LinkedIn/>  </a> 

            </div>

        </div>
</footer>
)

export default Footer