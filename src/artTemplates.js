import leafs from './bg/leafs.jpg';
import water from './bg/water.jpg';
import car from './bg/car.jpg';
import carnaval from './bg/carnaval.jpg';
import feather from './bg/feather.jpg';
import theatre from './bg/theatre.jpg';
import mask from './bg/mask.jpg';
import album from './bg/album.jpg';
import space from './bg/space.jpg';

const artTemplates = [
    {
        id: 1,
        background: `url(${space})`,
        backfaceColor: null
    },
    {
        id: 2,
        background: `url(${carnaval})`,
        backfaceColor: '#F9C059'
    },
    {
        id: 3,
        background: `url(${car})`,
        backfaceColor: '#CBC7A2'
    },
    {
        id: 4,
        background: `url(${feather})`,
        backfaceColor: '#B3E3F1'
    },
    {
        id: 5,
        background: `url(${mask})`,
        backfaceColor: null
    },
    {
        id: 6,
        background: `url(${theatre})`,
        backfaceColor: null
    },
    {
        id: 7,
        background: `url(${water})`,
        backfaceColor: null
    },
    {
        id: 8,
        background: `url(${album})`,
        backfaceColor: null
    },
    {
        id: 9,
        background: `url(${leafs})`,
        backfaceColor: '#7BA740'
    }
];

export default artTemplates;