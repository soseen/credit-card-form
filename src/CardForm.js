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
    const [month, setMonth] = useState('01');
    const [year, setYear] = useState('20');
    const [cvv, setCvv] = useState('');

    const [currentInputValue, setCurrentInputValue] = useState('');

    const input1 = useRef();
    const input2 = useRef();
    const input3 = useRef();
    const input4 = useRef();
    const cardHolder = useRef();
    const cardMonth = useRef();
    const cardYear = useRef();
    const cardCVV = useRef();

    const inputs = [input1, input2, input3, input4, cardHolder, cardMonth, cardYear, cardCVV];

    const [refIndex, setRefIndex] = useState(0);
    const [currentRef, setCurrentRef] = useState(inputs[0]);

    useEffect(() => {
        console.log(currentInputValue)
        console.log(currentInputValue.length);
        if(currentInputValue.length === currentRef.current.maxLength && refIndex < 4){
            inputs[refIndex + 1].current.focus();
        }
            setCurrentInputValue('');
    }, [currentInputValue, currentRef, inputs, refIndex])

    const handleInput = (e, index) => {
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
        } else if(index === 7) {
            setCvv(e.target.value);
        }   
    }

    const handleFocus = (e, index) => {
        setRefIndex(index);
        setCurrentRef(inputs[index]);
        console.log(chosenTemplate.backfaceColor)
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
                    <div className='card-wrapper'>
                        <div className={`card ${currentRef === cardCVV ? 'hidden-card' : 'active-card'}`} style={{
                            backgroundImage: chosenTemplate.background
                            }}>
                            <div className="card-front-wrapper">
                                <img src={chip} className='card-chip' alt='chip'></img>
                                <img src={mastercardLogo} className='card-logo' alt='mastercard'></img>
                                <div className={`card-number ${currentRef === input1 || currentRef === input2 || currentRef === input3 || currentRef === input4 ? 'input-highlighted' : ''}`}>
                                    <div className='digits-wrapper'>{value1}</div>
                                    <div className='digits-wrapper'>{value2}</div>
                                    <div className='digits-wrapper'>{value3}</div>
                                    <div className='digits-wrapper'>{value4}</div>
                                </div>
                                <div className='details-row'>
                                    <div className={`details-column ${currentRef === cardHolder ? 'input-highlighted' : ''}`}>
                                        <div className='details-card-holder'>Card Holder</div>
                                        <div className='card-holder'>{name}</div>
                                    </div>
                                    <div className={`details-column ${currentRef === cardYear || currentRef === cardMonth ? 'input-highlighted' : ''}`}>
                                        <div className='details-card-expires'>Expires</div>
                                        <div className='card-expires'>{month}{'/'}{year}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={`card-back ${currentRef === cardCVV ? 'active-card' : 'hidden-card'}`} style={chosenTemplate.backfaceColor ? {
                            backgroundColor: chosenTemplate.backfaceColor
                        } : {
                            backgroundImage: chosenTemplate.background,
                        }}>
                            <div className='card-back-wrapper'>
                                <div className='swipe-bar'></div>
                                <div className='cvv-bar'><p>{cvv}</p></div>
                                <p className='info'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, corporis ex. Deleniti, at nulla. Cumque maxime expedita accusamus ipsa, officiis dicta sed velit eveniet molestiae similique eum, porro doloribus nobis.</p>
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
                                            <input type='text' className='cardNumber' name='input1' maxLength={4} ref={input1} onFocus={e => handleFocus(e, 0)} onChange={e => handleInput(e, 0)} value={value1}></input>
                                        </div>
                                        <div className='input-column'>
                                            <input type='text' className='cardNumber' name='input2' maxLength={4} ref={input2} onFocus={e => handleFocus(e, 1)} onChange={e => handleInput(e, 1)} value={value2}></input>
                                        </div>
                                        <div className='input-column'>
                                            <input type='text' className='cardNumber' name='input3' maxLength={4} ref={input3} onFocus={e => handleFocus(e, 2)} onChange={e => handleInput(e, 2)} value={value3}></input>
                                        </div>
                                        <div className='input-column'>
                                            <input type='text' className='cardNumber' name='input4' maxLength={4} ref={input4} onFocus={e => handleFocus(e, 3)} onChange={e => handleInput(e, 3)} value={value4}></input>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='input-row'>
                                <div className='input-column'>
                                    <label className='card-input-label'>Card Holder</label>
                                    <input type='text' id='cardHolder' ref={cardHolder} maxLength={30} onFocus={e => handleFocus(e, 4)} onChange={e => handleInput(e, 4)} value={name}></input>
                                </div>
                            </div>
                            <div className='input-row'>
                                <div className='input-column'>
                                    <label className='card-input-label'>Month</label>
                                    <select name="month" id="month" ref={cardMonth} onFocus={e => handleFocus(e, 5)} onChange={e => handleInput(e, 5)} value={month}>
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
                                    <select name="year" id="year" ref={cardYear} onFocus={e => handleFocus(e, 6)} onChange={e => handleInput(e, 6)} value={year}>
                                        <option value="20">2020</option>
                                        <option value="21">2021</option>
                                        <option value="22">2022</option>
                                        <option value="23">2023</option>
                                        <option value="24">2024</option>
                                        <option value="25">2025</option>
                                        <option value="26">2026</option>
                                        <option value="27">2027</option>
                                        <option value="28">2028</option>
                                    </select>
                                </div>
                                <div className='input-column'>
                                    <label className='card-input-label'>CVV</label>
                                    <input type='text' ref={cardCVV} className='cardCVV' maxLength={3} onFocus={e => handleFocus(e, 7)} onChange={e => handleInput(e, 7)} value={cvv}></input>
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