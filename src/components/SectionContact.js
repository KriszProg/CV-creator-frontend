import React, { useState } from 'react';
import TitleSeparator from '../styled-components/TitleSeparator';
import envelope from '../images/envelope-solid.png';
import phone from '../images/phone-alt-solid.png';
import linkedin from '../images/linkedin-brands.png';
import '../CVForm.css';

function SectionContact(props) {
    const CVId = props.CVId;
    const saveInput = props.saveInput;
    const {email, phoneNr, linkedInProfile} = props.contact !== null ? props.contact : '';
    
    const url = `http://localhost:8080/cv/${CVId}/update/contact`;

    const prepareAndSave = (e) => {
        e.preventDefault();
        let emailValue = document.getElementById('email').value;
        let phoneValue = document.getElementById('phone').value;
        let linkedinValue = document.getElementById('linkedin').value;
        const objectToPost = {
            email: emailValue,
            phoneNr: phoneValue,
            linkedInProfile: linkedinValue
        };
        saveInput(url, objectToPost);
    }

    return (
        <div className='section'>
            <form onSubmit={prepareAndSave}>
                <div className="inline-button">
                    <h2>Contact</h2>
                    <button className='submit-button' type='submit'>SUBMIT</button>
                </div>
                <TitleSeparator/>
                <div className='inline-fa'>
                    <img src={envelope} alt='envelope' height='16'width='16'/>
                    <input className='contact' type='email' id='email' name='email' placeholder='example.candidate@gmail.com' defaultValue={email} required></input>
                    
                    <img src={phone} alt='phone' height='16'width='16'/>
                    <input className='contact' type='text' id='phone' name='phone' placeholder='+36 20 123 45 67' defaultValue={phoneNr} required></input>
                    
                    <img src={linkedin} alt='linkedin' height='17'width='17'/>
                    <input className='contact' type='url' id='linkedin' name='linkedin' placeholder='https://www.linkedin.com/in/ExampleCandidate' defaultValue={linkedInProfile} required></input>
                </div>
            </form>
        </div>
    )
}

export default SectionContact;
