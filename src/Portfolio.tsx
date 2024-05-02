import { useState } from 'react';

import MainPage from './pages/mainPage/MainPage';
import AltPage from './pages/altPage/AltPage';

import './Portfolio.scss';

function Portfolio() {

  const [persona, setPersona] = useState<boolean>(true);

  const profiles: [string, Object][] = [
    [
      '/static/img/joker600.jpg',
      {
        background: 'linear-gradient(45deg, rgba(37,10,89,1) 0%, rgba(47,11,112,1) 20%, rgba(58,10,145,1) 100%)',
      }
    ],
    [
      '/static/img/liotta.png',
      {
        background: 'linear-gradient(132deg, rgba(103,17,17,1) 10%, rgba(72,15,15,1) 38%, rgba(60,14,14,1) 76%)',
      }
    ],
    [
      '/static/img/wick2.png',
      {
        backgroundImage: 'url(\'/static/img/wick.gif\')',
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

  return (
    <>
      
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
