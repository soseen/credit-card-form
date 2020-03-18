import React from 'react';
import './CreditCard.css'
import mastercardLogo from './icons/mastercard.png'
import chip from './icons/chip.png'


const CreditCard = ({form: {cardNumber1, cardNumber2, cardNumber3, cardNumber4, cardHolder, cardMonth, cardYear, cardCVV}, currentRef, template, refInputs, isFinished, display}) => {


    return(
        <div>
            {isFinished === false && 
                <div className='card-wrapper'>
                    <div className={`card ${currentRef === refInputs[7] ? 'hidden-card' : 'active-card'}`} style={{
                        backgroundImage: template.background
                        }}>
                        <div className="card-front-wrapper">
                            <img src={chip} className='card-chip' alt='chip'></img>
                            <img src={mastercardLogo} className='card-logo' alt='mastercard'></img>
                            <div className={`card-number ${currentRef === refInputs[0] || currentRef === refInputs[1] || currentRef === refInputs[2] || currentRef === refInputs[3] ? 'input-highlighted' : ''}`}>
                                <div className='digits-wrapper'>{cardNumber1.value}</div>
                                <div className='digits-wrapper'>{cardNumber2.value}</div>
                                <div className='digits-wrapper'>{cardNumber3.value}</div>
                                <div className='digits-wrapper'>{cardNumber4.value}</div>
                            </div>
                            <div className='details-row'>
                                <div className={`details-column ${currentRef === refInputs[4] ? 'input-highlighted' : ''}`}>
                                    <div className='details-card-holder'>Card Holder</div>
                                    <div className='card-holder'>{cardHolder.value}</div>
                                </div>
                                <div className={`details-column ${currentRef === refInputs[5] || currentRef === refInputs[6] ? 'input-highlighted' : ''}`}>
                                    <div className='details-card-expires'>Expires</div>
                                    <div className='card-expires'>{cardMonth.value}{'/'}{cardYear.value}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`card-back ${currentRef === refInputs[7] ? 'active-card' : 'hidden-card'}`} style={template.backfaceColor ? {
                        backgroundColor: template.backfaceColor
                    } : {
                        backgroundImage: template.background,
                    }}>
                        <div className='card-back-wrapper'>
                            <div className='swipe-bar'></div>
                            <div className='cvv-bar'><p>{cardCVV.value}</p></div>
                            <p className='info'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, corporis ex. Deleniti, at nulla. Cumque maxime expedita accusamus ipsa, officiis dicta sed velit eveniet molestiae similique eum, porro doloribus nobis.</p>
                        </div>
                    </div> 
                </div>
            }
            {isFinished === true &&
                <div className='card-wrapper'>
                    <div className={`card ${display}1`} style={{
                        backgroundImage: template.background
                    }}>
                        <div className="card-front-wrapper">
                            <img src={chip} className='card-chip' alt='chip'></img>
                            <img src={mastercardLogo} className='card-logo' alt='mastercard'></img>
                            <div className='card-number'>
                                <div className='digits-wrapper'>{cardNumber1.value}</div>
                                <div className='digits-wrapper'>{cardNumber2.value}</div>
                                <div className='digits-wrapper'>{cardNumber3.value}</div>
                                <div className='digits-wrapper'>{cardNumber4.value}</div>
                            </div>
                            <div className='details-row'>
                                <div className='details-column'>
                                    <div className='details-card-holder'>Card Holder</div>
                                    <div className='card-holder'>{cardHolder.value}</div>
                                </div>
                                <div className='details-column'>
                                    <div className='details-card-expires'>Expires</div>
                                    <div className='card-expires'>{cardMonth.value}{'/'}{cardYear.value}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`card-back ${display}2`} style={template.backfaceColor ? {
                        backgroundColor: template.backfaceColor
                    } : {
                        backgroundImage: template.background,
                    }}>
                        <div className='card-back-wrapper'>
                            <div className='swipe-bar'></div>
                            <div className='cvv-bar'><p>{cardCVV.value}</p></div>
                            <p className='info'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, corporis ex. Deleniti, at nulla. Cumque maxime expedita accusamus ipsa, officiis dicta sed velit eveniet molestiae similique eum, porro doloribus nobis.</p>
                        </div>
                    </div> 
                </div>
            }
        </div>
    );
}

export default CreditCard