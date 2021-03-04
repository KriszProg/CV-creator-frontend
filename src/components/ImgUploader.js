import React, { useRef } from 'react';
import axios from 'axios';
import ProfilePhoto from './ProfilePhoto';
import BackgroundImg from './BackgroundImg';
import '../CVForm.css';

function ImgUploader(props) {
    const id = props.fetchedCV.cvIdentifiers.id;
    const saveInput = props.saveInput;
    const {element} = props;
    const background = props.fetchedCV.background !== null ? props.fetchedCV.background : null;
    const profilePhoto = props.fetchedCV.profilePhoto !== null ? props.fetchedCV.profilePhoto : null;

    const urlForUpload ='https://api.cloudinary.com/v1_1/kpimgstore/upload';
    const urlForSave = `http://localhost:8080/cv/${id}/update/image`;
    
    const uploadedImage = useRef(null);
    const imageUploader = useRef(null);

    const handleImageUpload = e => {
        const [file] = e.target.files;

        if (file) {
            const {current} = uploadedImage;

            const formData = new FormData();
            formData.append('file', file);
            formData.append('upload_preset', 'cv_creator');
            
            axios.post(
                urlForUpload, 
                formData
            ).then((res) => {
                current.src = res.data.secure_url;
                prepareAndSave(current);
            });   
        }
    };

    const prepareAndSave = (current) => {
        let imageType = '';
        switch (current.id) {
            case 'profile-photo':
                imageType = 'PROFILE_PHOTO';
                break;
            case 'background-img':
                imageType ='BACKGROUND';
                break;
        }
        const objectToPost = {
            imageType: imageType,
            url: current.src
        };
        saveInput(urlForSave, objectToPost);
    };

    return (
        <div className='content'>
            <input
                className='hidden-element'
                type='file' 
                accept='.jpg, .png' 
                multiple={false} 
                onChange={handleImageUpload}
                ref={imageUploader}
            />
            {element === 'profile-photo' &&
                <ProfilePhoto uploadedImage={uploadedImage} imageUploader={imageUploader} profilePhoto={profilePhoto}/>
            }
            {element == 'background-img' &&
                <BackgroundImg uploadedImage={uploadedImage} imageUploader={imageUploader} background={background}/>
            }
        </div>
    )
}

export default ImgUploader;
