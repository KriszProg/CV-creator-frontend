import React, { useState, useEffect }from 'react';
import TitleSeparator from '../styled-components/TitleSeparator';
import '../CVForm.css';

function SectionSingleData(props) {
    const CVId = props.CVId;
    const saveInput = props.saveInput;

    const sectionId = props.sectionId;
    const sectionTitleFieldId = `section-title${sectionId}`;
    const placeHolder = `Section #${sectionId}`;
    const personalInfoType = `PERS_INF_${sectionId}`;
    const inputFieldId = `personal-info${sectionId}`;
    
    const sectionTitle = props.personalInfo !== null ? props.personalInfo.sectionTitle : '';
    const text = props.personalInfo !== null ? props.personalInfo.text : '';

    const urlForPost = `http://localhost:8080/cv/${CVId}/update/personal-info`;

    const prepareAndSave = (e) => {
        e.preventDefault();
        let sectionTitleValue = document.getElementById(sectionTitleFieldId).value;
        let inputValue = document.getElementById(inputFieldId).value;
        
        const objectToPost = {
            personalInfoType: personalInfoType,
            sectionTitle: sectionTitleValue,
            text: inputValue
        };
        
        saveInput(urlForPost, objectToPost);
    }

    return (
        <div className='section'> 
            <form onSubmit={prepareAndSave}>
            <div className="inline-button">
                <input className='editable-title' type='text' id={sectionTitleFieldId} name='cv-title' placeholder={placeHolder} defaultValue={sectionTitle} required></input>
                <button className='submit-button' type='submit'>SUBMIT</button>
            </div>
                <TitleSeparator/>
                <textarea className='textarea input-field' id={inputFieldId} name='input-field' rows='12' maxLength='780' defaultValue={text} required></textarea>
            </form>
        </div>
    )
}

export default SectionSingleData;
