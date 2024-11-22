import './App.css'
import { Navbar } from './components/Navbar/Navbar'

function App() {
  return (
    <>
      <div className='container-home'>
        <h1>WELCOME TO MY EXIBITION</h1>
      </div>
      <div className='container-home-p'>
        <p className='text-home'>NICOLAS SCHIAVONE IS AN ARGENTINIAN BASED IN BARCELONA.</p>
      </div>
      <Navbar/>
    </>
    
  )
}

export default App
