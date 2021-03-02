import React from 'react';
import SectionContact from './SectionContact';
import SectionSingleData from './SectionSingleData';
import '../CVForm.css';

function LeftSidebar(props) {
    const id = props.fetchedCV.cvIdentifiers.id;
    const saveInput = props.saveInput;
    const {selfDefinition} = props.fetchedCV.selfDefinition !== null ? props.fetchedCV.selfDefinition : '';
    const {strength} = props.fetchedCV.strength !== null ? props.fetchedCV.strength : '';
    const {mentorOpinion} = props.fetchedCV.mentorOpinion !== null ? props.fetchedCV.mentorOpinion : '';

    return (
        <div className='sidebar' id='left-sidebar'>
            <SectionContact CVId={id} contact={props.fetchedCV.contact} saveInput={props.saveInput} />
            <div className="bottom-section">
                <SectionSingleData CVId={id} sectionTitle='Self Definition' object={selfDefinition} saveInput={saveInput} />
                <SectionSingleData CVId={id} sectionTitle='Strength' object={strength} saveInput={saveInput} />
                <SectionSingleData CVId={id} sectionTitle='Mentor Opinion' object={mentorOpinion} saveInput={saveInput} />
            </div>
        </div>
    )
}

export default LeftSidebar;