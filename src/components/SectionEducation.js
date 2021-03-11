import React, { useState, useEffect } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import TitleSeparator from '../styled-components/TitleSeparator';
import deleteIcon from '../images/trash-alt-regular.png'
import '../CVForm.css';

function SectionEducation(props) {
    const CVId = props.CVId;
    const saveInput = props.saveInput;
    const urlForPost = `http://localhost:8080/cv/${CVId}/update/qualifications`;

    const fetchedQualificationList = props.qualificationList.length > 0 ? props.qualificationList : [];
    const [qualificationList, updateQualificationList] = useState(fetchedQualificationList);
    const [qualificationCounter, setQualificationCounter] = useState(1);

    const emptyQualification = {
        id: `new${qualificationCounter}`,
        name: '',
        degree: '',
        yearFrom: '',
        yearTo: '',
        school: '',
        cityOfSchool: ''
    };

    useEffect(() => {
    }, [qualificationList]);


    const addNewQualification = () => {
        updateQualificationList(qualificationList => [...qualificationList, emptyQualification]);
        setQualificationCounter(qualificationCounter+1);
    }

    const deleteQualification = (e) => {
        const index = e.target.id.replace(/^\D+/, '');
        const items = Array.from(qualificationList);
        items.splice(index, 1);

        updateQualificationList(items);
    }

    const handleOnDragEnd = (result) => {
        if (!result.destination) return;
        const items = Array.from(qualificationList);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);
        
        updateQualificationList(items);
    }

    const prepareAndSave = (e) => {
        e.preventDefault();
        let objectToPost = [];
        const items = Array.from(qualificationList);
        
        items.map((item, index) => {
            objectToPost.push({
                name: document.getElementById(`qua-name${index}`).value,
                degree: document.getElementById(`qua-degree${index}`).value,
                yearFrom: parseInt(document.getElementById(`qua-year-from${index}`).value),
                yearTo: parseInt(document.getElementById(`qua-year-to${index}`).value),
                school: document.getElementById(`qua-school${index}`).value,
                cityOfSchool: document.getElementById(`qua-city-of-school${index}`).value,
            })
        })
        saveInput(urlForPost, objectToPost);
    }

    return (
        <div className='section'>
            <form onSubmit={prepareAndSave}>
                <div className="inline-button">
                    <h2 className='section-title'>Educations</h2>
                    {qualificationList.length < 5  &&
                        <button type='button' className='add-button' onClick={addNewQualification}>ADD</button>
                    }
                    <button className='submit-button' type='submit'>SUBMIT</button>
                </div>
                <TitleSeparator/>
                
                <DragDropContext onDragEnd={handleOnDragEnd}>
                    <Droppable droppableId='jobs'>
                        {(provided) => (
                            <ul className='jobs' {...provided.droppableProps} ref={provided.innerRef}>
                            {qualificationList.map(({id, name, degree, yearFrom, yearTo, school, cityOfSchool}, index) => {
                                return (
                                    <Draggable key={id} draggableId={id.toString()} index={index}>
                                        {(provided) => (
                                            <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                                <div className='dropable-card'>
                                                    <div className='card-top-right'>
                                                        <img className='delete-icon' id={`delete${index}`} src={deleteIcon} alt='delete' onClick={deleteQualification}/>
                                                    </div>
                                                    <div className='card-top'>
                                                        <input type='text' className='content-bold w70' id={`qua-name${index}`} placeholder='Enter name of qualification...' defaultValue={name} required></input>
                                                        <input type='text' className='content-bold w20' id={`qua-degree${index}`} placeholder='eg: Intermediate' defaultValue={degree} required></input>
                                                    </div>
                                                    <div className='card-middle'>
                                                        <input type='number' className='content-normal w10-centered' id={`qua-year-from${index}`} min='1990' max='2099' placeholder='eg: 1990' defaultValue={yearFrom} required></input>
                                                        <input type='number' className='content-normal w10-centered' id={`qua-year-to${index}`} min='1990' max='2099'placeholder='eg: 1992' defaultValue={yearTo} required></input>
                                                        <input type='text' className='content-normal w50' id={`qua-school${index}`} placeholder='Enter name of school you learned in...' defaultValue={school} required></input>
                                                        <input type='text' className='content-normal w20' id={`qua-city-of-school${index}`} placeholder='eg: Budapest' defaultValue={cityOfSchool} required></input>
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
    )
}

export default SectionEducation;
