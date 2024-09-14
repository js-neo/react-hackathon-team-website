import React from "react";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";

const FooterColumn = ({ children, title, list, stylesColumn }) => (
    <div className={stylesColumn.styleContainer}>
        <h5 className={stylesColumn.styleTitle}>{title}</h5>
        <ul className={stylesColumn.styleList}>
            {list.map((item) => (
                <li key={item.title} className={stylesColumn.styleItem}>
                    <Link className={stylesColumn.styleLink} to={item.to}>
                        {item.title}
                        {children}
                    </Link>
                </li>
            ))}
        </ul>
    </div>
);

FooterColumn.propTypes = {
    title: PropTypes.string.isRequired,
    list: PropTypes.array.isRequired,
    styles: PropTypes.string,
    stylesColumn: PropTypes.object.isRequired
};

export default FooterColumn;
