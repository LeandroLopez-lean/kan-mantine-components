import React from 'react';
import './cards.css';
interface CardData {
    title: string;
    category: string;
    options?: {
        icon: string;
        onClick: () => void;
    }[];
}
interface CardsProps {
    data: CardData[];
}
declare function Cards({ data }: CardsProps): React.JSX.Element;
export default Cards;
