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

export interface MostTrendingSectionData {
    cards: {
        id: number;
        img: string;
        price: string;
        description: string;
        location: {
            icon: string;
            address: string;
        }
    }[]
}

export interface RealEstateDealData {
    categories: {
        id: number;
        title: string;
    }[];
    cards: {
        id: number;
        categoryId: number;
        image: string;
        btn: {
            id: number;
            content: string;
        }[];
    }[];
}

export interface FooterData {
    info: {
        logo: string;
        text: string;
    };
    columns: {
        title: string;
        links: string[];
        icon?: string[];
    }[];
    subFooter: {
        left: string;
        right: string[];
    }
}