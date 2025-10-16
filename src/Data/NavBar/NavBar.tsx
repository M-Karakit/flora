export interface NavData {
    logo: string;
    links: string[];
    btn: {
        content: string;
    }
    icon: string;
    closeIcon: string;
}

export const navData : NavData = {
    logo: 'assets/imgs/logo.svg',
    links: ['Home', 'About', 'Services', 'New Property', 'Contact'],
    btn: {
        content: 'Login'
    },
    icon: '/assets/imgs/hamburger-icon.svg',
    closeIcon: '/assets/imgs/close-icon.svg'
}
