import { useState } from "react";

import './AltPage.scss';
import '../../Shared.scss'


const quotes: [string, string][] = [
  ['Yeah, most of the time, I was convinced, shit, I\'d lost it ...but there were other times ...I thought I was mainlining the secret truth of the universe.', 'Rust Cohle, True Detective, season 1'],
  ['I don\'t sleep, I just dream.', 'Rust Cohle, True Detective, season 1'],
  ['My life has been a circle of violence and degredation, long as I can remember. I\'m ready to tie it off.', 'Rust Cohle, True Detective, season 1'],
  ['You dad. I\'d still have you.', 'Mark Grayson, Invincible'],
  ['So you were always like this.', 'Walter White, Better Call Saul'],
  // ['It\'s not about money ...it\'s about sending a message. Everything burns!', 'The Joker, The Dark Knight'],
  ['Yeah.', 'John Wick, John Wick'],
  // ['They drew first blood.', 'John Rambo, First Blood'],
  ['Nothing is over! Nothing! You just don\'t turn it off! It wasn\'t my war. You asked me I didn\'t ask you!', 'John Rambo, First Blood'],
  ["God didn't make Rambo. I made him.", 'Colonel Trautman, First Blood'],
  // ['Back there I could fly a gunship. I could drive a tank. I was in charge of million dollar equipment! Back here I can\'t even hold a job parking cars!', 'John Rambo, First Blood'],
  ['Ideals are peaceful ...history is violent.', 'Wardaddy, Fury'],
  // ['Shut up and send me more pigs to kill! (translated from German)', 'Wardaddy, Fury'],
  ['I know you hate me preaching. I know it. But what we\'re doing here is a righteous act, gentlemen.', 'Bible, Fury'],
  ['We\'re thieves in a world that don\'t want us no more.', 'Arthur Morgan, Red Dead Redemption 2'],
  // ['When you join my command, you take on debit. A debit you owe me, personally. Each and every man under my command owes me 100 Nazi scalps. And I want my scalps. And all y\'all will get me 100 Nazi scalps taken from the heads of 100 dead Nazis. Or you will die tryin!', 'Aldo Raine, Inglorious Basterds'],
  ['Can you hear the music, Robert?', 'Niels Bohr, Oppenheimer'],
  ['So here we are, hmm? Lost in your quantum world of probabilities ...and needing certainty.', 'Albert Einstein, Oppenheimer'],
  ['Excuse me, gentlemen, if I become stirred. But I am.', 'Vannevar Bush, Oppenheimer'],
  ['It\'s always Christmas.', 'Gemma Scout (innie), Severance, season 2'],
];

const AltPage = (props: {imgUrl: string, incrementProfile: () => void}) => {

  const [quoteIndex, setQuoteIndex] = useState<number>(Math.floor(Math.random() * quotes.length));
  const incrementQuote = () => {
    if (quoteIndex >= quotes.length - 1)
      setQuoteIndex(0);
    else
      setQuoteIndex(prev => prev + 1)
  };

  return (
    <div id='header'>
      <div id='profile'>
        <div id='img-box'>
          <button onClick={props.incrementProfile}>
            <img 
              id='profile-img' 
              src={props.imgUrl}
              alt='Trevor Kerney'
            />
          </button>
        </div>
        <div id='about'>
          <h1 className='ab-sec' id='name'>Evosity</h1>
          <div className='quote'>
            <p>{quotes[quoteIndex][0]}</p>
            <p><i>{`- ${quotes[quoteIndex][1]}`}</i></p>
            <div id='quote-btn-box'>
              <button onClick={incrementQuote}>
                next
                {/* <img src='/static/icons/next.png' alt='next quote' /> */}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div id='links-box'>
        <ul id='links'>
          {/* <li className='link'>
            <span className='link-a'>
              <img className='link-logo' src='/static/icons/discord64.png' alt='discord' />
              Discord - evosity
            </span>
          </li> */}
          <li className='link'>
            <a className='link-a' href='https://steamcommunity.com/id/evosity/' target='_blank' rel='noreferrer'>
              <img className='link-logo' src='/static/icons/steam64.png' alt='steam' />
              Steam - Evosity
            </a>
          </li>
          <li className='link'>
            <a className='link-a' href='https://open.spotify.com/user/trevorkerney' target='_blank' rel='noreferrer'>
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