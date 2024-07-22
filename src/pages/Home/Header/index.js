import Button from '../../../components/Button/index.js';
import Logo from '../../../assets/img/logo.png';

import './Header.css'

const Header = () => {
    return (
        <header className="header">
        <a href="a"><img src={Logo} alt="logo da STFM" /></a>
        <nav className="navigation">
            <a href="a">Home</a>
            <a href="a">Sobre</a>
            <a href="a">Serviços</a>
            <a href="a">Blog</a>
            <a href="a">Localização</a>
        </nav>
        <Button className="button-header" text="Comece já" />
    </header>
    )
}

export default Header