import React from "react";
import { Link, useLocation } from "react-router-dom";
import members from "../../db/api.members";

const Breadcrumbs = () => {
    const { pathname } = useLocation();

    const breadCrumbsItems = [
        { to: "/", label: "Home" },
        { to: "/favorites", label: "Favorites" },
        { to: "/contacts", label: "Contacts" },
        { to: "/about", label: "About" }
    ];

    const membersCrumbs = members.map(({ _id, firstName }) => {
        return { to: `/${_id}`, label: firstName };
    });

    const allBreadCrumbs = [...breadCrumbsItems, ...membersCrumbs];
    const locationArray = pathname.split("/").map((path) => "/" + path);
    const resultData = allBreadCrumbs.filter(({ to }) =>
        locationArray.includes(to)
    );
    const lastDataItem = resultData.pop();

    return (
        <div className="container pt-3 pb-0 text-center breadcrumb-style">
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    {resultData.map(({ to, label }) => (
                        <li key={to} className="breadcrumb-item">
                            <Link to={to}>{label}</Link>
                        </li>
                    ))}
                    <li className="breadcrumb-item" aria-current="page">
                        {lastDataItem.label}
                    </li>
                </ol>
            </nav>
        </div>
    );
};

export default Breadcrumbs;
