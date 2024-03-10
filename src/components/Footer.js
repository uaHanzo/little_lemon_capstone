import { Link } from 'react-router-dom';
import footer_logo from "../images/footer_logo.png"
import "./Footer.css"

function Footer() {
    return (
        <footer className="footer">
            <div className="footer_main">
                <div className="footer_logo">
                    <img src={footer_logo} alt="footer_logo" />
                </div>
                <div className="footer_navigation">
                    <h2 className="section_title">Site Navigation</h2>
                    <div className="paragraph_text">
                        <Link to="/">Home</Link>
                        <a href="/#about">About</a>
                        <a href="/#menu">Menu</a>
                        <Link to="/reserve">Reservation</Link>
                        <a href="/#order">Order Online</a>
                        <a href="/#login">Login</a>
                    </div>
                </div>
                <div className="footer_contacts">
                    <h2 className="section_title">Our contacts</h2>
                    <div className="paragraph_text">
                        <a href="/#address">111 A St, Chicago, IL</a>
                        <a href="/#tel">+1 234 56 78 90</a>
                        <a href="/#email">littlelemon@example.com</a>
                    </div>
                </div>
                <div className="footer_socials">
                    <h2 className="section_title"> We in Social Media </h2>
                    <div className="paragraph_text">
                        <a href="https://www.facebook.com/">Facebook</a>
                        <a href="https://www.instagram.com/">Instagram</a>
                        <a href="https://www.youtube.com/">YouTube</a>
                        <a href="https://web.telegram.org/">Telegram</a>
                        <a href="https://x.com/">X</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer