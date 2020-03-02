import React from 'react';
import './CardBackgroundCarousel.css';
import city from './bg/city.jpg';
import water from './bg/water.jpg';
import car from './bg/car.jpg';
import carnaval from './bg/carnaval.jpg';
import feather from './bg/feather.jpg';
import theatre from './bg/theatre.jpg';
import mask from './bg/mask.jpg';
import album from './bg/album.jpg';
import { useState } from 'react';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';
import OwlCarousel from 'react-owl-carousel'

const CardBackgroundCarousel = () => {

    
    

    const cardTemplates = [
        {
            id: 1,
            background: `url(${city})`,
            status: 'card-hidden'
        },
        {
            id: 2,
            background: `url(${carnaval})`,
            status: 'card-hidden'
        },
        {
            id: 3,
            background: `url(${car})`,
            status: 'card-hidden'
        },
        {
            id: 4,
            background: `url(${feather})`,
            status: 'card-hidden'
        },
        {
            id: 5,
            background: `url(${mask})`,
            status: 'card-hidden'
        },
        {
            id: 6,
            background: `url(${theatre})`,
            status: 'card-hidden'
        },
        {
            id: 7,
            background: `url(${water})`,
            status: 'card-hidden'
        },
        {
            id: 8,
            background: `url(${album})`,
            status: 'card-hidden'
        },
    ];

    let middleSlide = Math.floor((cardTemplates.length / 2));
    cardTemplates[middleSlide].status = 'card-active';

    const [currentSlide, setCurrentSlide] = useState(cardTemplates[middleSlide].id);
    console.log(currentSlide);

    const slideLeft = () => {
        if(currentSlide - 1 > 0){
            setCurrentSlide(currentSlide - 1);
        }
    }

    const slideRight = () => {
        if(currentSlide + 1 <= cardTemplates.length){
            setCurrentSlide(currentSlide + 1);
        }
    }

    const handleChange = (e) => {
        console.log(e.item);
        console.log(e.item.index);
    }


    return(
        <div className="carousel-container">
            <h1>Choose template</h1>
            <OwlCarousel
            className="owl-theme"
            loop
            margin={30}
            nav={true}
            dots={false}
            autoWidth
            center
            onDragged={handleChange}> 
                    {cardTemplates.map((card, index) => (
                        <div key={index} className='card' id={card.id} style={{
                            backgroundImage: card.background,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'
                        }}>
                        {/* <img src="https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/chip.png" className="chip"></img> */}
                        </div>
                    ))}

            </OwlCarousel>
            <button className="btn-proceed">Proceed</button>
        </div>
    );

}

export default CardBackgroundCarousel;
