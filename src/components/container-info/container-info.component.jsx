import React from 'react';
import './container-info.styles.scss';
import ContainerImage from '../container-image/container-image.component';
import ContainerText from '../container-text/container-text.component';
import CustomButton from '../custom-button/custom-button.component';

const ContainerInfo = ({images}) => (
    <section className='container-info'>
        <ContainerImage image={images.about_me.src}/>
        <div className='text-button-container'>
        <ContainerText/>
        <CustomButton>GO TO PORTFOLIO</CustomButton>
        </div>
        

    </section>
)

export default ContainerInfo;