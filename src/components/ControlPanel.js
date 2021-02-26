import React from 'react';
import '../CVForm.css';

function ControlPanel(props) {
    const {id, title, creationDate} = props.fetchedCV.cvIdentifiers;
    const {name, role} = props.fetchedCV.candidate !== null ? props.fetchedCV.candidate : '';
    const saveInput = props.saveInput;

    return (
        <div className='grid-box' id='control-panel'>
            <form id='control-panel-form' onSubmit={saveInput}>
                <div id='control-panel-left-box'>
                    <label htmlFor='cv-title' id='cv-title-label'>Title: </label>
                    <textarea className='textarea title' id='cv-title' name='cv-title' rows='1' max-rows='1' maxLength='25' defaultValue={title}></textarea>
                </div>
                <div id='control-panel-right-box'>
                    <label htmlFor='candidate-name' id='candidate-name-label'>Name: </label>
                    <textarea className='candidate' id='candidate-name' name='candidate-name' rows='1' max-rows='1' maxLength='25' defaultValue={name} placeholder='Enter your name here...' required></textarea>
                    <label htmlFor='candidate-role' id='candidate-role-label'>Role: </label>
                    <textarea className='candidate' id='candidate-role' name='candidate-role' rows='1' max-rows='1' maxLength='25' defaultValue={role} placeholder='Enter your role here...' required></textarea>
                    <button className='submit-button' type='submit'>SUBMIT</button>
                </div>
            </form>
        </div>
    )
}

export default ControlPanel;