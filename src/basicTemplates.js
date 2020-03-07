import white from './bg/white.jpg';
import black from './bg/black.jpg';
import blue from './bg/blue.jpg';
import green from './bg/green.jpg';


const basicTemplates = [
    {
        id: 1,
        background: `url(${white})`,
        status: 'card-hidden'
    },
    {
        id: 2,
        background: `url(${blue})`,
        status: 'card-hidden'
    },
    {
        id: 3,
        background: `url(${black})`,
        status: 'card-hidden'
    },
    {
        id: 4,
        background: `url(${green})`,
        status: 'card-hidden'
    },
];

export default basicTemplates;