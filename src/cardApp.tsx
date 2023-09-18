import React from 'react';
import {Cards} from 'cards.tsx';
import './Cards/index.js';
import './index.css';


function CardApp() {
  const cardsData = [
  { title: 'Nombre de la capa',
  category: 'categoria',
  options : [
    {
      icon: "faDownload",
      onClick: () => console.log('download')
    },
    {
      icon: "faExclamationCircle",
      onClick: () => console.log('info')
    },
    {
      icon: "faBars",
      onClick: () => console.log('info')
    },
    {
      icon: "faGear",
      onClick: () => console.log('config')
    },
  ]
},
{ title: 'capacidad',
  category: 'categoria superficie',
  options : [
    {
      icon: "faDownload",
      onClick: () => console.log('download')
    },
   
    { 
      icon: "faGear",
      onClick: () => console.log('config')
    }
  ]
},
{ title: 'capa lineal',
  category: 'bajada'
},
{ title: 'capa',
  category: 'base'
},
{ title: 'Nombre',
  category: 'category'
}
]; 

  return (
    <div className='App'>
      <Cards data={cardsData}/>
    </div>
  );
}

export default CardApp;
