import React from 'react';
import './call-to-action.styles.scss';
import CustomButton from '../custom-button/custom-button.component';

const CallToAction = () => (
 <div className='action-container'>
     <h1 className='interested'>Interested in doing a project together ?</h1>
     <div className="action-line-container">
     <hr className='action-line'/>
     </div>
     <CustomButton route={'/contact'}> CONTACT ME </CustomButton>
     
 </div>
);

export default CallToAction;