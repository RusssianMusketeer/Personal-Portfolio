import React from 'react';
import './get-in-contact.styles.scss';



const GetInContact = ()=> (
<div className='get-in-contact-container'>
<h1 className='get-in-contact-title'>Contact Me</h1>
        <div className="get-in-contact-form">
            <form className='get-in-touch-text' action="https://formsubmit.co/195limitless@gmail.com" method="POST">
                
                <input type="hidden" name="_captcha" value="false"/>
                <label for="name">Name</label>
                <input name="name" type="text" placeholder="Arseni Dmitriev" id="name" required/>
                <label for="email">Email Address</label>
                <input type="email" placeholder="email@example.com" required id="email" name="email"/>
                <label for="fname">Message</label>
                <textarea name="text" className="message" type="text" placeholder="How can I help ?"></textarea>
                <button className="button-container-message" message={true} type="submit">Send Message</button>
                <input type="hidden" name="_next" value="https://www.arsenidmitriev.com/thank-you"></input>
            </form>
                  
        </div>

        


</div>


);

export default GetInContact;