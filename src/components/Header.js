import React from "react"

const Header = ({ logoSrc }) => {
    return (
        <header>
            <img src={logoSrc} alt="logo" height="100px" />
        </header>
    )
}

export default Header