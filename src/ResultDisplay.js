import React from 'react';
import CreditCard from './CreditCard';
import './ResultDisplay.css';
const ResultDisplay = ({form, template}) => {

    return(
        <div className='result-wrapper'>
            <h1>The result</h1>
            <div className='card-wrapper'>
                <CreditCard form={form} template={template}/>
            </div>
        </div>
    );
}

export default ResultDisplay;