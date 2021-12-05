import clsx from 'clsx';
import style from './header.module.css';
import Menu from './Menu';
import Navbar from './Navbar';
import News from './News';


const Header = () => {
    return (
        <>
            <header className={clsx(style.header)}>
                <Menu/>
                <Navbar/>
                <News/>
            </header>
        </>
    )
}

export default Header;