import React from 'react';
import './container-image.styles.scss';

const ContainerImage =({image,home}) => (

<div className={home==="home" ? 'container-image-home': 'containe-image-portfolio'} style ={{backgroundImage: "url(" + image + ")"}} alt='about-me'>   
 
 </div> 
)

export default ContainerImage;