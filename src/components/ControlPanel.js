import React from 'react';
import '../CVForm.css';

function ControlPanel(props) {
    const {id, title, creationDate} = props.cvIdentifiers; 

    return (
        <div className='grid-box' id='control-panel'>
            <div id='title-controller-box'>
                <label htmlFor='cv-title' id='cv-title-label'>Title: </label>
                <textarea className='textarea title' id='cv-title' name='cv-title' rows='1' max-rows='1' maxLength='18' defaultValue={title}></textarea>
            </div>
        </div>
    )
}

export default ControlPanel;