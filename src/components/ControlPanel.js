import React from 'react';
import PDFGenerator from './PDFGenerator';
import '../CVForm.css';

function ControlPanel(props) {
    const saveInput = props.saveInput;
    const {id, title, creationDate} = props.fetchedCV.cvIdentifiers;
    const {name, role} = props.fetchedCV.candidate !== null ? props.fetchedCV.candidate : '';
    
    const urlForPost = `http://localhost:8080/cv/${id}/update/title-and-candidate`;

    const prepareAndSave = (e) => {
        e.preventDefault();
        let titleValue = document.getElementById('cv-title').value;
        let nameValue = document.getElementById('candidate-name').value;
        let roleValue = document.getElementById('candidate-role').value;
        const objectToPost = {
            title: titleValue,
            candidate: {
            name: nameValue,
            role: roleValue,
            },
        };
        saveInput(urlForPost, objectToPost);
    }

    return (
        <div className='grid-box' id='control-panel'>
            <form id='control-panel-form' onSubmit={prepareAndSave}>
                <div id='control-panel-left-box'>
                    <label htmlFor='cv-title' id='cv-title-label'>Title: </label>
                    <input className='editable-title cv-title' id='cv-title' name='cv-title' defaultValue={title}></input>
                </div>
                <div id='control-panel-right-box'>
                    <label htmlFor='candidate-name' id='candidate-name-label'>Name: </label>
                    <textarea className='candidate' id='candidate-name' name='candidate-name' rows='1' max-rows='1' maxLength='25' defaultValue={name} placeholder='Enter your name here...' required></textarea>
                    <label htmlFor='candidate-role' id='candidate-role-label'>Role: </label>
                    <textarea className='candidate' id='candidate-role' name='candidate-role' rows='1' max-rows='1' maxLength='25' defaultValue={role} placeholder='Enter your role here...' required></textarea>
                    <button className='submit-button' type='submit'>SUBMIT</button>
                    <PDFGenerator fetchedCV={props.fetchedCV}/>
                </div>
            </form>
        </div>
    )
}

export default ControlPanel;