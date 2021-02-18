import React from 'react';
import TitleSeparator from '../styled-components/TitleSeparator';
import '../CVForm.css';

function LeftSidebar() {
    return (
        <div className='sidebar' id='left-sidebar'>
            <div className='section'>
                <h2>Contact</h2>
                <TitleSeparator/>
                <input className='contact' type='email' id='email' name='email' placeholder='example.candidate@gmail.com'></input>
                <input className='contact' type='text' id='phone' name='phone' placeholder='+36 20 123 45 67'></input>
                <input className='contact' type='url' id='linkedin' name='linkedin' placeholder='https://www.linkedin.com/in/ExampleCandidate'></input>
            </div>
            <div className="bottom-section">
                <div className='section' id='self-definition'>
                    <h2>Self Definition</h2>
                    <TitleSeparator/>
                    <textarea className='textarea' id='input-self-definition' name='input-self-definition'></textarea>
                </div>
                <div className='section' id='strength'>
                    <h2>Strenght</h2>
                    <TitleSeparator/>
                    <textarea className='textarea' id='input-strength' name='input-strength'></textarea>
                </div>
                <div className='section' id='mentor-opinion'>
                    <h2>Mentor Opinion</h2>
                    <TitleSeparator/>
                    <textarea className='textarea' id='input-mentor-opinion' name='input-mentor-opinion'></textarea>
                </div> 
            </div>
        </div>
    )
}

export default LeftSidebar;