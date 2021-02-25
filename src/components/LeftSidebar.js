import React, { useEffect } from 'react';
import TitleSeparator from '../styled-components/TitleSeparator';
import InputSectionSimple from './InputSectionSimple';
import '../CVForm.css';

function LeftSidebar(props) {
    const id = props.fetchedCV.cvIdentifiers.id;
    const {email, phoneNr, linkedInProfile} = props.fetchedCV.contact !== null ? props.fetchedCV.contact : '';
    const {selfDefinition} = props.fetchedCV.selfDefinition !== null ? props.fetchedCV.selfDefinition : '';
    const {strength} = props.fetchedCV.strength !== null ? props.fetchedCV.strength : '';
    const {mentorOpinion} = props.fetchedCV.mentorOpinion !== null ? props.fetchedCV.mentorOpinion : '';

    return (
        <div className='sidebar' id='left-sidebar'>
            <div className='section'>
                <h2>Contact</h2>
                <TitleSeparator/>
                <input className='contact' type='email' id='email' name='email' placeholder='example.candidate@gmail.com' defaultValue={email}></input>
                <input className='contact' type='text' id='phone' name='phone' placeholder='+36 20 123 45 67' defaultValue={phoneNr}></input>
                <input className='contact' type='url' id='linkedin' name='linkedin' placeholder='https://www.linkedin.com/in/ExampleCandidate' defaultValue={linkedInProfile}></input>
            </div>
            <div className="bottom-section">
                <InputSectionSimple CVId={id} sectionTitle='Self Definition' object={selfDefinition} />
                <InputSectionSimple CVId={id} sectionTitle='Strength' object={strength} />
                <InputSectionSimple CVId={id} sectionTitle='Mentor Opinion' object={mentorOpinion} />
            </div>
        </div>
    )
}

export default LeftSidebar;