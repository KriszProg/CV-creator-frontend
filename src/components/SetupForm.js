import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import RequestHandler from '../service/RequestHandler';
import ErrorMsg from './ErrorMsg';
import '../SetupForm.css';

function SetupForm() {
    const requestHandler = new RequestHandler();
    const url = 'http://localhost:8080/cv/add';
    const [fetchedCV, setFetchedCV] = useState();
    const [errorHandler, setErrorHandler] = useState(null);

    const saveTitle = (e) => {
        e.preventDefault();
        let cvTitle = document.getElementById('input-cv-title').value;
        const objectToPost = {title: cvTitle};
        requestHandler.postToSource(url, objectToPost, setFetchedCV, setErrorHandler);
    }

    if(fetchedCV) {
        return <Redirect to={`/cv/edit/${fetchedCV.id}`}/>
    }

    //Error handling:
    if(errorHandler) {
        const customMsg = 'Ooops! An Error occured while trying to save CV Title!';
        
        return (
            <ErrorMsg type={errorHandler.name} systemMsg = {errorHandler.message} customMsg={customMsg} />
        )
    }

    return (
        <div className='setup-form-container'>
            <form onSubmit={saveTitle}>
                <h2>Setup Title of your new CV</h2>
                <input type='text' id='input-cv-title' name='input-cv-title' placeholder='Enter the title of your CV...'/>
                <div>
                    <button id='submit-button' type='submit'>SUBMIT</button>
                </div>
            </form>
            
        </div>
    )
}

export default SetupForm;