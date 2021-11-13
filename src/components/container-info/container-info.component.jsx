import React from 'react';
import './container-info.styles.scss';
import ContainerImage from '../container-image/container-image.component';
import ContainerText from '../container-text/container-text.component';
import CustomButton from '../custom-button/custom-button.component';

const ContainerInfo = ({images,button,text,route,home,portfolio,project}) => (
    <section className={portfolio==="portfolio" ? 'container-info-portfolio':  'container-info'}>

        <ContainerImage image={images} home={home} project={project}/>
        <div className={home==="home" ? 'text-button-container': 'text-button-portfolio'}>
        <ContainerText text={text}/>
        <div className="portfolio-button">
        <CustomButton  route={route}>{button}</CustomButton>
        </div>
        </div>
        

    </section>
)

export default ContainerInfo;