import { useState } from "react";

import './AltPage.css';
import '../../styles/EgoShared.css'

const AltPage = () => {
  const quotes: [string, string][] = [
    ['Yeah, most of the time, I was convinced, shit, I\'d lost it... but there were other times... I thought I was mainlining the secret truth of the universe.', 'Rust Cohle, True Detective, season 1'],
    ['You dad. I\'d still have you.', 'Mark Grayson, Invincible'],
    ['So you were always like this.', 'Walter White, Better Call Saul'],
    ['It\'s not about money... it\'s about sending a message. Everything burns!', 'The Joker, The Dark Knight'],
    ['Yeah.', 'John Wick, John Wick'],
    ['They drew first blood.', 'John Rambo, First Blood'],
    ['Nothing is over! Nothing! You just don\'t turn it off! It wasn\'t my war. You asked me I didn\'t ask you!', 'John Rambo, First Blood'],
    ['Back there I could fly a gunship. I could drive a tank. I was in charge of million dollar equipment! Back here I can\'t even hold a job parking cars!', 'John Rambo, First Blood'],
  ];

  const [quoteIndex, setQuoteIndex] = useState<number>(Math.floor(Math.random() * quotes.length));

  const incrementQuote = () => {
    if (quoteIndex >= quotes.length - 1)
      setQuoteIndex(0);
    else
      setQuoteIndex(prev => prev + 1)
  }

  const getRandQuote = () => {
    let index = Math.floor(Math.random() * quotes.length);
    while (index === quoteIndex)
      index = Math.floor(Math.random() * quotes.length);
    setQuoteIndex(index);
  };

  return (
    <div id='header'>
      <div id='profile'>
        <div id='img-box'>
          <img 
          id='profile-img' 
          src='/static/img/joker600.jpg'
          alt='Trevor Kerney' />
        </div>
        <div id='about'>
          <h1 className='ab-sec' id='name'>Evosity</h1>
          <div className='quote'>
            <p>{quotes[quoteIndex][0]}</p>
            <p><i>-{quotes[quoteIndex][1]}</i></p>
            <div id='quote-btn-box'>
              <button
                onClick={incrementQuote}
              >
                <img src='/static/icons/next.png' alt='next quote' />
              </button>
              <button
                onClick={getRandQuote}
              >
                <img src='/static/icons/shuffle.png' alt='shuffle quote' />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div id='links-box'>
        <ul id='links'>
          <li className='link'>
            <span className='link-a'>
              <img className='link-logo' src='/static/icons/discord64.png' alt='discord' />
              Discord - evosity
            </span>
          </li>
          <li className='link'>
            <a className='link-a' href='https://steamcommunity.com/id/evosity/'>
              <img className='link-logo' src='/static/icons/steam64.png' alt='steam' />
              Steam - Evosity
            </a>
          </li>
          <li className='link'>
            <a className='link-a' href='https://open.spotify.com/user/trevorkerney?si=7ba2d3d1c8304eef'>
              <img className='link-logo' src='/static/icons/spotify64.png' alt='spotify' />
              Spotify - trevorkerney
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default AltPage;