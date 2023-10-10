import React from 'react';

declare function Greetings(): React.JSX.Element;

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

export { Cards, Greetings };
