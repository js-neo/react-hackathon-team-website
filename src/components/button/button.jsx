import React from "react";
import PropTypes from "prop-types";

const Button = ({ cls, children, type, onClick }) => {
    return (
        <button className={cls} type={type} onClick={onClick}>
            {children}
        </button>
    );
};

Button.defaultProps = {
    type: "button"
};

Button.propTypes = {
    cls: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    children: PropTypes.string.isRequired
};

export default Button;
