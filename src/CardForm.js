import React from 'react'
import './CreditCard.css';
import './CardForm.css'
import { Link } from 'react-router-dom';
import mastercardLogo from './icons/mastercard.png'
import chip from './icons/chip.png'

const CardForm = ({chosenTemplate}) => {
    
    return(
        <div className='form-container'>
            {chosenTemplate === null && 
                <div> 
                    <h2>No template chosen</h2>
                    <Link to="/">
                        <button className='btn-choose-template'>Choose Template</button>
                    </Link>
                </div>
            }
            {chosenTemplate &&
                <div>   
                        <Link to="/">
                        <button className='btn-return'><i class="fa fa-undo"></i></button>
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
                                    <div className='card-number'>5698 4536 0678 0238</div>
                                <div className='details-row'>
                                    <div className='details-column'>
                                        <div className='details-card-holder'>Card Holder</div>
                                        <div className='card-holder'>Adam Kowalski</div>
                                    </div>
                                    <div className='details-column'>
                                        <div className='details-card-expires'>Expires</div>
                                        <div className='card-expires'>12/20</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                <div className='credit-card-form'>
                    <div className='inputs-wrapper'>
                        <div className='input-row'>
                            <div className='input-column'>
                                <label className='card-input-label'>Card Number</label>
                                <input type='number' id='cardNumber'></input>
                            </div>
                        </div>
                        <div className='input-row'>
                            <div className='input-column'>
                                <label className='card-input-label'>Card Holder</label>
                                <input type='text' id='cardHolder'></input>
                            </div>
                        </div>
                        <div className='input-row'>
                            <div className='input-column'>
                                <label className='card-input-label'>Month</label>
                                <select name="month" id="month">
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                    <option value="10">10</option>
                                    <option value="11">11</option>
                                    <option value="12">12</option>
                                </select>
                            </div>
                            <div className='input-column'>
                                <label className='card-input-label'>Year</label>
                                <select name="year" id="year">
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