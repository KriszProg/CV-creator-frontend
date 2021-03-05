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
    const [response, setResponse] = useState(null);

    const saveInput = (urlForPost, objectToPost) => {
        // console.log('incoming urlForPost from CVForm saveInput(): ', urlForPost);
        // console.log('incoming objectToPost from CVForm saveInput(): ', objectToPost);
        requestHandler.postToSource(urlForPost, objectToPost, setResponse, setErrorHandler);
    }

    useEffect(() => {
        if (response===null) {
            requestHandler.getFromSource(url, setFetchedCV, setErrorHandler);
            setIsLoading(false)
        } else  {
            setResponse(null);
        }
    },  [response]);

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
                <CVHeader fetchedCV={fetchedCV} saveInput={saveInput}/>
                <LeftSidebar fetchedCV = {fetchedCV} saveInput={saveInput}/>
                <RightSidebar/>
                <footer>Footer</footer>
            </div>
        )
    }
    return(<div></div>);
}

export default CVForm;