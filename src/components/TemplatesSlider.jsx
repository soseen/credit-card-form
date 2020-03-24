import React, { useRef, useEffect } from 'react';
import { useState } from 'react';
import '../../node_modules/font-awesome/css/font-awesome.min.css';
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';
// import OwlCarousel from 'react-owl-carousel';
import artTemplates from '../template-sets/artTemplates';
import basicTemplates from '../template-sets/basicTemplates';
import OwlCarousel from 'react-owl-carousel2';
import 'react-owl-carousel2/src/owl.carousel.css'
import 'react-owl-carousel2/lib/styles.css'
import 'font-awesome/css/font-awesome.min.css';
import {Link} from 'react-router-dom';


const TemplatesSlider = ({chooseTemplate}) => {

    let selectedIndex = 0;
    const owlSlider = useRef();
    const [currentSet, setCurrentSet] = useState(artTemplates);
    const [componentLoaded, setComponentLoaded] = useState(false);

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

    useEffect(() => {
        setComponentLoaded(true);
        console.log(componentLoaded);
    }, [componentLoaded])
    
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
            let currentSlideID = e.relatedTarget.$stage.children()[currentIndex].childNodes[0].childNodes[0].id
            selectedIndex = currentSlideID - 1
        },
    };

    const switchSet = (e, desiredSet) => {
        e.preventDefault();
        if(currentSet !== desiredSet){
            setCurrentSet(desiredSet);
        }
    }

    return(
        <div className="carousel-container">
            <h1>Choose template</h1>
            <div className="switch-set-buttons">
                <button className={`btn-1 ${currentSet === basicTemplates ?  'isactive' : ''}`} name='basicTemplates' onClick={e => switchSet(e, basicTemplates)}>1</button>
                <button className={`btn-2 ${currentSet === artTemplates ? 'isactive' : ''}`} name='artTemplates' onClick={e => switchSet(e, artTemplates)}>2</button>
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
                    {basicTemplates.map((template) => (
                        <div className='card-container'>
                            <div key={template.id} className='card' id={template.id} style={{
                                backgroundImage: template.background
                                }}>
                            </div>
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
                    {artTemplates.map((template) => (
                        <div className='card-container'>
                            <div key={template.id} className='card' id={template.id} style={{
                                backgroundImage: template.background
                                }}>
                            </div>
                        </div>
                    ))}
            </OwlCarousel>
            }
            <Link to="/credit-card-form/form">
                <button className="btn-proceed" onClick={e => chooseTemplate(currentSet[selectedIndex])}>Proceed</button>
            </Link>
        </div>
    );

}

export default TemplatesSlider;
