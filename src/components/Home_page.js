import Header from "../components/Header"
import HeroSelection from "../components/Hero_section"
import Highlights from "../components/Highlights"
import Testimonials from "../components/Testimonials"
import About from "../components/About"
import Footer from "../components/Footer"

function Home_page({ navigate }) {
    return (
        <>
            <Header />
            <HeroSelection navigate={navigate} />
            <Highlights />
            <Testimonials />
            <About />
            <Footer />
        </>
    )
}

export default Home_page