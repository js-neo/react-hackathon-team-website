import React, { useState } from "react";
import NavbarTop from "./Navbar-top";
import NavbarBottom from "./Navbar-bottom";

const Navbar = () => {
    const [collapse, setCollapse] = useState(true);

    const toggleCollapse = () => {
        setCollapse(!collapse);
    };

    return (
        <header className="header-wrapper">
            <NavbarTop collapse={collapse}></NavbarTop>{" "}
            <NavbarBottom toggleCollapse={toggleCollapse}></NavbarBottom>{" "}
        </header>
    );
};

export default Navbar;
