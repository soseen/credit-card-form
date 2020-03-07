import city from './bg/city.jpg';
import water from './bg/water.jpg';
import car from './bg/car.jpg';
import carnaval from './bg/carnaval.jpg';
import feather from './bg/feather.jpg';
import theatre from './bg/theatre.jpg';
import mask from './bg/mask.jpg';
import album from './bg/album.jpg';

const artTemplates = [
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

export default artTemplates;