import React from 'react';
import { Card, Text } from '@mantine/core';
import './cards.css'

// Define una interfaz para los objetos en la matriz data
interface CardData {
  title: string;
  category: string;
  options?: {
    icon: string; // Otra interfaz para definir la estructura del objeto option si es necesario
    onClick: () => void;
  }[];
}

interface CardsProps {
  data: CardData[]; // Usa la interfaz CardData como tipo para data
}

function Cards({ data }: CardsProps) {
  return (
    <div className='div'>
      {data.map((card, index) => (
        <Card key={index} className='card-container'>
          <div className='top-bar'>
            {/* <FontAwesomeIcon icon={faSitemap} className='sitemap'/> */}
            <Text className='title'>{card.title}</Text>
            {/* <FontAwesomeIcon className="close-icon" icon={faTimes} /> */}
          </div>
          <div className='content'>
            <div className="water-icon">
              {/* <FontAwesomeIcon 
                icon={faWater} 
                /> */}
              <Text className='category'>{card.category}</Text>
            </div>
            <div className='icon-container'>
              {/*   <div className='icons'>
    {
      card.options?.map((option) => (
        <FontAwesomeIcon
          icon={option.icon}
          className='dowloand'
          onClick={option.onClick} 
        />
      ))
    }
  </div> */}
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}

export default Cards;

  