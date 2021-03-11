import React, { useState, useEffect } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import SectionContact from './SectionContact';
import TitleSeparator from '../styled-components/TitleSeparator';
import deleteIcon from '../images/trash-alt-regular.png'
import '../CVForm.css';

function LeftSidebar(props) {
    const CVId = props.fetchedCV.cvIdentifiers.id;
    const saveInput = props.saveInput;
    const urlForPost = `http://localhost:8080/cv/${CVId}/update/personal-info`;

    const fetchedPersonalInfoList = props.fetchedCV.personalInfoList.length > 0 ? props.fetchedCV.personalInfoList : [];
    const [personalInfoList, updatePersonalInfoList] = useState(fetchedPersonalInfoList);
    const [personalInfoCounter, setPersonalInfoCounter] = useState(1);

    const emptyPersonalInfo = {
        id: `new${personalInfoCounter}`,
        sectionTitle: '',
        text: ''
    };

    useEffect(() => {
    }, [personalInfoList]);

    const addNewPersonalInfo = () => {
        updatePersonalInfoList(personalInfoList => [...personalInfoList, emptyPersonalInfo]);
        setPersonalInfoCounter(personalInfoCounter+1);
    }

    const deletePersonalInfo = (e) => {
        const index = e.target.id.replace(/^\D+/, '');
        const items = Array.from(personalInfoList);
        items.splice(index, 1);

        updatePersonalInfoList(items);
    }

    const handleOnDragEnd = (result) => {
        if (!result.destination) return;
        const items = Array.from(personalInfoList);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);
        
        updatePersonalInfoList(items);
    }

    const prepareAndSave = (e) => {
        e.preventDefault();
        let objectToPost = [];
        const items = Array.from(personalInfoList);
        
        items.map((item, index) => {
            objectToPost.push({
                sectionTitle: document.getElementById(`pi-section-title${index}`).value,
                text: document.getElementById(`pi-text${index}`).value,
            })
        })
        saveInput(urlForPost, objectToPost);
    }

    return (
        <div className='sidebar' id='left-sidebar'>
            <SectionContact CVId={CVId} contact={props.fetchedCV.contact} saveInput={props.saveInput} />
            <div className="bottom-section">
                <div className='section'>
                    <form onSubmit={prepareAndSave}>
                        <div className='personal-info-controller'>
                            <h2 className='panel-title'>Personal Info:</h2>
                            {personalInfoList.length < 3  &&
                                <button type='button' className='add-button' onClick={addNewPersonalInfo}>ADD</button>
                            }
                            <button className='submit-button' type='submit'>SUBMIT</button>
                        </div>
                        
                        <DragDropContext onDragEnd={handleOnDragEnd}>
                            <Droppable droppableId='personal-info'>
                                {(provided) => (
                                    <ul className='personal-info' {...provided.droppableProps} ref={provided.innerRef}>
                                    {personalInfoList.map(({id, sectionTitle, text}, index) => {
                                        return (
                                            <Draggable key={id} draggableId={id.toString()} index={index}>
                                                {(provided) => (
                                                    <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                                        <div className='dropable-section-card'>
                                                            <div className='card-top-right'>
                                                                <img className='delete-icon' id={`delete${index}`} src={deleteIcon} alt='delete' onClick={deletePersonalInfo}/>
                                                            </div>
                                                            <div className='section-card-top'>
                                                                <input className='editable-title' type='text' id={`pi-section-title${index}`} placeholder={`Section Title...`} defaultValue={sectionTitle} required></input>
                                                                <TitleSeparator/>
                                                            </div>
                                                            <div className='section-card-middle'>
                                                                <textarea className='textarea input-field' id={`pi-text${index}`} rows='12' maxLength='780' defaultValue={text} required></textarea>
                                                            </div>
                                                        </div>
                                                    </li>
                                                )}
                                            </Draggable>
                                        );
                                    })}
                                    {provided.placeholder}
                                    </ul>
                                )}
                            </Droppable>
                        </DragDropContext>            
                    </form>
                </div>
            
            
            </div>
        </div>
    )
}

export default LeftSidebar;