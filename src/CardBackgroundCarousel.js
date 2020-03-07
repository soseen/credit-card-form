import React from 'react';
import './CardBackgroundCarousel.css';
import { useState } from 'react';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';
import OwlCarousel from 'react-owl-carousel';
import artTemplates from './artTemplates';
import basicTemplates from './basicTemplates';

const CardBackgroundCarousel = () => {

    const [currentSet, setCurrentSet] = useState(artTemplates);
    const [currentSlide, setCurrentSlide] = useState(currentSet[0].id);

    const slideLeft = () => {
    }

    const slideRight = (e) => {
        e.preventDefault();
        console.log(e.target)
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
            console.log('btn1');
        } else if(e.target.className === 'btn-2 ' && currentSet !== artTemplates){
            setCurrentSet(artTemplates);
            console.log('btn2');
        }
    }

    const getInfo = (e) => {
        console.log('cos sie dzieje');
        console.log(e.item);
    }


    return(
        <div className="carousel-container">
            <h1>Choose template</h1>
            <div className="switch-set-buttons">
                <button className={`btn-1 ${currentSet === basicTemplates ?  'isactive' : ''}`} onClick={switchSet}>1</button>
                <button className={`btn-2 ${currentSet === artTemplates ? 'isactive' : ''}`} onClick={switchSet}>2</button>
            </div>
            {currentSet===basicTemplates &&
            <OwlCarousel
            className="owl-theme"
            loop
            margin={30}
            nav={true}
            dots={false}
            autoWidth
            center
            onChange={handleChange}
            info={getInfo}
            >
                        {basicTemplates.map((card, index) => (
                        <div key={index} className='card' id={card.id} style={{
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
            className="owl-theme"
            loop
            margin={30}
            nav={true}
            dots={false}
            autoWidth
            center
            onChange={handleChange}
            info={getInfo}
            >
                        {artTemplates.map((card, index) => (
                        <div key={index} className='card' id={card.id} style={{
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
