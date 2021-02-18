import React from 'react';
import profilePhoto from '../images/user.png';
import '../CVForm.css';

function ProfilePhoto(props) {
    const {uploadedImage, imageUploader} = props;

    return (
        <img
            ref={uploadedImage}
            id='profile-photo'
            src={profilePhoto}
            alt='profile-photo'
            onClick={() => imageUploader.current.click()}
        />      
    )
}

export default ProfilePhoto;