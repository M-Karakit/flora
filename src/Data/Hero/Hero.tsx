import type { HeroData } from "../../Interfaces/Interfaces";


export const heroData : HeroData = {
    title: 'Discover a place you will love to live',
    subTitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet tempus felis vitae sit est quisque.',
    stats: [
        {
            id: 1,
            icon: '/assets/imgs/location.svg',
            stateTitle: 'Location',
            stateSubTitle: 'Ahmedabad, India'
        }, 
        {
            id: 2,
            icon: '/assets/imgs/dollar-circle.svg',
            stateTitle: 'Price',
            stateSubTitle: '$1000 - $10,000'
        },
        {
            id: 3,
            icon: '/assets/imgs/house.svg',
            stateTitle: 'Type of Property',
            stateSubTitle: 'Apartment'
        }
    ],
    image: '/assets/imgs/hero-img.png'
}