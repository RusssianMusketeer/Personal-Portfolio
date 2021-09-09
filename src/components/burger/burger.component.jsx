import React from 'react';
import { NavLink } from 'react-router-dom';
import './burger.styles.jsx';
import { Hamburger } from './burger.styles.jsx';
import { HamburgerContainer } from './burger.styles.jsx';
import { Twirl as Humburger } from 'hamburger-react'


const HamburgerMenu = (hamburgerOpen ) => {
    return (
    <Hamburger >
    <Humburger
    color= {hamburgerOpen.hamburgerOpen ? "#FAFAFA" : "#33323D"}
    duration={0.5} 
    toggled={hamburgerOpen.hamburgerOpen}  toggle={hamburgerOpen.setHamburgerOpen}
    />
    <HamburgerContainer hamburgerOpen={hamburgerOpen}>
             <NavLink onClick={!hamburgerOpen.hamburgerOpen} className ='burger-top'  to='/'> HOME </NavLink>
             <NavLink onClick={!hamburgerOpen.hamburgerOpen} className ='burger' to='/portfolio'> PORTFOLIO </NavLink>
             <NavLink onClick={!hamburgerOpen.hamburgerOpen} className ='burger' to='/skills'> SKILLS </NavLink>
             <NavLink onClick={!hamburgerOpen.hamburgerOpen} className ='burger-bottom' to='/contact'> CONTACT ME </NavLink>
    </HamburgerContainer>
    </Hamburger>
    
  )
}

export default HamburgerMenu;