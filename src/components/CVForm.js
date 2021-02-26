import React, { useState, useEffect }from 'react';
import RequestHandler from '../service/RequestHandler';
import ErrorMsg from './ErrorMsg';
import ControlPanel from './ControlPanel';
import CVHeader from './CVHeader';
import LeftSidebar from './LeftSidebar';
import RightSidebar from './RightSidebar';
import '../CVForm.css';

function CVForm(props) {
    const requestHandler = new RequestHandler();
    const id = props.match.params.id;
    const url = `http://localhost:8080/cv/${id}`;
    
    const [isLoading, setIsLoading] = useState(true);
    const [fetchedCV, setFetchedCV] = useState(null);
    const [errorHandler, setErrorHandler] = useState(null);
    
    const urlForPost = `http://localhost:8080/cv/${id}/update/title-and-candidate`;
    const [response, setResponse] = useState(null);

    const saveInput = (e, url) => {
        e.preventDefault();
        let titleValue = document.getElementById('cv-title').value;
        let nameValue = document.getElementById('candidate-name').value;
        let roleValue = document.getElementById('candidate-role').value;
        const objectToPost = {
            title: titleValue,
            candidate: {
            name: nameValue,
            role: roleValue,
            },
        };
        // console.log('objectToPost: ', objectToPost);
        requestHandler.postToSource(urlForPost, objectToPost, setResponse, setErrorHandler);
    }

    useEffect(() => {
        // console.log('*** CVForm useEffect executed ***');
        if (response===null) {
            // console.log('actual state of response: ', response);
            // console.log('fecthCV starts here...')
            requestHandler.getFromSource(url, setFetchedCV, setErrorHandler);
            setIsLoading(false)
        } else  {
            // console.log('Skip fetch and Im gonna set the response to null');
            setResponse(null);
        }
    }, [response]);

    if(isLoading) {
        return(<div>Please wait...</div>);
    }

    //Error handling:
    if(errorHandler) {
        const customMsg = 'Ooops! An Error occured while trying to reach the server!';
        
        return (
            <ErrorMsg type={errorHandler.name} systemMsg = {errorHandler.message} customMsg={customMsg} />
        )
    }

    if(fetchedCV) {
        return (
            <div className='cv-container'>
                <ControlPanel fetchedCV={fetchedCV} saveInput={saveInput}/>
                <CVHeader fetchedCV={fetchedCV}/>
                <LeftSidebar fetchedCV = {fetchedCV}/>
                <RightSidebar/>
                <footer>Footer</footer>
            </div>
        )
    }
    return(<div></div>);
}

export default CVForm;