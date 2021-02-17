import React from 'react';
import CVHeader from './CVHeader';
import LeftSidebar from './LeftSidebar';
import RightSidebar from './RightSidebar';
import '../CVForm.css';

function CVForm() {
    return (
        <div className='cv-container'>
            <CVHeader/>
            <LeftSidebar/>
            <RightSidebar/>
            <footer>Footer</footer>
        </div>
    )
}

export default CVForm;