import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import CreditCard from './CreditCard';
import '../styles/ResultDisplay.scss'

const ResultDisplay = ({form, template}) => {

    const [display, setDisplay] = useState('static');

    const switchDisplay = (e) => {
        setDisplay(e.target.name);
    }

    return(
        <div className='result-container'>
            {template === undefined && 
                <div> 
                    <h1>No template chosen</h1>
                    <Link to="/credit-card-form/">
                        <button className='btn-choose-template'>Choose Template</button>
                    </Link>
                </div>
            }
            {template && 
                <div>
                    <h1>Your Design</h1>
                    <div className="switch-display-buttons">
                        <button className={`btn-1 ${display === 'static' ?  'isactive' : ''}`} name='static' onClick={switchDisplay}>1</button>
                        <button className={`btn-2 ${display === 'rotate' ? 'isactive' : ''}`} name='rotate' onClick={switchDisplay}>2</button>
                    </div>  
                    <CreditCard form={form} template={template} isFinished={true} display={display}/>
                    <Link to='/credit-card-form/'>
                        <button className='btn-start-over'>Start over</button>
                    </Link>
                </div>
            }
        </div>
    );
}

export default ResultDisplay;