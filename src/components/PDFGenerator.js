import React, { useState, useEffect } from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { PDFDocument} from './PDFDocument';

export default function PDFGenerator(props) {
    const name = props.fetchedCV.candidate !== null ? props.fetchedCV.candidate.name.replace(/ /g, '_') : 'Firstname_LastName';
    
    const getCurrentDateTime = () => {
        let currentDate = new Date();
        
        return '' + currentDate.getFullYear() + 
            '-' + ((currentDate.getMonth()+1) < 10 ? '0' : '') + (currentDate.getMonth()+1) +
            '-' + (currentDate.getDate() < 10 ? '0' : '') + currentDate.getDate() + 
            '_' + (currentDate.getHours() < 10 ? '0' : '') + currentDate.getHours() + 
            '' + (currentDate.getMinutes() < 10 ? '0' : '') + currentDate.getMinutes() +
            '' + (currentDate.getSeconds() < 10 ? '0' : '') + currentDate.getSeconds();
    };

    const pdfButton = {
        textDecoration: 'none',
        color: 'white',
        backgroundColor: '#E73C2F',
        border: "3px solid white",
        borderRadius:'5px',
        fontSize: '15px',
        fontWeight: 'bold',
        padding: '5px'
    };

    return (
        <PDFDownloadLink
            document={<PDFDocument fetchedCV={props.fetchedCV}/>} 
            fileName={`CV_${name}_${getCurrentDateTime()}.pdf`}
            style={pdfButton}
        >
            {/* {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download now!')} */}
            PDF
        </PDFDownloadLink>
    )
}
