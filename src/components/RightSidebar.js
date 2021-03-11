import React from 'react';
import TitleSeparator from '../styled-components/TitleSeparator';
import SectionProjects from './SectionProjects';
import SectionWorkExperience from './SectionWorkExperience';
import SectionEducation from './SectionEducation';
import SectionLanguage from './SectionLanguage';
import '../CVForm.css';

function RightSidebar(props) {
    const id = props.fetchedCV.cvIdentifiers.id;
    const saveInput = props.saveInput;
    const projectList = props.fetchedCV !== null ? props.fetchedCV.projectList : [];
    const jobList = props.fetchedCV !== null ? props.fetchedCV.jobList : [];
    const qualificationList = props.fetchedCV !== null ? props.fetchedCV.qualificationList : [];
    const languageList = props.fetchedCV !== null ? props.fetchedCV.languageList : [];

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
                    <SectionEducation CVId={id} qualificationList={qualificationList} saveInput={props.saveInput}/>
                    <SectionLanguage CVId={id} languageList={languageList} saveInput={props.saveInput}/>
                </div>
            </div>
    )
}

export default RightSidebar;
