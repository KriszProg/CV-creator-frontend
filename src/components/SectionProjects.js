import React, { useState, useEffect } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import TitleSeparator from '../styled-components/TitleSeparator';
import deleteIcon from '../images/trash-alt-regular.png'
import '../CVForm.css';

function SectionProjects(props) {
    const CVId = props.CVId;
    const saveInput = props.saveInput;
    const urlForPost = `http://localhost:8080/cv/${CVId}/update/projects`;

    const fetchedProjectList2 = props.projectList.length > 0 ? props.projectList : [];
    const [projectList, updateProjectList] = useState(fetchedProjectList2);
    const [projectCounter, setProjectCounter] = useState(1);

    const emptyProject = {
        id: `new${projectCounter}`,
        title: '',
        url1: '',
        url2: '',
        description: ''
    };

    useEffect(() => {
    }, [projectList]);


    const addNewProject = () => {
        updateProjectList(projectList => [...projectList, emptyProject]);
        setProjectCounter(projectCounter+1);
    }

    const deleteProject = (e) => {
        const index = e.target.id.replace(/^\D+/, '');
        const items = Array.from(projectList);
        items.splice(index, 1);

        updateProjectList(items);
    }

    const handleOnDragEnd = (result) => {
        if (!result.destination) return;
        const items = Array.from(projectList);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);
        
        updateProjectList(items);
    }

    const prepareAndSave = (e) => {
        e.preventDefault();
        console.log('prepareAndSave function starts execute...');
        let objectToPost = [];
        const items = Array.from(projectList);
        
        items.map((item, index) => {
            objectToPost.push({
                title: document.getElementById(`project-title${index}`).value,
                url1: document.getElementById(`project-url1${index}`).value,
                url2: document.getElementById(`project-url2${index}`).value,
                description: document.getElementById(`project-description${index}`).value,
            })
        })
        
        saveInput(urlForPost, objectToPost);
    }

    return (
        <div className='section' id='recent-projects'>
            <form onSubmit={prepareAndSave}>
                <div className="inline-button">
                    <input className='editable-title' type='text' id='title-recent-projects' name='cv-title' placeholder={'placeHolder'} defaultValue="Recent Projects" required></input>
                    {projectList.length < 3  &&
                        <button type='button' className='add-button' onClick={addNewProject}>ADD</button>
                    }
                    <button className='submit-button' type='submit'>SUBMIT</button>
                </div>
                <TitleSeparator/>
                
                <DragDropContext onDragEnd={handleOnDragEnd}>
                    <Droppable droppableId='projects'>
                        {(provided) => (
                            <ul className='projects' {...provided.droppableProps} ref={provided.innerRef}>
                            {projectList.map(({id, title, url1, url2, description}, index) => {
                                return (
                                    <Draggable key={id} draggableId={id.toString()} index={index}>
                                        {(provided) => (
                                            <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                                <div className='dropable-card'>
                                                    <div className='card-top'>
                                                        <input type='text' className='project-title' id={`project-title${index}`} name={`project-title${index}`} placeholder='Enter your project name...' defaultValue={title} required></input>
                                                    </div>
                                                    <div className='card-top-right'>
                                                        <img className='delete-icon' id={`delete${index}`} src={deleteIcon} alt='delete' onClick={deleteProject}/>
                                                    </div>
                                                    <div className='card-middle'>
                                                        <input type='url' className='project-url'  id={`project-url1${index}`} name={`project-url1${index}`} placeholder='e.g.: https://github.com/UserName/Project-name' defaultValue={url1}></input>
                                                        <input type='url' className='project-url'  id={`project-url2${index}`} name={`project-url2${index}`} placeholder='e.g.: https://github.com/UserName/Project-name' defaultValue={url2}></input>
                                                    </div>
                                                    <div className='card-bottom'>
                                                        <textarea className='textarea input-field' id={`project-description${index}`} name={`project-description${index}`} rows='3' placeholder='Enter short description of your project...' defaultValue={description} required></textarea>
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

export default SectionProjects;
