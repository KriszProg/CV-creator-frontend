import React, { useState, useEffect } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import TitleSeparator from '../styled-components/TitleSeparator';
import deleteIcon from '../images/trash-alt-regular.png'
import '../CVForm.css';

function SectionWorkExperience(props) {
    const CVId = props.CVId;
    const saveInput = props.saveInput;
    const urlForPost = `http://localhost:8080/cv/${CVId}/update/jobs`;

    const fetchedJobList = props.jobList.length > 0 ? props.jobList : [];
    const [jobList, updateJobList] = useState(fetchedJobList);
    const [jobCounter, setJobCounter] = useState(1);

    const emptyJob = {
        id: `new${jobCounter}`,
        role: '',
        yearFrom: '',
        yearTo: '',
        company: ''
    };

    useEffect(() => {
    }, [jobList]);


    const addNewJob = () => {
        updateJobList(jobList => [...jobList, emptyJob]);
        setJobCounter(jobCounter+1);
    }

    const deleteJob = (e) => {
        const index = e.target.id.replace(/^\D+/, '');
        const items = Array.from(jobList);
        items.splice(index, 1);

        updateJobList(items);
    }

    const handleOnDragEnd = (result) => {
        if (!result.destination) return;
        const items = Array.from(jobList);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);
        
        updateJobList(items);
    }

    const prepareAndSave = (e) => {
        e.preventDefault();
        console.log('prepareAndSave function starts execute...');
        let objectToPost = [];
        const items = Array.from(jobList);
        
        items.map((item, index) => {
            objectToPost.push({
                role: document.getElementById(`job-role${index}`).value,
                yearFrom: parseInt(document.getElementById(`job-year-from${index}`).value),
                yearTo: parseInt(document.getElementById(`job-year-to${index}`).value),
                company: document.getElementById(`job-company${index}`).value,
            })
        })
        console.log('objectToPost from WorkExperience: ', objectToPost);
        saveInput(urlForPost, objectToPost);
    }

    return (
        <div className='section' id='work-experience'>
            <form onSubmit={prepareAndSave}>
                <div className="inline-button">
                    <input className='editable-title' type='text' id='title-work-experience' name='cv-title' placeholder={'placeHolder'} defaultValue="Work Experience" required></input>
                    {jobList.length < 3  &&
                        <button type='button' className='add-button' onClick={addNewJob}>ADD</button>
                    }
                    <button className='submit-button' type='submit'>SUBMIT</button>
                </div>
                <TitleSeparator/>
                
                <DragDropContext onDragEnd={handleOnDragEnd}>
                    <Droppable droppableId='jobs'>
                        {(provided) => (
                            <ul className='jobs' {...provided.droppableProps} ref={provided.innerRef}>
                            {jobList.map(({id, role, yearFrom, yearTo, company}, index) => {
                                return (
                                    <Draggable key={id} draggableId={id.toString()} index={index}>
                                        {(provided) => (
                                            <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                                <div className='dropable-card'>
                                                    <div className='card-top-right'>
                                                        <img className='delete-icon' id={`delete${index}`} src={deleteIcon} alt='delete' onClick={deleteJob}/>
                                                    </div>
                                                    <div className='card-top'>
                                                        <input type='text' className='job-role' id={`job-role${index}`} name={`job-role${index}`} placeholder='Enter name of job role...' defaultValue={role} required></input>
                                                    </div>
                                                    <div className='card-middle'>
                                                        <input type='number' className='year' id={`job-year-from${index}`} name={`job-name-from${index}`} min='1990' max='2099' placeholder='e.g.: 1990' defaultValue={yearFrom} required></input>
                                                        <input type='number' className='year' id={`job-year-to${index}`} name={`job-name-to${index}`} min='1990' max='2099'placeholder='e.g.: 1992' defaultValue={yearTo} required></input>
                                                        <input type='text' className='company' id={`job-company${index}`} name={`job-company${index}`} placeholder='Enter name of company you worked for...' defaultValue={company} required></input>
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

export default SectionWorkExperience;
