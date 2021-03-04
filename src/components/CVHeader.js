import React from 'react';
import ImgUploader from './ImgUploader';
import '../CVForm.css';

function CVHeader(props) {
    const id = props.fetchedCV.cvIdentifiers.id;
    const {name, role} = props.fetchedCV.candidate !== null ? props.fetchedCV.candidate : '';

    return (
        <div className='grid-box' id="cv-header">
            <ImgUploader element='background-img' fetchedCV={props.fetchedCV} saveInput={props.saveInput}/>
            <div id='cv-header-candidate'>
                <h2 id='display-name'>{name}</h2>
                <h2 id='display-role'>{role}</h2>
            </div>
            <ImgUploader element='profile-photo' fetchedCV={props.fetchedCV} saveInput={props.saveInput}/>
        </div>
    )
}

export default CVHeader;
