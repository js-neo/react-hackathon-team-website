import React from "react";
import members from "../db/api.members";
import Card from "../components/card/card";
import Slider from "../components/slider/slider";

const Home = () => {
    return (
        <>
            <Slider />
            <main>
                <section className="pt-5 pb-3 text-center container">
                    <div className="col-lg-12 col-md-8 mx-auto">
                        <h1 className="fw-light">Our Team</h1>
                    </div>
                </section>
                <div className="album py-5 bg-light p-3">
                    <div className="container">
                        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                            {members.map((member) => (
                                <Card key={member._id} {...member} />
                            ))}
                        </div>
                    </div>
                </div>
                <section className="py-5 container p-3">
                    <div className="row py-lg-5">
                        <div className="col-lg-10 col-md-10 mx-auto">
                            <h1 className="fw-light text-center mb-4">
                                About our project
                            </h1>
                            <p className="lead text-muted">
                                This site was created by participants of the
                                hackathon held in October 2021, as part of an
                                educational program to improve JavaScript and
                                React development skills.
                            </p>
                            <p className="lead text-muted">
                                A team of developers from around the world for
                                two days tried to implement the task proposed by
                                the organizers of the hackathon and maximize
                                their technical and creative potential.
                            </p>
                            <p className="lead text-muted">
                                To implement the project, we used the React
                                library, the Bootstrap CSS framework and the
                                best technological solutions.
                            </p>
                            <p className="lead text-muted">
                                What we managed to do in such a short time, you
                                can appreciate by clicking on the links of the
                                site, clicking on the delightful buttons that
                                delight the eye of a sophisticated viewer,
                                enjoying the exquisite design of bootstrap
                                components.
                            </p>
                            <p className="lead text-muted">
                                Visit our wonderful website as often as
                                possible. It is unlikely that anything will ever
                                change here in the future, and therefore, coming
                                here again and again, you will feel yourself in
                                a familiar environment and quietly contemplating
                                the bizarre lines of web components to reflect
                                on something great.
                            </p>
                            <p className="lead text-muted">
                                Add a link to our app to your browser bookmarks
                                and don't forget to send it to your friends, we
                                think they will be pleased.
                            </p>
                            <p className="fs-5 w-bold fst-italic text-end">
                                Always your team of react developers.
                            </p>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
};

export default Home;
