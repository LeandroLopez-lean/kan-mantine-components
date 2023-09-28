import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
/* import {
  faDownload,
  faTimes,
  faGear,
  faWater,
  faBars,
  faExclamationCircle,
 faSitemap,
} from '@fortawesome/free-solid-svg-icons'; */
import { Card, Text } from '@mantine/core';
import './index.css';

function Cards({ data }) {

  return (
    <div className='div'>
      {data.map((card, index) => (
        <Card key={index} className='card-container'>
          <div className='top-bar'>
           {/*  <FontAwesomeIcon icon={faSitemap} className='sitemap' /> */}
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
              <div className='icons'>
               {/* {
                  card.options?.map((option) => (
                     <FontAwesomeIcon
                      icon={option.icon}
                      className='dowloand'
                      onClick={option.onClick}
                    /> 
                  ))
                }*/}
              </div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}


export default Cards;

