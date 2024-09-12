import React from "react";
import img from "../assets/images/about.jpg";
import Button from "../components/button/button";
import { Link } from "react-router-dom";

const About = () => {
    return (
        <div className="container px-4 py-5 mt-5 col-xxl-8 page-wrapper">
            <div className="p-3 shadow row flex-lg-row-reverse align-items-center g-5">
                <div className="my-0 col-12 col-lg-6 my-md-5">
                    <img
                        src={img}
                        className="img-fluid shadow"
                        alt="Hurricane team"
                        loading="lazy"
                    />
                </div>
                <div className="block-info col-lg-6 my-md-5">
                    <h1 className="mb-3 text-center display-5 fw-bold lh-1">
                        Hurricane team
                    </h1>
                    <p className="lead">
                        We are a hurricane team. Together we are strong!
                    </p>
                    <p>
                        If they contacted us, they will not let go. We do not
                        make the world around us better, it just works like that
                        ...
                    </p>
                    <p>
                        We are accustomed to this since childhood. No problem.
                    </p>
                    <p>- You’re just in a bad mood today, right?</p>
                    <p>- I'm NEVER in the mood.</p>
                    <div className="gap-2 d-grid d-md-flex justify-content-center">
                        <Link to={"/contacts"}>
                            <Button cls="btn btn-outline-secondary btn-lg px-4">
                                Contact us
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
