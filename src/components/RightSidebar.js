import React from 'react';
import TitleSeparator from '../styled-components/TitleSeparator';
import '../CVForm.css';

function RightSidebar() {
    return (
        <div className='sidebar' id='right-sidebar'>
                <div className='section'>
                    <div className='align-right'>
                        <h2>Hard Skills</h2>
                        <TitleSeparator/>
                    </div>
                </div>
                <div className='bottom-section'>
                    <div className='section' id='recent-projects'>
                        <h2>Recent Projects</h2>
                        <TitleSeparator/>
                        <textarea className='textarea' id='project1' name='project1'></textarea>
                        <textarea className='textarea' id='project2' name='project2'></textarea>
                        <textarea className='textarea' id='project3' name='project3'></textarea>
                    </div>
                    <div className='section' id='work-experience'>
                        <h2>Work Experience</h2>
                        <TitleSeparator/>
                        <textarea className='textarea' id='workplace1' name='workplace1'></textarea>
                        <textarea className='textarea' id='workplace2' name='workplace2'></textarea>
                        <textarea className='textarea' id='workplace3' name='workplace3'></textarea>
                    </div>
                    <div className='section' id='educations'>
                        <h2>Educations</h2>
                        <TitleSeparator/>
                        <textarea className='textarea' id='education1' name='education1'></textarea>
                        <textarea className='textarea' id='education2' name='education2'></textarea>
                        <textarea className='textarea' id='education3' name='education3'></textarea>
                        <textarea className='textarea' id='education4' name='education4'></textarea>
                        <textarea className='textarea' id='education5' name='education5'></textarea>
                    </div>
                    <div className='section' id='spoken-languages'>
                        <h2>Spoken Languages</h2>
                        <TitleSeparator/>
                        <textarea className='textarea' id='language1' name='language1'></textarea>
                        <textarea className='textarea' id='language2' name='language2'></textarea>
                    </div>
                </div>
            </div>
    )
}

export default RightSidebar;
