import { useState } from 'react';

import MainPage from './pages/mainPage/MainPage';
import AltPage from './pages/altPage/AltPage';

import './Portfolio.css';

function Portfolio() {

  const [persona, setPersona] = useState<boolean>(true);

  return (
    <div
      id='portfolio'
      style={
        (persona)
        ? {}
        : {
          background: 'rgb(37,10,89)' && 'linear-gradient(45deg, rgba(37,10,89,1) 0%, rgba(47,11,112,1) 20%, rgba(58,10,145,1) 100%)'
        }
      }
    >
      <div id='shuffle-box'>
        <button
          id='shuffle-btn'
          onClick={() => setPersona(!persona)}
          style={
            (persona)
            ? {
              backgroundColor: '#250a59',
              border: '1px solid #441b91'
            }
            : {
              backgroundColor: '#0f0f0f',
              border: '1px solid #0f0f0f'
            }
          }
        >
          <img id='shuffle' src='/static/icons/shuffle.png' alt='shuffle' />
        </button>
      </div>

      {
        (persona)
        ? <MainPage />
        : <AltPage />
      }
      
    </div>
  );
}

export default Portfolio;
