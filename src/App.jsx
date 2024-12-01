import './App.css'
import { Navbar } from './components/Navbar/Navbar'
import usa from './assets/flags/banderaUsa.svg'
import argentina from './assets/flags/banderaArgentina.svg'
import espana from './assets/flags/banderaEspana.svg'
import logoFoter from './assets/logo.svg'

function App() {
  return (
    <>
      <div className='container-home'>
        <h1>WELCOME TO MY EXIBITION</h1>
      </div>
      <div className='container'>
      <span></span>
        <p className='text-home'>NICOLAS SCHIAVONE IS AN ARGENTINIAN BASED IN BARCELONA.</p>
      </div>
      <Navbar/>
      <div class="container">
        <span></span>
        <p className='text-home'>A MULTIDISCIPLINARY DESIGNER WHO CREATES VISUALS SYSTEM UNDER THE OATH OF INNOVATION, IDENTITY AND FUNCTIONALITY</p>
      </div>
      <div className='container-flag'>
        <div>
          <img src={argentina} width={'30px'} alt="estados unidos"/>
          <p>ARG 18:00 |</p>
        </div>
        <div>
        <img src={espana} width={'30px'} alt="estados unidos"/>
        <p>ESP 22:00 |</p>
        </div>
        <div>
        <img src={usa} width={'30px'} alt="estados unidos"/>
        <p>USA 18:00</p>
        </div>
      </div>
      <div className="conainer-schiavone">
        <div className="logoFoter">
          <img src={logoFoter} width={'100px'} alt="Nicolas Schiavone" />
        </div>
        <div className="translating">
          <p>“TRANSLATING IDEAS”</p>
        </div>
      </div>
      {/* footer home */}
      <div class="container-footer-home">
        <div class="separator"></div>
          <div class="links">
            <span>LINKEDIN</span> /
            <span>INSTAGRAM</span>
          </div>
        <div class="separator"></div>
      </div>
    </>
    
  )
}

export default App
