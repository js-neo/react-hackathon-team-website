import React from "react";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";

const MenuItem = ({ children, to }) => {
    return (
        <Link to={to} className="d-flex align-items-left me-auto ms-3">
            {children}
        </Link>
    );
};

MenuItem.propTypes = {
    to: PropTypes.string.isRequired
};

export default MenuItem;
