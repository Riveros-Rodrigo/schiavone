import about from '../../assets/nav/aboutmeNegativo.svg'
import archive from '../../assets/nav/archiveNegativo.svg'
import talks from '../../assets/nav/letsTalkNegativo.svg'
import projects from '../../assets/nav/projectsNegativo.svg'
import './Navbar.css'

export const Navbar = () => {
  return (
    <div className='navBar'>
      <nav>
        <ul>
          <li><NavLink to={"/aboutme"}><img src={about} alt="about me"/></NavLink></li>
          <li><NavLink to={"projects"}><img src={projects} alt="projects"/></NavLink></li>
          <li><NavLink to={"letTalk"}><img src={talks} alt="talks"/></NavLink></li>
          <li><NavLink to={"archive"}></NavLink><img src={archive} alt="archive"/></li>
        </ul>
      </nav>
    </div>
  )
}
