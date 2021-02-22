import React from 'react';
import '../ErrorMsg.css';

function ErrorMsg(props) {
    const {type, systemMsg, customMsg} = props;

    return (
        <div className='error-container'>
            <div id='error-msg-box'>
                <h3>{customMsg}</h3>
                <p>{type}: {systemMsg}</p>
            </div>
            
        </div>
    )
}

export default ErrorMsg;