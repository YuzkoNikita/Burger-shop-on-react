import { useState } from 'react';
import logo_burger from '../../../assets/logo-burger.svg'
import './Navbar.css'
import { Link } from "react-scroll";

export default function Navbar() {
  {/*======= MOBILE MENU ==========*/}
  const [mobileMenu, setMobileMenu] = useState(false);

  const toggleMenu = () => {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  }

  const closeToggleMenu = () => {
    mobileMenu ? setMobileMenu(false) : '';
  }

  return (
    <nav className='nav container'>
    
    <Link to='home' smooth={true} offset={0} duration={500} className="nav_logo">
      <div>
          <img src={logo_burger} alt="" />
      </div>

       Burger
    </Link>

    <div className={`nav_menu ${mobileMenu ? 'show-menu' : ''}`} id="nav-menu">
       <ul className="nav_list">
          <li><Link onClick={closeToggleMenu} to='home' smooth={true} offset={0} duration={500} className="nav_link">Home</Link></li>

          <li><Link onClick={closeToggleMenu} to='recipe' smooth={true} offset={0} duration={500} className="nav_link">Recipe</Link></li>

          <li><Link onClick={closeToggleMenu} to='popular' smooth={true} offset={0} duration={500} className="nav_link">Popular</Link></li>

          <li><Link onClick={closeToggleMenu} to='delivery' smooth={true} offset={-100} duration={500} className="nav_link">Delivery</Link></li>

          <li><Link onClick={closeToggleMenu} to='contact' smooth={true} offset={0} duration={500} className="nav_link">Contact</Link></li>
       </ul>

       <div className="nav_close" id="nav-close">
          <svg onClick={toggleMenu} xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M10.586 12L2.793 4.207l1.414-1.414L12 10.586l7.793-7.793l1.414 1.414L13.414 12l7.793 7.793l-1.414 1.414L12 13.414l-7.793 7.793l-1.414-1.414z"></path></svg>
       </div>
    </div>

    <div className="nav_toggle" id="nav-toggle">
      <svg onClick={toggleMenu} xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M7 11.5a4.5 4.5 0 1 1 0-9a4.5 4.5 0 0 1 0 9m0 10a4.5 4.5 0 1 1 0-9a4.5 4.5 0 0 1 0 9m10-10a4.5 4.5 0 1 1 0-9a4.5 4.5 0 0 1 0 9m0 10a4.5 4.5 0 1 1 0-9a4.5 4.5 0 0 1 0 9"></path></svg>
    </div>
    </nav>
  )
}
