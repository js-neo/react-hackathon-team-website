import React from "react";
import PropTypes from "prop-types";

const Badge = ({ color, textColor, children }) => {
    return (
        <span
            className={`badge rounded-pill bg-${color} ${
                !!textColor && "text-dark"
            } py-2 px-3`}
        >
            {children}
        </span>
    );
};

Badge.defaultProps = {
    textColor: false
};

Badge.propTypes = {
    color: PropTypes.string.isRequired,
    textColor: PropTypes.bool,
    children: PropTypes.string.isRequired
};

export default Badge;
