import { useState } from 'react';

import MainPage from './pages/mainPage/MainPage';
import AltPage from './pages/altPage/AltPage';
import SnowAnimation from './components/snowAnimation/SnowAnimation';

import './Portfolio.scss';


const isChristmas = (): boolean => {
  const now = new Date(Date.now());
  const [month, day] = [now.getMonth(), now.getDate()];
  return (month === 11 && day >= 20 && day <= 31);
}

const profiles: [string, string][] = [
  [
    '/static/imgs/joker600.jpg',
    '/static/gifs/joker.gif'
  ],
  [
    '/static/imgs/liotta.png',
    '/static/gifs/goodfellas.gif'
  ],
  [
    '/static/imgs/wick2.png',
    '/static/gifs/wick4.gif'
  ],
  [
    '/static/imgs/bible.png',
    '/static/gifs/fury3.gif'
  ],
  [
    '/static/imgs/bony.jpg',
    '/static/gifs/tony.gif'
  ],
  [
    '/static/imgs/hellyr.png',
    '/static/gifs/severance.gif'
  ],
  [
    '/static/imgs/rambo3.png',
    '/static/gifs/blood.gif'
  ],
  [
    '/static/imgs/dufresne4.png',
    '/static/gifs/shawshank.gif'
  ],
  [
    '/static/imgs/shikishima.png',
    '/static/gifs/godzillamo.gif'
  ]
];

function Portfolio() {

  const [persona, setPersona] = useState<boolean>(true);
  const [profileIndex, setProfileIndex] = useState<number>(0);
  const incrementProfile = () => {
    if (profileIndex >= profiles.length - 1)
      setProfileIndex(0);
    else
      setProfileIndex(prev => prev + 1);
  };

  return (
    <>
      {
        isChristmas() && <SnowAnimation />
      }
      <div
        id='portfolio'
        style={
          (persona)
          ? {}
          : {
            backgroundImage: `url('${profiles[profileIndex][1]}')`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
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
                backgroundColor: 'transparent',
                border: '1px solid #f1f1f1'
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
          : (
            <AltPage
              imgUrl={profiles[profileIndex][0]}
              incrementProfile={incrementProfile}
            />
          )
        }
        
      </div>
    </>
  );
}

export default Portfolio;
