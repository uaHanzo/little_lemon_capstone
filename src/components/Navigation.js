function Navigation({ reserve_page }) {
    return (
        <nav className="section_title">
            <a href="/">Home</a>
            <a href="/#about">About</a>
            <a href="/#menu">Menu</a>
            <a href="/#reservation" onClick={reserve_page}>Reservation</a>
            <a href="/#order_online">Order online</a>
            <a href="/#login">Login</a>
        </nav>
    )
}

export default Navigation