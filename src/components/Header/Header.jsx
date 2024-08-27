import { useEffect, useState } from 'react';
import Navbar from './Navbar/Navbar.jsx'
import './Header.css'

export const Header = () => {
  const [shadow, setShadow] = useState(false);

  useEffect(()=>{
     window.addEventListener('scroll', ()=> {
        window.scrollY >= 50 ? setShadow(true) : setShadow(false);
     })
  },[]);

  return (
    <header className={`header ${shadow ? 'shadow-header' : ''}`} id="header">
        <Navbar />
    </header>
  )
}
