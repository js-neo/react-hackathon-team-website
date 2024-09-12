import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { handleFavorite, isFavorite } from "../../db/storage";
import Button from "../button/button";
import Badge from "../badge/badge";
import getAge from "../../utils/get-age";

const Card = ({
    _id,
    firstName,
    lastName,
    dateOfBirth,
    badge,
    photo,
    about,
    method
}) => {
    const [favorite, setFavorite] = useState();

    useEffect(() => {
        setFavorite(isFavorite(_id));
    }, [_id]);

    const toggleFavorite = () => {
        handleFavorite(_id);
        setFavorite(isFavorite(_id));
        method?.();
    };

    return (
        <div className="col">
            <div className="shadow-sm card">
                <img src={photo} className="card-img-top" alt="" />
                <div className="card-body">
                    <div className="d-flex justify-content-end pt-3">
                        <Badge color={badge.color} textColor={badge.textColor}>
                            {badge.name}
                        </Badge>
                    </div>
                    <h5>
                        {firstName} {lastName}
                    </h5>
                    <p className="card-text">{getAge(dateOfBirth)}</p>
                    <span className="block-about card-text">{about}</span>
                    <div className="d-flex justify-content-between align-items-center pb-3">
                        <div className="btn-group">
                            <Link to={`/member/${_id}`}>
                                <Button
                                    cls={"btn btn-sm btn-outline-secondary"}
                                >
                                    View
                                </Button>
                            </Link>
                            <Button
                                cls={`btn btn-sm btn-outline-${
                                    favorite ? "danger" : "secondary"
                                }`}
                                onClick={() => toggleFavorite()}
                            >
                                {favorite ? "Delete" : "Add"}
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

Card.propTypes = {
    _id: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    dateOfBirth: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
    about: PropTypes.string.isRequired,
    method: PropTypes.func
};

export default Card;
