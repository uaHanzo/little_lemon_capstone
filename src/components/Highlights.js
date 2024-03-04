import "./Highlights.css"

function Highlights({ dish }) {
    return (
        <section className="high">
            <div className="high_title">
                <h1 className="title tt">
                    This weeks specials!
                </h1>
                <button className="button lead_text btn_om">Online Menu</button>
            </div>
            <div className="high_cards">
                <div className="card_1">
                    <img src={dish.dish_1} alt="dish_1" className="card" />
                    <h3 className="card_title">Greek salad <span>$12.99</span></h3>
                    <h3 className="paragraph_text">The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</h3>
                    <h3 className="order highlight_text">Order a delivery<img src={dish.delivery_icon} alt="delivery_icon" className="icon" /></h3>
                </div>
                <div className="card_2">
                    <img src={dish.dish_2} alt="dish_2" className="card" />
                    <h3 className="card_title">Bruschetta <span>$5.99</span></h3>
                    <h3 className="paragraph_text">Our Bruschetta is made from frilled bread that has been smeared with garlic and seasoned with salt and olivre oil.</h3>
                    <h3 className="order highlight_text">Order a delivery<img src={dish.delivery_icon} alt="delivery_icon" className="icon" /></h3>
                </div>
                <div className="card_3">
                    <img src={dish.dish_3} alt="dish_3" className="card" />
                    <h3 className="card_title">Lemon dessert <span>$5.00</span></h3>
                    <h3 className="paragraph_text">This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</h3>
                    <h3 className="order highlight_text">Order a delivery<img src={dish.delivery_icon} alt="delivery_icon" className="icon" /></h3>
                </div>
            </div>
        </section>
    )
}

export default Highlights