import type { FooterData } from "../../Interfaces/Interfaces";

export const footerData: FooterData = {
    info: {
        logo: '/assets/imgs/logo.svg',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet tempusfelis vitae sit est quisque.',
    },
    columns: [
        {
            title: 'Service',
            links: ['Payment & Tax', 'Features', 'View Booking', 'Support'],
        },
        {
            title: 'About',
            links: ['About us', 'News', 'Pricing', 'New Property'],
        },
        {
            title: 'Our Location',
            links: ['2972 Westheimer Rd. Santa Ana, Illinois 85486'],
            icon: ['/assets/imgs/facebook-fill.svg', '/assets/imgs/twitter-fill.svg', '/assets/imgs/linkedin-fill.svg']
        },
    ],
    subFooter: {
        left: 'Copyright 2024 flora. All Rights Reserved',
        right: ['Terms & Conditions', 'Privacy Policy']
    }

}