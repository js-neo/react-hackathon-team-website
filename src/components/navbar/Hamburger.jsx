import React from "react";
import { PropTypes } from "prop-types";

const Hamburger = ({ toggleCollapse }) => {
    return (
        <button
            onClick={toggleCollapse}
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarHeader"
            aria-controls="navbarHeader"
            aria-expanded="false"
            aria-label="Toggle navigation"
        >
            <span className="navbar-toggler-icon"></span>
        </button>
    );
};

Hamburger.propTypes = {
    toggleCollapse: PropTypes.func.isRequired
};

export default Hamburger;
