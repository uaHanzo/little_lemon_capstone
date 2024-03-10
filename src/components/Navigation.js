import { Link } from 'react-router-dom';

function Navigation() {
    return (
        <>
            <nav className="section_title">
                <Link to="/">Home</Link>
                <a href="/#about">About</a>
                <a href="/#menu">Menu</a>
                <Link to="/reserve">Reservation</Link>
                <a href="/#order_online">Order online</a>
                <a href="/#login">Login</a>
            </nav>
        </>
    )
}

export default Navigation