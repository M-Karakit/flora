export interface NavData {
    logo: string;
    links: string[];
    btn: {
        content: string;
    }
    icon: string;
    closeIcon: string;
}

export interface HeroData {
    title: string;
    subTitle: string;
    stats: {
        id: number;
        icon: string;
        stateTitle: string;
        stateSubTitle: string;
    }[];
    image: string;
}

export interface HowItWorksSectionData {
    cards: {
        id: number
        icon: string;
        title: string;
        subTitle: string;
        background?: "Endeavour-Blue";
        textColor?: "White";
    }[]
}

export interface DreamHomeSectionData {
    content: {
        title: string;
        subTitle: string;
        img: string;
    }
}