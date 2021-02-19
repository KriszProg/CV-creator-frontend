import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

function CVTableLine(props) {
    const {id, title, creationDate} = props;
    const [openToEdit, setOpenToEdit] = useState(false);
    const [idForOpen, setIdForOpen] = useState(0);
    
    const loadCV = e => {
        setIdForOpen(e.target.parentNode.id);
        setOpenToEdit(true);
    }

    if(openToEdit) {
        return <Redirect to={`/cv/edit/${idForOpen}`}/>
    }
    
    return (
        <tr className='clickable' id={id} onClick={loadCV}>
           <td>{title}</td> 
           <td>{creationDate}</td> 
        </tr>
    )
}

export default CVTableLine;
