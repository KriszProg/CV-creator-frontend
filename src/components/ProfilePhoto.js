import React from 'react';
import defaultProfilePhoto from '../images/user.png';
import '../CVForm.css';

function ProfilePhoto(props) {
    const {uploadedImage, imageUploader} = props;
    const url = props.profilePhoto !== null ? props.profilePhoto.url : defaultProfilePhoto;

    return (
        <img
            ref={uploadedImage}
            id='profile-photo'
            src={url}
            alt='profile-photo'
            onClick={() => imageUploader.current.click()}
        />      
    )
}

export default ProfilePhoto;