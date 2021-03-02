import React, { useState, useEffect }from 'react';
import TitleSeparator from '../styled-components/TitleSeparator';
import '../CVForm.css';

function SectionSingleData(props) {
    const CVId = props.CVId;
    const saveInput = props.saveInput;
    const sectionTitle = props.sectionTitle !== null ? props.sectionTitle : '';
    const object = props.object !== null ? props.object : '';

    const [URLEndpoint, setURLEndpoint] = useState(null);
    const [objectKey, setObjectKey] = useState(null);

    const urlForPost = `http://localhost:8080/cv/${CVId}/update/${URLEndpoint}`;

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

    const prepareAndSave = (e) => {
        e.preventDefault();
        let inputText = document.getElementById(URLEndpoint).value;
        const objectToPost = {
            [objectKey]: inputText
        };
        saveInput(urlForPost, objectToPost);
    }

    return (
        <div className='section'> 
            <form onSubmit={prepareAndSave}>
            <div className="inline-button">
                <h2>{sectionTitle}</h2>
                <button className='submit-button' type='submit'>SUBMIT</button>
            </div>
                <TitleSeparator/>
                <textarea className='textarea input-field' id={URLEndpoint} name='input-field' rows='12' maxLength='780' defaultValue={object}></textarea>
            </form>
        </div>
    )
}

export default SectionSingleData;
