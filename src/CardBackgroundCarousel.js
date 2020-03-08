import React, { useRef, useEffect } from 'react';
import './CardBackgroundCarousel.css';
import { useState } from 'react';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';
// import OwlCarousel from 'react-owl-carousel';
import artTemplates from './artTemplates';
import basicTemplates from './basicTemplates';
import TinySlider from 'tiny-slider-react'
import OwlCarousel from 'react-owl-carousel2';
import 'react-owl-carousel2/src/owl.carousel.css'
import 'react-owl-carousel2/lib/styles.css'
import 'font-awesome/css/font-awesome.min.css';


const CardBackgroundCarousel = () => {

    const owlSlider = useRef();
    const [index, setIndex] = useState(1);
    const [currentSet, setCurrentSet] = useState(artTemplates);
    const [currentSlide, setCurrentSlide] = useState(currentSet[index].id);


    const settings = {
        nav: false,
        speed: 500,
        mouseDrag: true,
        controls: false,
        dots: false,
        loop: true,
        center: true,
        autoWidth: true,
        margin: 30
      }
    
    // useEffect(()=> {
    //     owlSlider.current.next()
    // }, [currentSlide]);


    const prevSlide = () => {
        if(currentSlide !== currentSet[index].id){
            setCurrentSlide(currentSet[index - 1].id);
            setIndex(index - 1);
        } else {
            setCurrentSlide(currentSet[currentSet.length -1].id);
            setIndex(currentSet.length -1);
        }
        owlSlider.current.prev();
        console.log(currentSlide);
    }

    function nextSlide() {
        console.log(currentSet[index].background); 
        if(currentSlide !== currentSet[currentSet.length -1].id){
            setCurrentSlide(currentSet[index + 1].id);
            setIndex(index + 1);
        } else {
            setCurrentSlide(currentSet[0].id);
            setIndex(0);
        }
        console.log(currentSlide);
        console.log(currentSet[index].background); 
        owlSlider.current.next();
    }


    const handleChange = (e) => {
        // console.log(e.item.index);

        // Not the best solution
        let currentIndex = e.item.index;
        let currentElement = e.relatedTarget.$stage.children()[currentIndex].childNodes[0].id;
        setCurrentSlide(currentElement);
        //console.log(e.relatedTarget.$stage.children()[currentIndex].childNodes[0])
        console.log(currentElement);
    }

    const switchSet = (e) => {
        e.preventDefault();
        if(e.target.className === 'btn-1 ' && currentSet !== basicTemplates){
            setCurrentSet(basicTemplates);
            setCurrentSlide(basicTemplates[0].id);
        } else if(e.target.className === 'btn-2 ' && currentSet !== artTemplates){
            setCurrentSet(artTemplates);
            setCurrentSlide(artTemplates[0].id);
        }
    }

    return(
        <div className="carousel-container">
            <h1>Choose template</h1>
            <div className="switch-set-buttons">
                <button className={`btn-1 ${currentSet === basicTemplates ?  'isactive' : ''}`} onClick={switchSet}>1</button>
                <button className={`btn-2 ${currentSet === artTemplates ? 'isactive' : ''}`} onClick={switchSet}>2</button>
            </div>
            <div className="navButtons">
                <button className='btn-left' onClick={() => {owlSlider.current.prev()}}><i className="fa fa-angle-left"></i></button>
                <button className='btn-right' onClick={nextSlide}><i className="fa fa-angle-right"></i></button>
            </div>
            {currentSet===basicTemplates &&
                <OwlCarousel
                options={settings}
                ref={owlSlider}
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
            <button className="btn-proceed">Proceed</button>
        </div>
    );

}

export default CardBackgroundCarousel;
