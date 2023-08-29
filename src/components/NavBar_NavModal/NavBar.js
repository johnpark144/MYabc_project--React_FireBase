import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { authService } from '../../fBase';
import styles from './NavBar_NavModal.module.css';

export default function NavBar({ setNavModal, userObj }) {
  // NavModal (click Hamburger Icon)
  function showModal() {
    setNavModal(true);
    document.body.style.overflow = 'hidden';
  }

  // LogOut
  const navigate = useNavigate();
  const onLogOutClick = () => {
    authService.signOut();
    navigate('/');
  };

  // Scroll up to the top
  const scrollUp = () => {
    window.scrollTo(0, 0);
  };

  // Whenever scroll event happen, Change the value of scroll Y-coordinate
  const [scrollYValue, setScrollYValue] = useState(window.scrollY);
  window.addEventListener('scroll', () => {
    setScrollYValue(window.scrollY);
  });

  return (
    <div
      id={scrollYValue <= 500 ? styles.navbar : styles.navbarHidden}
      className='drop-shadow-lg font-serif bg-gradient-to-r from-purple-50 via-indigo-50 to-pink-50'
    >
      <div>
        {/* MYabc Logo and letter */}
        <Link to='/' className='flex flex-row'>
          <img
            className='flex-none w-14 h-14'
            onClick={scrollUp}
            src={
              'https://user-images.githubusercontent.com/106279616/217299245-76306248-6c80-4bf8-a1f0-ccb962648a8f.png'
            }
            width='50px'
            alt='ABC_LOGO'
          />
          <span id={styles.myabc} className='grow h-14 self-center'>
            MYabc
          </span>
        </Link>
        {/* Menus */}
        <div className={styles.menus}>
          <Link to='/memorize' className={styles.menu}>
            <span className='material-icons-outlined'>psychology</span>
            <span role='link'>Memorize </span>
          </Link>
          <span>|&nbsp;</span>
          <Link to='/dictionary' className={styles.menu}>
            <span className='material-icons-outlined'>menu_book</span>
            <span role='link'>Dictionary</span>
          </Link>
          <span>|&nbsp;</span>
          <Link to='/video' className={styles.menu}>
            <span className='material-icons-outlined'>ondemand_video</span>
            <span role='link'>Video</span>
          </Link>
          <span>|&nbsp;</span>
          <Link to='/grammarlyapp' className={styles.menu}>
            <span className='material-icons-outlined'>sticky_note_2</span>
            <span role='link'>Grammarly</span>
          </Link>
          {/* UserName, Logout button */}
          <div id={styles.nameLogout}>
            <div>{userObj.displayName}</div>
            <button onClick={onLogOutClick}>
              <div
                id={styles.logout}
                className='rounded-lg transition shadow-gray-500/50 shadow-md ease-in-out
                            delay-50 bg-gray-400 hover:-translate-y-1 hover:bg-gray-300 duration-300'
              >
                Log Out
              </div>
            </button>
          </div>
        </div>
        {/* Hamburger Icon (When the display size shrinked) */}
        <span
          onClick={showModal}
          id={styles.menuIcon}
          className='cursor-pointer material-icons-outlined'
        >
          menu
        </span>
      </div>
    </div>
  );
}
