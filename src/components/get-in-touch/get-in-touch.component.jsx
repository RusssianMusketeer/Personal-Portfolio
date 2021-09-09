import React from 'react';
import './get-in-touch.styles.scss';
import { ReactComponent as Git} from '../../assets/git.svg';
import { ReactComponent as Link} from '../../assets/link.svg';

const GetInTouch = () => (
    <div className='get-in-touch-container'>
        <h1 className='get-in-touch-title'>Get in Touch</h1>
        <div className="get-in-touch-socials">
        <p className='get-in-touch-text'>
        I’d love to hear about what you’re working on and how I could help. 
        I’m currently looking for a new role and am open to a wide range of opportunities. 
        I am open to new technologies and ways to code, whatever tool is needed for the job.
        I’m a hard-working and positive person who will always approach each task with a sense of purpose and attention to detail.
        Creativity, discipline, perseverance  and hard work are my values.
        Please do feel free to check out my online profiles below and get in touch using the form.
        </p>
        
        <a  href='https://github.com/RusssianMusketeer'> <Git/> </a>
        <a  href='https://ca.linkedin.com/'> <Link/>  </a> 

        </div>

    </div>
);

export default GetInTouch;