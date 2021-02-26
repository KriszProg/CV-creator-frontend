import React, { useState } from 'react';
import RequestHandler from '../service/RequestHandler';
import TitleSeparator from '../styled-components/TitleSeparator';
import '../CVForm.css';

function SectionContact(props) {
    const CVId = props.CVId;
    const {email, phoneNr, linkedInProfile} = props.contact !== null ? props.contact : '';
    
    const requestHandler = new RequestHandler();
    const url = `http://localhost:8080/cv/${CVId}/update/contact`;

    const [fetchedData, setFetchedData] = useState();
    const [errorHandler, setErrorHandler] = useState(null);

    const saveInput = (e) => {
        e.preventDefault();
        let emailValue = document.getElementById('email').value;
        let phoneValue = document.getElementById('phone').value;
        let linkedinValue = document.getElementById('linkedin').value;
        const objectToPost = {
            email: emailValue,
            phoneNr: phoneValue,
            linkedInProfile: linkedinValue
        };
        requestHandler.postToSource(url, objectToPost, setFetchedData, setErrorHandler);
    }

    return (
        <div className='section'>
            <form onSubmit={saveInput}>
                <div className="inline-button">
                    <h2>Contact</h2>
                    <button className='submit-button' type='submit'>SUBMIT</button>
                </div>
                <TitleSeparator/>
                <input className='contact' type='email' id='email' name='email' placeholder='example.candidate@gmail.com' defaultValue={email} required></input>
                <input className='contact' type='text' id='phone' name='phone' placeholder='+36 20 123 45 67' defaultValue={phoneNr} required></input>
                <input className='contact' type='url' id='linkedin' name='linkedin' placeholder='https://www.linkedin.com/in/ExampleCandidate' defaultValue={linkedInProfile} required></input>
            </form>
        </div>
    )
}

export default SectionContact;
