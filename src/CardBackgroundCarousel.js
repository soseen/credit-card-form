import React, { useRef } from 'react';
import './CardBackgroundCarousel.css';
import './CreditCard.css';
import { useState } from 'react';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';
// import OwlCarousel from 'react-owl-carousel';
import artTemplates from './artTemplates';
import basicTemplates from './basicTemplates';
import OwlCarousel from 'react-owl-carousel2';
import 'react-owl-carousel2/src/owl.carousel.css'
import 'react-owl-carousel2/lib/styles.css'
import 'font-awesome/css/font-awesome.min.css';
import {Link} from 'react-router-dom';


const CardBackgroundCarousel = ({sendTemplate}) => {

    let selectedIndex = 0;
    const owlSlider = useRef();
    const [currentSet, setCurrentSet] = useState(artTemplates);

    const settings = {
        nav: false,
        speed: 500,
        mouseDrag: true,
        controls: false,
        dots: false,
        loop: true,
        center: true,
        autoWidth: true,
        margin: 30,
      }
    
    const prevSlide = () => {
        owlSlider.current.prev();
        if(selectedIndex === 0){
            selectedIndex = currentSet.length - 1;
        } else {
            selectedIndex--;
        }
        console.log("Ran prevSlide(), current index:" + selectedIndex);

    }

    const nextSlide = () => {
        owlSlider.current.next();
        if(selectedIndex === currentSet.length - 1)
        {
            selectedIndex = 0;
        } else {
            selectedIndex++;            
        }
        console.log("Ran nextSlide(), current index:" + selectedIndex);
    }

    const events = {
        onDragged: function(e) {
            let currentIndex = e.item.index;
            let currentSlideID = e.relatedTarget.$stage.children()[currentIndex].childNodes[0].id;;
            selectedIndex = currentSlideID - 1
            console.log("Item Dragged, current index:" + selectedIndex);
        },
    };

    const switchSet = (e) => {
        e.preventDefault();
        if(e.target.className === 'btn-1 ' && currentSet !== basicTemplates){
            setCurrentSet(basicTemplates);
            // setCurrentSlide(basicTemplates[0].id);
        } else if(e.target.className === 'btn-2 ' && currentSet !== artTemplates){
            setCurrentSet(artTemplates);
            // setCurrentSlide(artTemplates[0].id);
        }
    }

    const chooseTemplate = (e) => {
        sendTemplate(currentSet[selectedIndex])
    }

    return(
        <div className="carousel-container">
            <h1>Choose template</h1>
            <div className="switch-set-buttons">
                <button className={`btn-1 ${currentSet === basicTemplates ?  'isactive' : ''}`} onClick={switchSet}>1</button>
                <button className={`btn-2 ${currentSet === artTemplates ? 'isactive' : ''}`} onClick={switchSet}>2</button>
            </div>
            <div className="navButtons">
                <button className='btn-left' onClick={prevSlide}><i className="fa fa-angle-left"></i></button>
                <button className='btn-right' onClick={nextSlide}><i className="fa fa-angle-right"></i></button>
            </div>
            {currentSet===basicTemplates &&
                <OwlCarousel
                options={settings}
                ref={owlSlider}
                events={events}
                >
                    {basicTemplates.map((card) => (
                        <div key={card.id} className='card' id={card.id} style={{
                            backgroundImage: card.background,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'
                            }}>
                        </div>
                    ))}
                </OwlCarousel>
            }
            {currentSet===artTemplates &&
                <OwlCarousel
                options={settings}
                ref={owlSlider}
                events={events}
                >
                    {artTemplates.map((card) => (
                        <div key={card.id} className='card' id={card.id} style={{
                            backgroundImage: card.background,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'
                            }}>
                        </div>
                    ))}
            </OwlCarousel>
            }
            <Link to="/form">
                <button className="btn-proceed" onClick={chooseTemplate}>Proceed</button>
            </Link>
        </div>
    );

}

export default CardBackgroundCarousel;
