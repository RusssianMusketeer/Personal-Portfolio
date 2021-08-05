import React from 'react';
import { NavLink,} from 'react-router-dom';
import './header.styles.scss';
import { ReactComponent as Logo} from '../../assets/logo.svg';

const Header = () => (
 <nav>
     <div className='header-container'>
         <div className='logo-container'>
             <Logo/>
         </div>
         <div className='options-container'>
             <NavLink className ='options' to='/'> HOME </NavLink>
             <NavLink className ='options' to='/portfolio'> PORTFOLIO </NavLink>
             <NavLink className ='options' to='/contact'> CONTACT ME </NavLink>
         </div>

     </div>

 </nav>
);

export default Header;