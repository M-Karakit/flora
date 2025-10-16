import { useState } from 'react';
import styles from './NavBar.module.css';

interface NavProps {
    logo : string;
    links : string[];
    btn : {
        content : string;
    };
    icon: string;
    closeIcon: string
}

const NavBar = ({logo ,links, btn, icon, closeIcon} : NavProps) => {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('Home');

  const activeLink = (link: string) => {
    setActive(link);
    toggleMenu();
  }

  const toggleMenu = () => {
    setOpen(!open)
  }
  
  return (
    <nav className={styles.navBar}>
      <div className={styles.logo}>
        <img src={logo} alt="logo" />
      </div>
      <div className={`${styles.navMenu} ${open ? styles.navMenuOpen : ''}`}>
        <ul className={styles.navLinks}>
          {links.map(link => (
              <li 
                className={`line-height-100 font-weight-500 ${styles.linkItem} ${link === active ? styles.activeLink : ''}`} 
                key={link}
                onClick={() => activeLink(link)}
              >
                {link}
              </li>
          ))}
        </ul>
        <button className={`font-weight-400 line-height-100 ${styles.btn}`}>
          {btn.content}
        </button>
      </div>
        <div className={styles.hamburgerIcon} onClick={toggleMenu}>
          <img src={open ? closeIcon : icon} alt="hamburger-icon" />
        </div>
    </nav>
  )
}

export default NavBar
