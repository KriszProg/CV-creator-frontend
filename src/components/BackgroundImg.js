import React from 'react';
import defaultBackground from '../images/Background_Default.jpg';
import '../CVForm.css';

function BackgroundImg(props) {
    const {uploadedImage, imageUploader} = props;

    return (
        <img
            ref={uploadedImage}
            id='background-img'
            src={defaultBackground}
            alt='background-img'
            onClick={() => imageUploader.current.click()}
        />   
    )
}

export default BackgroundImg;