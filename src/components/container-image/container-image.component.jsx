import React from 'react';
import './container-image.styles.scss';

const ContainerImage =({image}) => (
 <img className="container-image" src ={image} alt='about-me'>
 </img>
)

export default ContainerImage;