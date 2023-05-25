import React from 'react';
import Image from 'next/image';
import styles from '../styles/Header.module.css';
import Logo from './images/logo-notext.svg';


const Header = () => {
  const handleLinkClick = (event: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    event.preventDefault();
    document.getElementById(targetId)?.scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.align}>
        <a href="#home" onClick={(e) => handleLinkClick(e, 'home')}><Image src={Logo} alt="Logo" className={styles.logo}/></a>
        <a href="#home" onClick={(e) => handleLinkClick(e, 'home')}>Retro Audio</a>
        </div>
        <div>
            <a href="#about" onClick={(e) => handleLinkClick(e, 'about')}>About</a>
            <a href="#product" onClick={(e) => handleLinkClick(e, 'product')}>Products</a>
            <a href="#contactform" onClick={(e) => handleLinkClick(e, 'contactform')}>Contact</a>
        </div>
        <div>
        <a href="#support">Support</a>
        </div>
      </nav>
    </header>
  )
}

export default Header