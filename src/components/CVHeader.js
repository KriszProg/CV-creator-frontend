import React from 'react';
import profilePhoto from '../images/user.png';
import '../CVForm.css';

function CVHeader() {
    return (
        <div id="cv-header">
            <div id='cv-header-candidate'>
                <textarea className='textarea name' id='candidate-name' name='candidate-name' rows='1' max-rows='1' maxLength='18'></textarea>
                <textarea className='textarea role' id='candidate-role' name='candidate-role' rows='1' max-rows='1' maxLength='30'></textarea>
            </div>
            <img id='profile-photo' src={profilePhoto} alt="profile-photo" width='170' height='170'/>
        </div>
    )
}

export default CVHeader;
