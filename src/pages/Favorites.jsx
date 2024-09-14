import React, { useState, useEffect } from "react";
import { getFavoriteMembers } from "../db/storage";
import Card from "../components/card/Card";
import members from "../db/api.members";

const Favorites = () => {
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        setFavorites(() => getFavoriteMembers(members));
    }, []);

    const updateFavorites = () => {
        setFavorites(() => getFavoriteMembers(members));
    };

    return (
        <main className="page-wrapper">
            <section className="pt-5 pb-3 text-center container">
                <div className="col-lg-6 col-md-8 mx-auto">
                    <h1 className="fw-light">
                        {favorites.length
                            ? "Favorites"
                            : "You haven't chosen anyone yet"}
                    </h1>
                </div>
            </section>
            {!!favorites.length && (
                <div className="album py-5 bg-light p-3">
                    <div className="container">
                        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                            {favorites.map((favorite) => (
                                <Card
                                    key={favorite._id}
                                    {...favorite}
                                    method={updateFavorites}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </main>
    );
};

export default Favorites;
