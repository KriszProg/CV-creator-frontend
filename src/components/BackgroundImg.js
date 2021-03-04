import React from 'react';
import '../CVForm.css';

function BackgroundImg(props) {
    const {uploadedImage, imageUploader} = props;
    const defaultBackground = 'https://res.cloudinary.com/kpimgstore/image/upload/v1614779470/defaultbackground.jpg';
    const url = props.background !== null ? props.background.url : defaultBackground;

    return (
        <img
            ref={uploadedImage}
            id='background-img'
            src={url}
            alt='background-img'
            onClick={() => imageUploader.current.click()}
        />   
    )
}

export default BackgroundImg;