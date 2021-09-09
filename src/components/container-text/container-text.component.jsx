import React from 'react';
import './container-text.styles.scss';

const ContainerText =({text}) => (
    <div>
    <h1 className='h1-title'>{text.title}</h1>
    <p className='about-text'>
     {text.word}
    </p>

    </div>
)

export default ContainerText;