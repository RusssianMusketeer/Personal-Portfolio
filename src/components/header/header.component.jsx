import React, { useState } from 'react';
import { NavLink,} from 'react-router-dom';
import './header.styles.jsx';
import { ReactComponent as LogoPersonal} from '../../assets/Arseni_logo_2.svg';
import HamburgerMenu from '../burger/burger.component';
import { Navbar } from './header.styles.jsx';
import { HeaderContainer } from './header.styles.jsx';
import { MenuBurger } from './header.styles.jsx';
import { LogoContainer } from './header.styles.jsx';
import { OptionsContainer } from './header.styles.jsx';

const Header = () => {
    
    const [hamburgerOpen, setHamburgerOpen]=useState(false);

    const toggleHamburger =() => {
        setHamburgerOpen(!hamburgerOpen);
    }

    return ( 
        
    <Navbar>
     <HeaderContainer>
         <LogoContainer hamburgerOpen={hamburgerOpen}>
             <LogoPersonal className="green-logo" />       
         </LogoContainer>
         <MenuBurger onClick={toggleHamburger}>
         <HamburgerMenu hamburgerOpen={hamburgerOpen}/>
         </MenuBurger>
         <OptionsContainer>
             <NavLink className ='options' to='/'> HOME </NavLink>
             <NavLink className ='options' to='/portfolio'> PORTFOLIO </NavLink>
             <NavLink className ='options' to='/skills'> SKILLS </NavLink>
             <NavLink className ='options' to='/contact'> CONTACT ME </NavLink>

         </OptionsContainer>
        

     </HeaderContainer>

 </Navbar>)
};

export default Header;