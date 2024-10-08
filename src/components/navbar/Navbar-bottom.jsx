import React from "react";
import { PropTypes } from "prop-types";
import MenuItem from "./MenuItem";
import Hamburger from "./Hamburger";
import Logo from "../../assets/svg/logo";

const NavbarBottom = ({ toggleCollapse }) => {
    return (
        <div className="shadow-sm navbar navbar-dark header">
            <div className="container">
                <div className="wrapper-menu">
                    <MenuItem to={"/"}>
                        <span className="me-2">
                            <Logo size={"48px"} />
                        </span>
                    </MenuItem>
                    <MenuItem to={"/favorites"}>Favorites</MenuItem>
                </div>
                <Hamburger toggleCollapse={toggleCollapse}></Hamburger>{" "}
            </div>
        </div>
    );
};

NavbarBottom.propTypes = {
    toggleCollapse: PropTypes.func.isRequired
};

export default NavbarBottom;
