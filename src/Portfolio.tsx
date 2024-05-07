import { useState } from 'react';

import MainPage from './pages/mainPage/MainPage';
import AltPage from './pages/altPage/AltPage';
import SnowAnimation from './components/snowAnimation/SnowAnimation';

import './Portfolio.scss';


function Portfolio() {

  const [persona, setPersona] = useState<boolean>(true);

  const profiles: [string, Object][] = [
    [
      '/static/img/joker600.jpg',
      {
        backgroundImage: 'url(\'/static/img/joker.gif\')',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }
    ],
    [
      '/static/img/liotta.png',
      {
        backgroundImage: 'url(\'/static/img/goodfellas.gif\')',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }
    ],
    [
      '/static/img/wick2.png',
      {
        backgroundImage: 'url(\'/static/img/wick4.gif\')',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }
    ],
    [
      '/static/img/bible.png',
      {
        backgroundImage: 'url(\'/static/img/fury3.gif\')',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }
    ],
    [
      '/static/img/bony.jpg',
      {
        backgroundImage: 'url(\'/static/img/tony.gif\')',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }
    ],
    [
      '/static/img/hellyr.png',
      {
        backgroundImage: 'url(\'/static/img/severance.gif\')',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }
    ],
    [
      '/static/img/rambo3.png',
      {
        backgroundImage: 'url(\'/static/img/blood.gif\')',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }
    ],
    [
      '/static/img/dufresne4.png',
      {
        backgroundImage: 'url(\'/static/img/shawshank.gif\')',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }
    ]
  ];
  // const [profileIndex, setProfileIndex] = useState<number>(Math.floor(Math.random() * profiles.length));
  const [profileIndex, setProfileIndex] = useState<number>(0);
  const incrementProfile = () => {
    if (profileIndex >= profiles.length - 1)
      setProfileIndex(0);
    else
      setProfileIndex(prev => prev + 1);
  };

  const isChristmas = (): boolean => {
    const now = new Date(Date.now());
    const [month, day] = [now.getMonth(), now.getDate()];
    return (month === 11 && day >= 20 && day <= 31);
  }

  return (
    <>
      {
        (isChristmas()) && <SnowAnimation />
      }
      <div
        id='portfolio'
        style={
          (persona)
          ? {}
          : profiles[profileIndex][1]
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
