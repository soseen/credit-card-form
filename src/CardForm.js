import React, { useRef, useState, useEffect } from 'react'
import './CreditCard.css';
import './CardForm.css'
import { Link } from 'react-router-dom';
import mastercardLogo from './icons/mastercard.png'
import chip from './icons/chip.png'

const CardForm = ({chosenTemplate}) => {

    const [value1, setValue1] = useState('');
    const [value2, setValue2] = useState('');
    const [value3, setValue3] = useState('');
    const [value4, setValue4] = useState('');
    const [name, setName] = useState('');
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');

    const [currentInputValue, setCurrentInputValue] = useState('');

    const input1 = useRef();
    const input2 = useRef();
    const input3 = useRef();
    const input4 = useRef();
    const cardHolder = useRef();
    const cardMonth = useRef();
    const cardYear = useRef();

    const inputs = [input1, input2, input3, input4, cardHolder, cardMonth, cardYear];

    const [refIndex, setRefIndex] = useState(0);
    const [currentRef, setCurrentRef] = useState(inputs[0]);

    useEffect(() => {
        console.log(currentInputValue)
        console.log(currentInputValue.length);
        if(currentInputValue.length === currentRef.current.maxLength && refIndex < 4){
            inputs[refIndex + 1].current.focus();
        } else {
            setCurrentInputValue('');
        }

    }, [currentInputValue, currentRef, inputs, refIndex])

    const handleInput = (e, index) => {
        setRefIndex(index);
        setCurrentRef(inputs[index]);

        if(index === 0){
            setValue1(e.target.value);
            setCurrentInputValue(e.target.value)
        } else if(index === 1) {
            setValue2(e.target.value);
            setCurrentInputValue(e.target.value)
        } else if(index === 2) {
            setValue3(e.target.value);
            setCurrentInputValue(e.target.value)
        } else if(index === 3) {
            setValue4(e.target.value);
            setCurrentInputValue(e.target.value)
        } else if(index === 4) {
            setName(e.target.value);
            setCurrentInputValue(e.target.value)
        } else if(index === 5) {
            setMonth(e.target.value);
        } else if(index === 6) {
            setYear(e.target.value);
        }   
    }
    
    return(
        <div className='form-container'>
            {chosenTemplate === null && 
                <div> 
                    <h2>No template chosen</h2>
                    <Link to="/credit-card-form/">
                        <button className='btn-choose-template'>Choose Template</button>
                    </Link>
                </div>
            }
            {chosenTemplate &&
                <div>   
                        <Link to="/credit-card-form/">
                        <button className='btn-return'><i className="fa fa-undo"></i></button>
                        </Link>
                        <h1>Insert details</h1>
                        <div className='card'style={{
                            backgroundImage: chosenTemplate.background,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'
                            }}>
                            <div className="card-details-wrapper">
                                    <img src={chip} className='card-chip' alt='chip'></img>
                                    <img src={mastercardLogo} className='card-logo' alt='mastercard'></img>
                                    <div className='card-number'>{value1}{' '}{value2}{' '}{value3}{' '}{value4}</div>
                                <div className='details-row'>
                                    <div className='details-column'>
                                        <div className='details-card-holder'>Card Holder</div>
                                        <div className='card-holder'>{name}</div>
                                    </div>
                                    <div className='details-column'>
                                        <div className='details-card-expires'>Expires</div>
                                        <div className='card-expires'>{month}{'/'}{year}</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                <div className='credit-card-form'>
                    <div className='inputs-wrapper'>
                        <div className='input-row'>
                            <div className='input-column'>
                                <label className='card-input-label'>Card Number</label>
                                <div className='input-row'>
                                    <div className='input-column'>
                                        <input type='text' className='cardNumber' name='input1' maxLength={4} ref={input1} onChange={e => handleInput(e, 0)} value={value1}></input>
                                    </div>
                                    <div className='input-column'>
                                        <input type='text' className='cardNumber' name='input2' maxLength={4} ref={input2} onChange={e => handleInput(e, 1)} value={value2}></input>
                                    </div>
                                    <div className='input-column'>
                                        <input type='text' className='cardNumber' name='input3' maxLength={4} ref={input3} onChange={e => handleInput(e, 2)} value={value3}></input>
                                    </div>
                                    <div className='input-column'>
                                        <input type='text' className='cardNumber' name='input4' maxLength={4} ref={input4} onChange={e => handleInput(e, 3)} value={value4}></input>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='input-row'>
                            <div className='input-column'>
                                <label className='card-input-label'>Card Holder</label>
                                <input type='text' id='cardHolder' ref={cardHolder} maxLength={30} onChange={e => handleInput(e, 4)} value={name}></input>
                            </div>
                        </div>
                        <div className='input-row'>
                            <div className='input-column'>
                                <label className='card-input-label'>Month</label>
                                <select name="month" id="month" ref={cardMonth} onChange={e => handleInput(e, 5)} value={month}>
                                    <option value="01">1</option>
                                    <option value="02">2</option>
                                    <option value="03">3</option>
                                    <option value="04">4</option>
                                    <option value="05">5</option>
                                    <option value="06">6</option>
                                    <option value="07">7</option>
                                    <option value="08">8</option>
                                    <option value="09">9</option>
                                    <option value="10">10</option>
                                    <option value="11">11</option>
                                    <option value="12">12</option>
                                </select>
                            </div>
                            <div className='input-column'>
                                <label className='card-input-label'>Year</label>
                                <select name="year" id="year" ref={cardYear} onChange={e => handleInput(e, 6)} value={year}>
                                    <option value="2020">2020</option>
                                    <option value="2021">2021</option>
                                    <option value="2022">2022</option>
                                    <option value="2023">2023</option>
                                    <option value="2024">2024</option>
                                    <option value="2025">2025</option>
                                    <option value="2026">2026</option>
                                    <option value="2027">2027</option>
                                    <option value="2028">2028</option>
                                 </select>
                            </div>
                            <div className='input-column'>
                                <label className='card-input-label'>CVV</label>
                                <input type='text' className='cardCVV'></input>
                            </div>
                        </div>
                        <button className='btn-submit'>Submit</button>    
                    </div>         
                </div>
            </div>
            }
        </div>
    );
}

export default CardForm;