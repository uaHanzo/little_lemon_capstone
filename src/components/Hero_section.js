import { useNavigate } from 'react-router-dom';
import main_photo from "../images/main_photo.jpg"
import "./Hero_section.css"

function Hero_section() {
    const navigate = useNavigate();
    return (
        <main>
            <div className="main">
                <div>
                    <h1 className="title">
                        Little Lemon
                    </h1>
                    <h2 className="sub_title">
                        Chicago
                    </h2>
                    <h3 className="lead_text">
                        We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
                    </h3>
                    <button className="button lead_text" onClick={() => {
                        navigate("/reserve")
                    }}>Reserve a Table</button>
                </div>
                <div>
                    <img src={main_photo} alt="main_photo" />
                </div>
            </div>
        </main>
    )
}

export default Hero_section