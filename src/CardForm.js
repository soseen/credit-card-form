import React, { useRef, useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import CreditCard from './CreditCard';

const CardForm = ({template, submitCard}) => {

    const defaultForm = {
        cardNumber1: {value: ''},
        cardNumber2: {value: ''},
        cardNumber3: {value: ''},
        cardNumber4: {value: ''},
        cardHolder: {value: ''},
        cardMonth: {value: '01'},
        cardYear: {value: '20'},
        cardCVV: {value: ''}
    }

    const [form, setForm] = useState(defaultForm);

    const inputNumber1 = useRef();
    const inputNumber2 = useRef();
    const inputNumber3 = useRef();
    const inputNumber4 = useRef();
    const inputName = useRef();
    const inputMonth = useRef();
    const inputYear = useRef();
    const inputCVV = useRef();

    const refInputs = [inputNumber1, inputNumber2, inputNumber3, inputNumber4, inputName, inputMonth, inputYear, inputCVV];


    const [refIndex, setRefIndex] = useState(0);
    const [currentRef, setCurrentRef] = useState();
    const [currentInputValue, setCurrentInputValue] = useState('');

    useEffect(() => {
        if(template){
            if(currentRef && currentInputValue.length === currentRef.current.maxLength && refIndex < 4){  
                refInputs[refIndex + 1].current.focus();
            }
            setCurrentInputValue('');
        }
    }, [currentInputValue, currentRef, refInputs, refIndex, template])

    const handleInput = ({target:{name,value}}) => {
        setForm({...form, [name]: {...form[name],value}});
        setCurrentInputValue(value);
        console.log(value.length);
    }

    const handleFocus = (e, index) => {
        setRefIndex(index)
        setCurrentRef(refInputs[index]);
    }

    return(
        <div className='form-container'>
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
                    <Link to="/credit-card-form/">
                    <button className='btn-return'><i className="fa fa-arrow-left"></i></button>
                    </Link>
                    <h1>Insert details</h1>
                    <CreditCard form = {form} currentRef={currentRef} template={template} refInputs={refInputs} isFinished={false}/>
                    <div className='credit-card-form'>
                        <div className='inputs-container'>
                            <div className='input-row'>
                                <div className='input-column'>
                                    <label className='card-input-label'>Card Number</label>
                                    <div className='input-row'>
                                        <div className='input-column'>
                                            <input type='text' className='cardNumber' name='cardNumber1' maxLength={4} ref={inputNumber1} onFocus={e => handleFocus(e, 0)} onChange={handleInput} value={form.cardNumber1 ? form.cardNumber1.value : ''}></input>
                                        </div>
                                        <div className='input-column'>
                                            <input type='text' className='cardNumber' name='cardNumber2' maxLength={4} ref={inputNumber2} onFocus={e => handleFocus(e, 1)} onChange={handleInput} value={form.cardNumber2 ? form.cardNumber2.value : ''}></input>
                                        </div>
                                        <div className='input-column'>
                                            <input type='text' className='cardNumber' name='cardNumber3' maxLength={4} ref={inputNumber3} onFocus={e => handleFocus(e, 2)} onChange={handleInput} value={form.cardNumber3 ? form.cardNumber3.value : ''}></input>
                                        </div>
                                        <div className='input-column'>
                                            <input type='text' className='cardNumber' name='cardNumber4' maxLength={4} ref={inputNumber4} onFocus={e => handleFocus(e, 3)} onChange={handleInput} value={form.cardNumber4 ? form.cardNumber4.value : ''}></input>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='input-row'>
                                <div className='input-column'>
                                    <label className='card-input-label'>Card Holder</label>
                                    <input type='text' name='cardHolder' ref={inputName} maxLength={30} onFocus={e => handleFocus(e, 4)} onChange={handleInput} value={form.cardHolder.value}></input>
                                </div>
                            </div>
                            <div className='input-row'>
                                <div className='input-column'>
                                    <label className='card-input-label'>Month</label>
                                    <select name='cardMonth' ref={inputMonth} onFocus={e => handleFocus(e, 5)} onChange={handleInput} value={form.cardMonth ? form.cardMonth.value : ''}>
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
                                    <select name='cardYear' ref={inputYear} onFocus={e => handleFocus(e, 6)} onChange={handleInput} value={form.cardYear ? form.cardYear.value : ''}>
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
                                    <input type='text' ref={inputCVV} name='cardCVV' className='cardCVV' maxLength={3} onFocus={e => handleFocus(e, 7)} onChange={handleInput} value={form.cardCVV ? form.cardCVV.value : ''}></input>
                                </div>
                            </div>
                            <Link to='/credit-card-form/result'>
                                <button className='btn-submit' onClick={e => submitCard(form)}>Submit</button>
                            </Link>    
                        </div>         
                    </div>
                </div>
            }
        </div>
    );
}

export default CardForm;