import Navigation from "./Navigation"
import Logo from "./Logo"
import './Header.css';

function Header({ reserve_page }) {
    return (
        <header>
            <Logo />
            <Navigation reserve_page={reserve_page} />
        </header>
    )
}

export default Header