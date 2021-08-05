import React from 'react';
import './custom-button.styles.scss';

const CustomButton = ({ children}) => (
    <div className='button-container' >
        {children}
    </div>
)

export default CustomButton;