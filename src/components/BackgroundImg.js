import React from 'react';
import defaultBackground from '../images/Background_Default.jpg';
import '../CVForm.css';

function BackgroundImg(props) {
    const {uploadedImage, imageUploader} = props;
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