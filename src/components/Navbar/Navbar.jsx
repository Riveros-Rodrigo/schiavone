import about from '../../assets/nav/aboutmeNegativo.svg'
import archive from '../../assets/nav/archiveNegativo.svg'
import talks from '../../assets/nav/letsTalkNegativo.svg'
import projects from '../../assets/nav/projectsNegativo.svg'
import './Navbar.css'

export const Navbar = () => {
  return (
    <div className='navBar'>
        <img src={about} alt="about me"/>
        <img src={projects} alt="about me"/>
        <img src={talks} alt="about me"/>
        <img src={archive} alt="about me"/>
    </div>
  )
}
