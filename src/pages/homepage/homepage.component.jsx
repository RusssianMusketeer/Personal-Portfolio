import React from 'react';
import './homepage.styles.scss';
import FrontImage from '../../components/front-image/front-image.component';
import { ReactComponent as DownArrow} from '../../assets/buttonarrows.svg';
import { NavLink} from 'react-router-dom';
import ContainerInfo from '../../components/container-info/container-info.component';

const HomePage = ({images}) => (
    <div >
        <div className='flex'>
        <FrontImage images={images.front_image.src}/> 
        <div className='presentation-container'>
            <h1 className='presentation-phrase' >Hey, I’m Arseni Dmitriev and I love building beautiful websites</h1>
            <NavLink className='homepage-button' to='/'>
                <div className='arrow-down'>
                <DownArrow/>
                </div> 
                <div className='about-me-button'>
                ABOUT ME
                </div>
            </NavLink>
        </div>
        </div>
        <ContainerInfo images={images}/> 
    </div>
)

export default HomePage;

