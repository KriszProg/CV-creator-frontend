import React from 'react';
import TitleSeparator from '../styled-components/TitleSeparator';
import SectionProjects from './SectionProjects';
import SectionWorkExperience from './SectionWorkExperience';
import '../CVForm.css';

function RightSidebar(props) {
    const id = props.fetchedCV.cvIdentifiers.id;
    const saveInput = props.saveInput;
    const projectList = props.fetchedCV !== null ? props.fetchedCV.projectList : [];
    const jobList = props.fetchedCV !== null ? props.fetchedCV.jobList : [];

    return (
        <div className='sidebar' id='right-sidebar'>
                <div className='section'>
                    <div className='align-right'>
                        <h2>Hard Skills</h2>
                        <TitleSeparator/>
                    </div>
                </div>
                <div className='bottom-section'>
                    <SectionProjects CVId={id} projectList={projectList} saveInput={props.saveInput}/>
                    <SectionWorkExperience CVId={id} jobList={jobList} saveInput={props.saveInput}/>
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
