import React from "react";
import FooterColumn from "../footer/footer-column";
import { PropTypes } from "prop-types";

const NavBarTop = ({ collapse }) => {
    const stylesColumn = {
        styleContainer: "py-4 col-sm-4 offset-md-1",
        styleTitle: "header-top-h5",
        styleList: "list-unstyled",
        styleItem: "",
        styleLink: ""
    };

    return (
        <div
            className={(collapse ? "collapse " : "") + "header-top"}
            id="navbarHeader"
        >
            <div className="container">
                <div className="row">
                    <div className="py-4 col-sm-8 col-md-7">
                        <h5 className="header-top-h5">About Us</h5>
                        <p className="text-muted-header">
                            <q>
                                We are a small but dynamic developing team of
                                front-end developers. Javascript, React, Node.js
                                - this is about us!
                            </q>
                        </p>
                    </div>

                    <FooterColumn
                        title={"Contact"}
                        list={[
                            { title: "Contacts", to: "/contacts" },
                            { title: "Our team", to: "/about" }
                        ]}
                        stylesColumn={stylesColumn}
                    ></FooterColumn>
                </div>
            </div>
        </div>
    );
};

NavBarTop.propTypes = {
    collapse: PropTypes.bool.isRequired
};

export default NavBarTop;
