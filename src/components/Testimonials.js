import "./Testimonials.css"

function Testimonials({ photo }) {
    const star = <img src={photo.star} alt="star" className="star" />
    return (
        <section className="testimonials">
            <div className="testimonials_main">
                <h1 className="title">Testimonials</h1>
                <div className="review">
                    <div className="review_1">
                        <div className="stars">{star}{star}{star}{star}</div>
                        <div className="photo">
                            <img src={photo.photo_1} alt="photo_1" className="photo_1" />
                            <div className="reviewer_name lead_text">Olivia</div>
                        </div>
                        <div className="review_text paragraph_text">
                            The service was exceptional. Our server was attentive and knowledgeable about the menu. She made great recommendations and was always there when we needed her. The staff as a whole seemed to work together seamlessly.
                        </div>
                    </div>
                    <div className="review_2">
                        <div className="stars">{star}{star}{star}{star}{star}</div>
                        <div className="photo">
                            <img src={photo.photo_2} alt="photo_2" className="photo_2" />
                            <div className="reviewer_name lead_text">Emma</div>
                        </div>
                        <div className="review_text paragraph_text">
                            One thing that stood out to me was the attention to detail in the presentation of the dishes. Each plate was beautifully arranged and it was evident that the chef takes great pride in their work.
                        </div>
                    </div>
                    <div className="review_3">
                        <div className="stars">{star}{star}{star}{star}{star}</div>
                        <div className="photo">
                            <img src={photo.photo_3} alt="photo_3" className="photo_3" />
                            <div className="reviewer_name lead_text">Liam</div>
                        </div>
                        <div className="review_text paragraph_text">
                            Overall, I highly recommend this restaurant. The combination of great service, inviting atmosphere, and delicious food make it a must-try for any food lover. I will definitely be returning and can't wait to try more dishes from their menu.
                        </div>
                    </div>
                    <div className="review_4">
                        <div className="stars">{star}{star}{star}{star}{star}</div>
                        <div className="photo">
                            <img src={photo.photo_4} alt="photo_4" className="photo_4" />
                            <div className="reviewer_name lead_text">Robert</div>
                        </div>
                        <div className="review_text paragraph_text">
                            I recently dined at a new restaurant in town and I must say, I was thoroughly impressed. From the moment I walked in, the ambiance was warm and inviting. The decor was modern yet cozy, creating the perfect atmosphere for a meal.
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonials