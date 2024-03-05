import "./About.css"

function About({ about_photo }) {
    return (
        <section className="about">

            <div>
                <h1 className="title">
                    Little Lemon
                </h1>
                <h2 className="sub_title">
                    Chicago
                </h2>
                <h3 className="lead_text">
                    Little Lemon is owned by two Italian brothers, Mario and Adrian, who moved to the United States to pursue their shared dream of owning a restaurant. To craft the menu, Mario relies on family recipes and his experience as a chef in Italy.
                </h3>
            </div>
            <div className="image-stack">
                <div className="top_image">
                    <img src={about_photo.about_photo_1} alt="about_photo_1" className="about_photo_1" />
                </div>
                <div className="bottom_image">
                    <img src={about_photo.about_photo_2} alt="about_photo_2" className="about_photo_2" />
                </div>
            </div>
        </section>
    )
}

export default About