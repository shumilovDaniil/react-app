import navStyle from './Nav.module.css';
import {NavLink} from 'react-router-dom';

function Nav() {
  return (
    <nav>
      <ul className={navStyle.nav}>
        <li className={navStyle.item}><NavLink to='/profile'>Profile</NavLink></li>
        <li className={navStyle.item}><NavLink to='/dialogs'>Messages</NavLink></li>
        <li className={navStyle.item}><NavLink to='/news'>News</NavLink></li>
        <li className={navStyle.item}><NavLink to='/music'>Music</NavLink></li>
        <li className={navStyle.item}><NavLink to='/settings'>Settings</NavLink></li>
      </ul>
    </nav>
  );
}

export default Nav;