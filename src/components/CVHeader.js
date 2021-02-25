import React from 'react';
import ImgUploader from './ImgUploader';
import '../CVForm.css';

function CVHeader(props) {
    const {name, role} = props.candidate !== null ? props.candidate : '';

    return (
        <div className='grid-box' id="cv-header">
            <ImgUploader element='background-img'/>
            <div id='cv-header-candidate'>
                <textarea className='textarea name' id='candidate-name' name='candidate-name' rows='1' max-rows='1' maxLength='18' defaultValue={name}></textarea>
                <textarea className='textarea role' id='candidate-role' name='candidate-role' rows='1' max-rows='1' maxLength='30' defaultValue={role}></textarea>
            </div>
            <ImgUploader element='profile-photo'/>
        </div>
    )
}

export default CVHeader;
