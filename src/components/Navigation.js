import '../assets/style/Navigation.css';
import logo from '../assets/img/logo.png';
import Button from './Button';

export default function Navigation() {
    return(
        <>
            <a href="a"><img src={logo} alt="Logo" /></a>
            <nav className="navLinks">
                <a href="a">Home</a>
                <a href="a">Sobre</a>
                <a href="a">Serviços</a>
                <a href="a">Blog</a>
                <a href="a">Localização</a>
            </nav>
            <Button texto="Comece Já" />
        </>
    );
}