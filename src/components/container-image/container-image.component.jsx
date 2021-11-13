import React from 'react';
import './container-image.styles.scss';

const ContainerImage =({image,home,project}) => (

<div className={home==="home" ? 'container-image-home': 'containe-image-portfolio-'+project} style ={{backgroundImage: "url(" + image + ")"}} alt='about-me'>   
 
 </div> 
)

export default ContainerImage;