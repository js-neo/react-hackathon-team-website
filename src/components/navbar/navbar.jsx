import React, { useState } from "react";
import NavBarTop from "./navbar-top";
import NavBarBottom from "./navbar-bottom";

const Navbar = () => {
    const [collapse, setCollapse] = useState(true);

    const toggleCollapse = () => {
        setCollapse(!collapse);
    };

    return (
        <header className="header-wrapper">
            <NavBarTop collapse={collapse}></NavBarTop>{" "}
            <NavBarBottom toggleCollapse={toggleCollapse}></NavBarBottom>{" "}
        </header>
    );
};

export default Navbar;
