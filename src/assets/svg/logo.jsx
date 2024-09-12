import React from "react";
import { PropTypes } from "prop-types";

const Logo = ({ title, size }) => {
    return (
        <svg
            height={size}
            width={size}
            viewBox="0 0 48 48"
            xmlns="http://www.w3.org/2000/svg"
        >
            <title>
                {title || "Home | Group 8 JavaScript Junior Frontend Developer"}
            </title>
            <g fill="#61dafb">
                <path d="M38 8h-8L14.21 33.26 9 24l9-16h-8L1 24l9 16h8l15.79-25.26L39 24l-9 16h8l9-16z" />
            </g>
        </svg>
    );
};

Logo.propTypes = {
    title: PropTypes.string,
    size: PropTypes.string.isRequired
};

export default Logo;
