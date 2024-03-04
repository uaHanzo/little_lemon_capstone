import Navigation from "./Navigation"
import Logo from "./Logo"
import './Header.css';

function Header({ logo_src }) {
    return (
        <header>
            <Logo logo_src={logo_src} />
            <Navigation />
        </header>
    )
}

export default Header