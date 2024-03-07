import reserve_photo_1 from "../images/reserve_photo_1.jpg"
import reserve_photo_2 from "../images/reserve_photo_2.jpg"
import "./Reserve_section.css"

import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

import App from "../App";
import { createRoot } from "react-dom/client";

function Reserve_section() {
    const home_page = () => {
        const root = createRoot(document.getElementById("root"));
        root.render(<App />);
    }

    function confirm() {
        const page = createRoot(document.getElementById("reserve_div"));
        page.render(<Reserve_confirm />)
    }

    function Reserve_confirm() {
        return (
            <div className="confirm_message">
                <h1 className="sub_title t_cm">Thank you for booking a table. We are waiting for you in Little Lemon</h1>
                <button className="button b_cm" onClick={home_page}>Return</button>
            </div>
        )
    }

    function dropdown_handler(e) {
        let value = e.target.innerText;
        if (e.target.id === "guest") {
            document.getElementById("dropdown_guest").innerText = value;
            document.getElementById("res_guests").className += " pressed";
        } else if (e.target.id === "time") {
            document.getElementById("dropdown_time").innerText = value;
            document.getElementById("res_time").className += " pressed";
        } else {
            document.getElementById("dropdown_location").innerText = value;
            document.getElementById("res_loc").className += " pressed";
        }
    }

    function date_pressed() {
        document.getElementById("res_date").className += " pressed";
    }

    function Dropdown_guest() {
        return (
            <DropdownButton id="dropdown_guest" className="" title="2" >
                <Dropdown.Item onClick={dropdown_handler} id="guest">1</Dropdown.Item>
                <Dropdown.Item onClick={dropdown_handler} id="guest">2</Dropdown.Item>
                <Dropdown.Item onClick={dropdown_handler} id="guest">3</Dropdown.Item>
                <Dropdown.Item onClick={dropdown_handler} id="guest">4</Dropdown.Item>
            </DropdownButton>
        )
    }

    function Dropdown_time() {
        return (
            <DropdownButton id="dropdown_time" className="" title="19:00" >
                <Dropdown.Item onClick={dropdown_handler} id="time">18:00</Dropdown.Item>
                <Dropdown.Item onClick={dropdown_handler} id="time">19:00</Dropdown.Item>
                <Dropdown.Item onClick={dropdown_handler} id="time">20:00</Dropdown.Item>
                <Dropdown.Item onClick={dropdown_handler} id="time">21:00</Dropdown.Item>
            </DropdownButton>
        )
    }

    function Dropdown_location() {
        return (
            <DropdownButton id="dropdown_location" className="" title="Inside" >
                <Dropdown.Item onClick={dropdown_handler} id="location">Inside</Dropdown.Item>
                <Dropdown.Item onClick={dropdown_handler} id="location">Outside</Dropdown.Item>
            </DropdownButton>
        )
    }

    return (
        <section>
            <div className="reserve_section">
                <div className="reserve" id="reserve_div">
                    <div>
                        <div id="res_guests" className="select_block lead_text">
                            <h2>Number of guests</h2>
                            <div className="data">
                                <Dropdown_guest />
                            </div>
                        </div>
                        <div id="res_date" className="select_block lead_text">
                            <h2>Date of reservation</h2>
                            <input id="inp" type="date" className="sub_title data" onChange={date_pressed} />
                        </div>

                        <div id="res_time" className="select_block lead_text">
                            <h2>Time of reservation</h2>
                            <div className="data">
                                <Dropdown_time />
                            </div>
                        </div>
                        <div id="res_loc" className="select_block lead_text">
                            <h2>Table location</h2>
                            <div className="data">
                                <Dropdown_location />
                            </div>
                        </div>
                    </div>
                    <div className="details">
                        <h3 className="sub_title">Reserve details</h3>
                        <div className="names">
                            <input type="text" placeholder="First name" className="lead_text details_block f_name" />
                            <input type="text" placeholder="Last name" className="lead_text details_block l_name" />
                        </div>
                        <input type="email" placeholder="Email address" className="lead_text details_block email" />
                        <textarea placeholder="Leave a comment for your table reservation" className="lead_text details_block comment" maxLength="200" />
                    </div>
                    <div className="buttons">
                        <button className="button lead_text b1" onClick={home_page}>Back</button>
                        <button className="button lead_text b2" onClick={confirm}>Reserve</button>
                    </div>
                </div>
                <div className="image_stack_2">
                    <div className="top_image_2">
                        <img src={reserve_photo_1} alt="reserve_photo_1" className="reserve_photo_1" />
                    </div>
                    <div className="bottom_image_2">
                        <img src={reserve_photo_2} alt="reserve_photo_2" className="reserve_photo_2" />
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Reserve_section