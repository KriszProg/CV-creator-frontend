import React, { useState, useEffect }from 'react';
import TitleSeparator from '../styled-components/TitleSeparator';
import RequestHandler from '../service/RequestHandler';
import '../CVForm.css';

function InputSectionSimple(props) {
    const requestHandler = new RequestHandler();
    const CVId = props.CVId;
    const sectionTitle = props.sectionTitle !== null ? props.sectionTitle : '';
    const object = props.object !== null ? props.object : '';

    const [URLEndpoint, setURLEndpoint] = useState(null);
    const [objectKey, setObjectKey] = useState(null);
    const [fetchedData, setFetchedData] = useState();
    const [errorHandler, setErrorHandler] = useState(null);

    const url = `http://localhost:8080/cv/${CVId}/update/${URLEndpoint}`;

    // console.log('***Section title***', sectionTitle);
    // console.log('url: ',  url);
    // console.log('objectKey: ', objectKey);
    // console.log('URLEndpoint: ', URLEndpoint);
    // console.log('******************');

    useEffect(() => {
        // console.log('*** useEffect executed from:', sectionTitle);
        setupPropertiesForPost();
    }, [])

    const setupPropertiesForPost = () => {
        switch(sectionTitle) {
            case 'Self Definition':
                setURLEndpoint('self-definition');
                setObjectKey('selfDefinition');
                break;
            case 'Strength':
                setURLEndpoint('strength');
                setObjectKey('strength');
                break;
            case 'Mentor Opinion' :
                setURLEndpoint('mentor-opinion');
                setObjectKey('mentorOpinion');
                break;
        }
    }

    const saveInput = (e) => {
        e.preventDefault();
        let inputText = document.getElementById(URLEndpoint).value;
        const objectToPost = {
            [objectKey]: inputText
        };
        requestHandler.postToSource(url, objectToPost, setFetchedData, setErrorHandler);
    }

    //Need any id to wrapper div?
    return (
        <div className='section'> 
            <form onSubmit={saveInput}>
                <h2>{sectionTitle}</h2>
                <TitleSeparator/>
                <textarea className='textarea input-field' id={URLEndpoint} name='input-field' rows='12' maxLength='780' defaultValue={object}></textarea>
                <button className='submit-button' type='submit'>SUBMIT</button>
            </form>
        </div>
    )
}

export default InputSectionSimple;
