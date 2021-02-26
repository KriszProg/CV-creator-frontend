import React, { useEffect } from 'react';
import InputSectionSimple from './InputSectionSimple';
import '../CVForm.css';
import SectionContact from './SectionContact';

function LeftSidebar(props) {
    const id = props.fetchedCV.cvIdentifiers.id;
    // const {email, phoneNr, linkedInProfile} = props.fetchedCV.contact !== null ? props.fetchedCV.contact : '';
    const {selfDefinition} = props.fetchedCV.selfDefinition !== null ? props.fetchedCV.selfDefinition : '';
    const {strength} = props.fetchedCV.strength !== null ? props.fetchedCV.strength : '';
    const {mentorOpinion} = props.fetchedCV.mentorOpinion !== null ? props.fetchedCV.mentorOpinion : '';

    return (
        <div className='sidebar' id='left-sidebar'>
            <SectionContact CVId={id} contact={props.fetchedCV.contact}/>
            <div className="bottom-section">
                <InputSectionSimple CVId={id} sectionTitle='Self Definition' object={selfDefinition} />
                <InputSectionSimple CVId={id} sectionTitle='Strength' object={strength} />
                <InputSectionSimple CVId={id} sectionTitle='Mentor Opinion' object={mentorOpinion} />
            </div>
        </div>
    )
}

export default LeftSidebar;