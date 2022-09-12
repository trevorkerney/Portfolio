import { useState } from 'react';

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
            <h4 className='ab-sec' id='job'>
              {
                (persona)
                ? (
                  <>
                    <img className='ab-logo' src='./icons/gs-vb64.png' alt='Geosonics-VibraTech' />
                    Special Projects Developer at Vibra-Tech
                  </>
                )
                : (
                  <>
                    <img className='ab-logo' src='./icons/minecraft64.png' alt='the bois creative' />
                    The bois creative MC - 51.79.79.180:25591
                  </>
                )
              }
            </h4>
            <h5 className='ab-sec' id='school'>
              {
                (persona)
                ? (
                  <>
                    <img className='ab-logo' src='./icons/wku64.jpg' alt='Western Kentucky University' />
                    Computer Science student at WKU
                  </>
                )
                : (
                  <>
                    Minecraft&nbsp;&nbsp;-&nbsp;&nbsp;MORDHAU&nbsp;&nbsp;-&nbsp;&nbsp;CS:GO&nbsp;&nbsp;-&nbsp;&nbsp;Insurgency
                  </>
                )
              }
            </h5>
            <p className='ab-sec' id='bio'>
              {
                (persona)
                ? (
                  "Hello, I am a (mostly) self-taught software engineering generalist driven by a passion for creating efficient, reliable, and secure applications that respect user privacy. I have a point of contention with non-creative software products that are not free and open source, as these products tend to inhibit customization, promote overcommercialization of the internet, deny peace-of-mind about privacy, and fail the test of time."
                )
                : (
                  "Why so serious?"
                )
              }
            </p>
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
                      <img className='link-logo' src='./icons/xbox64.png' />
                      Xbox - Evosity
                    </span>
                  </li>
                  <li className='link'>
                    <a className='link-a' href='https://steamcommunity.com/id/evosity/'>
                      <img className='link-logo' src='./icons/steam64.png' />
                      Steam - Evosity
                    </a>
                  </li>
                  <li className='link'>
                    <a className='link-a' href='https://github.com/evosity'>
                      <img className='link-logo' src='./icons/github64.png' />
                      GitHub - Evosity
                    </a>
                  </li>
                  <li className='link'>
                    <a className='link-a' href='https://open.spotify.com/user/trevorkerney?si=7ba2d3d1c8304eef'>
                      <img className='link-logo' src='./icons/spotify64.png' />
                      Spotify - trevorkerney
                    </a>
                  </li>
                  <li className='link'>
                    <span className='link-a'>
                      <img className='link-logo' src='./icons/discord64.png' />
                      Discord - Evosity#0001
                    </span>
                  </li>
                </>
              )
            }
          </ul>
        </div>
      </div>

      {/* <div id='construction'>
        <h2>This page is currently under construction...</h2>
      </div> */}
    </div>
  );
}

export default Portfolio;
