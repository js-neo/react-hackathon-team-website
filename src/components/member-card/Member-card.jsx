import React, { useState, useEffect } from "react";
import members from "../../db/api.members";
import { handleFavorite, isFavorite } from "../../db/storage";
import PropTypes from "prop-types";
import Button from "../button/Button";
import Badge from "../badge/Badge";
import Progress from "../progress/Progress";

const MemberCard = ({ memberId }) => {
    const [favorite, setFavorite] = useState();

    useEffect(() => {
        setFavorite(isFavorite(memberId));
    }, [memberId]);

    const toggleFavorite = () => {
        handleFavorite(memberId);
        setFavorite(isFavorite(memberId));
    };

    const [member] = useState(members.find((item) => item._id === memberId));
    const {
        firstName,
        lastName,
        photo,
        about,
        role,
        socialLinks,
        badge,
        technologies
    } = member;

    return (
        <div className="card mb-3 shadow p-3 page-wrapper">
            <div className="row g-0 p-3 justify-content-end">
                <div className="col-md-6">
                    <picture className="member-item-img ">
                        <img
                            src={photo}
                            className="img-fluid rounded-start"
                            alt="..."
                            loading="lazy"
                        />
                    </picture>
                </div>
                <div className="col-md-6 ps-4 pb-4">
                    <div className="card-body lead text-muted">
                        <Badge color={badge.color} textColor={badge.textColor}>
                            {badge.name}
                        </Badge>
                        <h3 className="card-title pt-4">
                            {firstName} {lastName}
                        </h3>
                        <p className="card-text">{about}</p>
                        {role.text}{" "}
                        <ul className="card-text">
                            {role.components.map((component, index) => (
                                <li key={role.components.length - index}>
                                    {component}
                                </li>
                            ))}
                        </ul>
                        <div className="pb-4">
                            {Object.keys(socialLinks).map((key, i) => (
                                <a
                                    key={Object.keys(socialLinks).length - i}
                                    href={socialLinks[key]}
                                    className="pe-2"
                                >
                                    <i className={`bi bi-${key}`} />
                                </a>
                            ))}
                        </div>
                        <div className="d-flex flex-wrap">
                            {Object.keys(technologies).map((key, i) => (
                                <Progress
                                    key={Object.keys(technologies).length - i}
                                    title={technologies[key].name}
                                    value={technologies[key].level}
                                    color={technologies[key].color}
                                />
                            ))}
                        </div>
                    </div>
                </div>
                <Button
                    onClick={() => toggleFavorite()}
                    cls={`btn btn-outline-${
                        favorite ? "danger" : "secondary"
                    } btn-member-card`}
                >
                    {favorite ? "Remove" : "Add to Favorites"}
                </Button>
            </div>
        </div>
    );
};

MemberCard.propTypes = {
    memberId: PropTypes.string.isRequired
};

export default MemberCard;
