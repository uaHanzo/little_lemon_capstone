import Header from "./Header"
import Footer from "./Footer"
import Reserve_section from "./Reserve_section"

function Reserve({ navigate }) {
    return (
        <>
            <Header />
            <Reserve_section navigate={navigate} />
            <Footer />
        </>
    )
}

export default Reserve