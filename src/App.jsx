import React from 'react'
import './App.css'
import usa from './assets/flags/banderaUsa.svg'
import argentina from './assets/flags/banderaArgentina.svg'
import espana from './assets/flags/banderaEspana.svg'
import logoFoter from './assets/logo.svg'
import { Routes, Route, Link, BrowserRouter, NavLink } from 'react-router-dom'
import about from './assets/nav/aboutmeNegativo.svg'
import archive from './assets/nav/archiveNegativo.svg'
import talks from './assets/nav/letsTalkNegativo.svg'
import projects from './assets/nav/projectsNegativo.svg'
import { Projects } from './components/Projects/Projects'
import { Aboutme } from './components/Aboutme/Aboutme'
import { Archive } from './components/Archive/Archive'
import { Talks } from './components/Talks/Talks'
import { Inicio } from './components/Inicio/Inicio'

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
          <div className='navBar'>
          <BrowserRouter>
            <nav>
              <ul>
                <li><NavLink to={"/aboutme"}><img src={about} alt="about me"/></NavLink></li>
                <li><NavLink to={"/projects"}><img src={projects} alt="projects"/></NavLink></li>
                <li><NavLink to={"/letTalk"}><img src={talks} alt="talks"/></NavLink></li>
                <li><NavLink to={"/archive"}></NavLink><img src={archive} alt="archive"/></li>
              </ul>
            </nav>
          <Routes>
            <Route path='/' element={<Inicio/>}/> 
            <Route path='/inicio' element={<Inicio/>}/> 
            <Route path='/aboutme' element={<Aboutme/>}/> 
            <Route path='/projects' element={<Projects/>}/> 
            <Route path='/letTalk' element={<Talks/>}/> 
            <Route path='/archive' element={<Archive/>}/> 
            <Route path='*' element={(<><h1>Error 404</h1></>)}/> 
          </Routes>
        </BrowserRouter>
          </div>
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
