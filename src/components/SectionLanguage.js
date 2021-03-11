import React, { useState, useEffect } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import TitleSeparator from '../styled-components/TitleSeparator';
import deleteIcon from '../images/trash-alt-regular.png'
import '../CVForm.css';

function SectionLanguage(props) {
    const CVId = props.CVId;
    const saveInput = props.saveInput;
    const urlForPost = `http://localhost:8080/cv/${CVId}/update/languages`;

    const fetchedLanguageList = props.languageList.length > 0 ? props.languageList : [];
    const [languageList, updateLanguageList] = useState(fetchedLanguageList);
    const [languageCounter, setLanguageCounter] = useState(1);

    const emptyLanguage = {
        id: `new${languageCounter}`,
        language: '',
        level: ''
    };

    useEffect(() => {
    }, [languageList]);


    const addNewLanguage = () => {
        updateLanguageList(languageList => [...languageList, emptyLanguage]);
        setLanguageCounter(languageCounter+1);
    }

    const deleteLanguage = (e) => {
        const index = e.target.id.replace(/^\D+/, '');
        const items = Array.from(languageList);
        items.splice(index, 1);

        updateLanguageList(items);
    }

    const handleOnDragEnd = (result) => {
        if (!result.destination) return;
        const items = Array.from(languageList);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);
        
        updateLanguageList(items);
    }

    const prepareAndSave = (e) => {
        e.preventDefault();
        console.log('prepareAndSave function starts execute...');
        let objectToPost = [];
        const items = Array.from(languageList);
        
        items.map((item, index) => {
            objectToPost.push({
                language: document.getElementById(`lang-language${index}`).value,
                level: document.getElementById(`lang-level${index}`).value,
            })
        })
        saveInput(urlForPost, objectToPost);
    }

    return (
        <div className='section' id='spoken-languages'>
            <form onSubmit={prepareAndSave}>
                <div className="inline-button">
                    <input className='editable-title' type='text' id='title-languages' name='cv-title' placeholder={'placeHolder'} defaultValue="Spoken Languages" required></input>
                    {languageList.length < 2  &&
                        <button type='button' className='add-button' onClick={addNewLanguage}>ADD</button>
                    }
                    <button className='submit-button' type='submit'>SUBMIT</button>
                </div>
                <TitleSeparator/>
                
                <DragDropContext onDragEnd={handleOnDragEnd}>
                    <Droppable droppableId='languages'>
                        {(provided) => (
                            <ul className='languages' {...provided.droppableProps} ref={provided.innerRef}>
                            {languageList.map(({id, language, level}, index) => {
                                return (
                                    <Draggable key={id} draggableId={id.toString()} index={index}>
                                        {(provided) => (
                                            <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                                <div className='dropable-card'>
                                                    <div className='card-top-right'>
                                                        <img className='delete-icon' id={`delete${index}`} src={deleteIcon} alt='delete' onClick={deleteLanguage}/>
                                                    </div>
                                                    <div className='card-top'>
                                                        <input type='text' className='content-bold w20' id={`lang-language${index}`} name={`lang-language${index}`} placeholder='eg: English' defaultValue={language} required></input>
                                                        <input type='text' className='content-normal w20' id={`lang-level${index}`} name={`lang-level${index}`} placeholder='eg: Intermediate' defaultValue={level} required></input>
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

export default SectionLanguage;
