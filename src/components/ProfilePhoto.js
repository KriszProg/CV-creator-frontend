import React from 'react';
import '../CVForm.css';

function ProfilePhoto(props) {
    const {uploadedImage, imageUploader} = props;
    const defaultProfilePhoto = 'https://res.cloudinary.com/kpimgstore/image/upload/v1614776155/defaultprofilephoto.png';
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