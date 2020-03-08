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

    let selectedIndex = 0;
    let oldIndex = 0;
    const owlSlider = useRef();
    const [currentSet, setCurrentSet] = useState(artTemplates);
    const [index, setIndex] = useState(0);
    // const [desiredIndex, setDesiredIndex] = useState(0);
    // const [currentSlide, setCurrentSlide] = useState(currentSet[index].id);


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
    
    useEffect(()=> {
        console.log(index)
        return () => {
            if(index > oldIndex){
                console.log('index after right' + index)
                owlSlider.current.next()
                oldIndex = index;
                console.log('old index: ' + oldIndex)
            } else if (index < oldIndex){
                console.log(index)
                owlSlider.current.prev()
                oldIndex = index;
            } else {
                console.log('nic nie rob')
            }
        }
    }, [index]);
    
    const prevSlide = () => {
        // owlSlider.current.prev();
        // if(selectedIndex === 0){
        //     selectedIndex = currentSet.length - 1;
        // } else {
        //     selectedIndex--;
        // }
        // console.log("Ran prevSlide(), current index:" + selectedIndex);

        if(index === 0){
            setIndex(currentSet.length -1)
        } else {
            setIndex(index - 1)
        }

    }

    const nextSlide = () => {
        // owlSlider.current.next();
        // if(selectedIndex === currentSet.length - 1)
        // {
        //     selectedIndex = 0;
        // } else {
        //     selectedIndex++;            
        // }

        if(index === currentSet.length -1){
            setIndex(0)
        } else {
            setIndex(index + 1)
        }

        // console.log("Ran nextSlide(), current index:" + selectedIndex);
    }

    // const handleChange = (e) => {
    //     // console.log(e.item.index);

    //     // Not the best solution
    //     let currentIndex = e.item.index;
    //     let currentElement = e.relatedTarget.$stage.children()[currentIndex].childNodes[0].id;
    //     // setCurrentSlide(currentElement);
    //     //console.log(e.relatedTarget.$stage.children()[currentIndex].childNodes[0])
    //     console.log(currentElement);
    // }

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
