import React from 'react';
import SectionContact from './SectionContact';
import SectionSingleData from './SectionSingleData';
import '../CVForm.css';

function LeftSidebar(props) {
    const id = props.fetchedCV.cvIdentifiers.id;
    const saveInput = props.saveInput;
    const persInf1 = props.fetchedCV.persInf1;
    const persInf2 = props.fetchedCV.persInf2;
    const persInf3 = props.fetchedCV.persInf3;

    return (
        <div className='sidebar' id='left-sidebar'>
            <SectionContact CVId={id} contact={props.fetchedCV.contact} saveInput={props.saveInput} />
            <div className="bottom-section">
                <SectionSingleData CVId={id} sectionId={1} personalInfo={persInf1} saveInput={saveInput} />
                <SectionSingleData CVId={id} sectionId={2} personalInfo={persInf2} saveInput={saveInput} />
                <SectionSingleData CVId={id} sectionId={3} personalInfo={persInf3} saveInput={saveInput} />
            </div>
        </div>
    )
}

export default LeftSidebar;