import React, { useState, useEffect } from 'react';
import RequestHandler from '../service/RequestHandler';
import ErrorMsg from './ErrorMsg';
import CVTableLine from './CVTableLine';
import '../CVTable.css';

function CVTable() {
    const requestHandler = new RequestHandler();
    const url = 'http://localhost:8080/cv/all';
    const [isLoading, setIsLoading] = useState(true);
    const [fetchedCVs, setFetchedCVs] = useState([]);
    const [errorHandler, setErrorHandler] = useState(null);

    useEffect(() => {
        requestHandler.getFromSource(url, setFetchedCVs, setErrorHandler);
        setIsLoading(false);
    }, []);

    if(isLoading) {
        return(<div>Please wait...</div>);
    }

    //Error handling:
    if(errorHandler) {
        const {type, systemMsg} = errorHandler;
        const customMsg = 'Ooops! An Error occured while trying to reach the server!';
        
        return (
            <ErrorMsg type={errorHandler.name} systemMsg = {errorHandler.message} customMsg={customMsg} />
        )
    }

    return (
        <div className='cv-table-container'>
            <h2 id='table-title'>List of your previously saved CV</h2>
            <table id="cv-table">
                <thead>
                <tr>
                    <th>Title:</th>
                    <th>Date:</th>
                </tr>
                </thead>
                <tbody>
                    {fetchedCVs.map((cv) => {
                        return (
                            <CVTableLine
                                key={cv.id}
                                id={cv.id}
                                title={cv.title}
                                creationDate={cv.creationDate}
                            />
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default CVTable;
