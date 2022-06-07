import React from 'react';
import './Contact.scss';
import thanks from '../../../src/images/contact.jpg';

const Contact = () => {
    return (
        <div>
            <div id="contact_title">
                <br></br>
                <br></br>
                <h1>DONE BY:</h1>
            </div>
            <div id = "image_holder">
                <img id = "contact" align = "right" src = {thanks}/>
            </div>
            <div id = "bg-text">
                <p> BERU NEHA &nbsp;&nbsp;<span className='highlight'> PES2UG19CS084</span></p>
                <p> DHANAWADA LASYA PRIYA &nbsp;&nbsp;&nbsp;<span className='highlight'> PES2UG19CS111</span></p>
                <p> DEEPALI SURAJ ATTAVAR &nbsp;&nbsp;&nbsp;<span className='highlight'> PES2UG19CS106</span></p>
            </div>
        </div>
    );
}

export default Contact;