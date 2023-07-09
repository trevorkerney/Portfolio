import { useState } from 'react';

import './Portfolio.css';

function Portfolio() {

  const [persona, setPersona] = useState<boolean>(true);

  const quotes: [string, string][] = [
    ['Yeah, most of the time, I was convinced, shit, I\'d lost it... but there were other times... I thought I was mainlining the secret truth of the universe.', 'Rust Cohle, True Detective, season 1'],
    ['You dad. I\'d still have you.', 'Mark Grayson, Invincible'],
    ['So you were always like this.', 'Walter White, Better Call Saul'],
    ['It\'s not about money... it\'s about sending a message. Everything burns!', 'The Joker, The Dark Knight'],
    ['Yeah.', 'John Wick, John Wick']
  ];

  const getRandQuote = () => {
    const index = Math.floor(Math.random() * quotes.length);
    return (
      <div className='quote'>
        <p>{quotes[index][0]}</p>
        <p><i>-{quotes[index][1]}</i></p>
      </div>
    )
  };

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
          <img id='shuffle' src='./shuffle.png' alt='shuffle' />
        </button>
      </div>

      <div id='header'>
        <div id='profile'>
          <div id='img-box'>
            <img 
            id='profile-img' 
            src={
              (persona)
              ? './me.png'
              : './joker600.jpg'
            } 
            alt='Trevor Kerney' />
          </div>
          <div id='about'>
            <h1 className='ab-sec' id='name'>
              {
                (persona)
                ? 'Trevor Kerney'
                : 'Evosity'
              }
            </h1>
            {
              (persona)
              && (
                <h4 className='ab-sec' id='job'>
                  <img className='ab-logo' src='./icons/gs-vb64.png' alt='Geosonics-VibraTech' />
                  Full-Stack Software Engineer at Vibra-Tech
                </h4>
              )
            }
            {
              (persona)
              ? <p className='ab-sec' id='bio'>
                Hello, I am a (mostly) self-taught software engineering generalist driven by a passion for creating efficient, reliable, and secure applications. I have a point of contention with (most) software products that are not free and open source, as these products tend to inhibit customization, promote overcommercialization of the internet, and create an illusion of privacy.
              </p>
              : getRandQuote()
            }
          </div>
        </div>

        <div id='links-box'>
          <ul id='links'>
            {
              (persona)
              ? (
                <>
                  <li className='link'>
                    <a className='link-a' href='https://github.com/trevorkerney'>
                      <img className='link-logo' src='./icons/github64.png' />
                      GitHub - trevorkerney
                    </a>
                  </li>
                  <li className='link'>
                    <a className='link-a' href='https://www.linkedin.com/in/trevorkerney'>
                      <img className='link-logo' src='./icons/linkedin64.png' />
                      LinkedIn - trevorkerney
                    </a>
                  </li>
                </>
              )
              : (
                <>
                  <li className='link'>
                    <span className='link-a'>
                      <img className='link-logo' src='./icons/discord64.png' />
                      Discord - evosity
                    </span>
                  </li>
                  <li className='link'>
                    <a className='link-a' href='https://steamcommunity.com/id/evosity/'>
                      <img className='link-logo' src='./icons/steam64.png' />
                      Steam - Evosity
                    </a>
                  </li>
                  <li className='link'>
                    <a className='link-a' href='https://open.spotify.com/user/trevorkerney?si=7ba2d3d1c8304eef'>
                      <img className='link-logo' src='./icons/spotify64.png' />
                      Spotify - trevorkerney
                    </a>
                  </li>
                </>
              )
            }
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
