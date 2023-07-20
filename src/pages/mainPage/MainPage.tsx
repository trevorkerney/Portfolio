import './MainPage.css';
import '../../styles/EgoShared.css'

const MainPage = () => {
  return (
    <div id='header'>
      <div id='profile'>
        <div id='img-box'>
          <img 
          id='profile-img' 
          src='/static/img/me.png'
          alt='Trevor Kerney' />
        </div>
        <div id='about'>
          <h1 className='ab-sec' id='name'>Trevor Kerney</h1>
          <h4 className='ab-sec' id='job'>
            <img className='ab-logo' src='/static/icons/gs-vb64.png' alt='Geosonics-VibraTech' />
            Full-Stack Software Engineer at Vibra-Tech
          </h4>
          <p className='ab-sec' id='bio'>
            Hello, I am a (mostly) self-taught software engineering generalist driven by a passion for creating efficient, reliable, and secure applications. I have a point of contention with (most) software products that are not free and open source, as these products tend to inhibit customization, promote overcommercialization of the internet, and create an illusion of privacy.
          </p>
        </div>
      </div>

      <div id='links-box'>
        <ul id='links'>
          <li className='link'>
            <a className='link-a' href='https://github.com/trevorkerney'>
              <img className='link-logo' src='/static/icons/github64.png' alt='github' />
              GitHub - trevorkerney
            </a>
          </li>
          <li className='link'>
            <a className='link-a' href='https://www.linkedin.com/in/trevorkerney'>
              <img className='link-logo' src='/static/icons/linkedin64.png' alt='linkedin' />
              LinkedIn - trevorkerney
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default MainPage;
