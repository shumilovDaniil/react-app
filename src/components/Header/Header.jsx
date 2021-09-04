import logo from '../../img/logo.svg';
import headerStyle from './Header.module.css';

function Header() {
    return (
        <header className={headerStyle.header}>
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Rockstar_Games_Logo.svg/2226px-Rockstar_Games_Logo.svg.png'  alt='#'/>
            <strong className={headerStyle.title}/>
        </header>
    );
}

export default Header;