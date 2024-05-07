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
    '/static/img/joker600.jpg',
    'url(\'/static/img/joker.gif\')'
  ],
  [
    '/static/img/liotta.png',
    'url(\'/static/img/goodfellas.gif\')'
  ],
  [
    '/static/img/wick2.png',
    'url(\'/static/img/wick4.gif\')'
  ],
  [
    '/static/img/bible.png',
    'url(\'/static/img/fury3.gif\')'
  ],
  [
    '/static/img/bony.jpg',
    'url(\'/static/img/tony.gif\')'
  ],
  [
    '/static/img/hellyr.png',
    'url(\'/static/img/severance.gif\')'
  ],
  [
    '/static/img/rambo3.png',
    'url(\'/static/img/blood.gif\')'
  ],
  [
    '/static/img/dufresne4.png',
    'url(\'/static/img/shawshank.gif\')'
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
            backgroundImage: profiles[profileIndex][1],
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
