import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CVTableLine from './CVTableLine';
import '../CVTable.css';

function CVTable() {
    const [loaded, setLoaded] = useState(false);
    const [savedCV, setSavedCV] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/cv/all')
            .then((response) => {
                setSavedCV(response.data);
                setLoaded(true);
            });
    }, []);

    if(!loaded) {
        return(<div>Please wait...</div>);
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
                    {savedCV.map((cv) => {
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
