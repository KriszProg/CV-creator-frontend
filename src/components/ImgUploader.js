import React, { useRef } from 'react';
import ProfilePhoto from './ProfilePhoto';
import BackgroundImg from './BackgroundImg';
import '../CVForm.css';

function ImgUploader(props) {
    const {element} = props;
    
    const uploadedImage = useRef(null);
    const imageUploader = useRef(null);

    const handleImageUpload = e => {
        const [file] = e.target.files;
        if (file) {
            const reader = new FileReader();
            const {current} = uploadedImage;
            current.file = file;
            reader.onload = (e) => {
                current.src = e.target.result;
            }
            reader.readAsDataURL(file);
        }
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
                <ProfilePhoto uploadedImage={uploadedImage} imageUploader={imageUploader}/>
            }
            {element == 'background-img' &&
                <BackgroundImg uploadedImage={uploadedImage} imageUploader={imageUploader}/>
            }
        </div>
    )
}

export default ImgUploader;
