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

    useEffect(() => {
        requestHandler.getFromSource(url, setFetchedCV, setErrorHandler);
        setIsLoading(false)
    }, []); //[id]

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
                <ControlPanel cvIdentifiers={fetchedCV.cvIdentifiers}/>
                <CVHeader candidate={fetchedCV.candidate}/>
                <LeftSidebar fetchedCV = {fetchedCV}/>
                <RightSidebar/>
                <footer>Footer</footer>
            </div>
        )
    }
    return(<div></div>);
}

export default CVForm;