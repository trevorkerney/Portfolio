import './MainPage.scss';
import '../../Shared.scss'

const MainPage = () => {
  return (
    <>
      <div id='header'>

        <div id='profile'>
          <div id='img-box'>
            <img 
            id='profile-img' 
            src='/static/imgs/me.png'
            alt='Trevor Kerney' />
          </div>
          <div id='about'>
            <h1 className='ab-sec' id='name'>Trevor Kerney</h1>
            <h4 className='ab-sec' id='job'>
              <img className='ab-logo' src='/static/icons/gs-vb64.png' alt='Geosonics-VibraTech' />
              Full-Stack Software Engineer at Vibra-Tech
            </h4>
            <p className='ab-sec' id='bio'>
              I'm a (mostly) self-taught software engineering generalist driven by a passion for creating efficient, reliable, and secure applications. I have a point of contention with (most) software products that are not free and open source, as these products tend to inhibit customization, promote overcommercialization of the internet, and create an illusion of privacy.
            </p>
          </div>
        </div>

        <div id='links-box'>
          <ul id='links'>
            <li className='link'>
              <a className='link-a' href='https://github.com/trevorkerney' target='_blank' rel='noreferrer'>
                <img className='link-logo' src='/static/icons/github64.png' alt='github' />
                GitHub - trevorkerney
              </a>
            </li>
            <li className='link'>
              <a className='link-a' href='https://www.linkedin.com/in/trevorkerney' target='_blank' rel='noreferrer'>
                <img className='link-logo' src='/static/icons/linkedin64.png' alt='linkedin' />
                LinkedIn - trevorkerney
              </a>
            </li>
          </ul>
        </div>

      </div>

      <div id='projects-box'>
        <ul id='projects'>
          <li>
            <div>
              <img src='/static/icons/waverunner.png' alt='Waverunner' />
              <h2>Waverunner</h2>
            </div>
            <p>A multimedia library written in Rust and Typescript, using <a href='https://tauri.app/' target='_blank' rel='noreferrer' className='selectable'>Tauri</a> and React. Currently in delayed development.</p>
            <a href='https://github.com/trevorkerney/Waverunner' target='_blank' rel='noreferrer' className='add-link'>
              <img src='/static/icons/github64.png' alt='Waverunner on GitHub' />
            </a>
          </li>
          <li>
            <div>
              <img src='/static/icons/powsim.png' alt='POWsim' />
              <a href='https://powsim.trevorkerney.com' target='_blank' rel='noreferrer'><h2>POWsim</h2></a>
            </div>
            <p>
              A proof-of-work simulator written in Typescript, using React.
            </p>
            <a href='https://github.com/trevorkerney/POWsim' target='_blank' rel='noreferrer' className='add-link'>
              <img src='/static/icons/github64.png' alt='POWsim on GitHub' />
            </a>
          </li>
        </ul>
      </div>
    </>
  )
}

export default MainPage;
