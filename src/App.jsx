import React from "react";
import { Route, Switch, Redirect, useLocation } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Breadcrumbs from "./components/breadcrumbs/Breadcrumbs";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Favorites from "./pages/Favorites";
import Member from "./pages/Member";
import PageNotFound from "./pages/404";

const App = () => {
    const { pathname } = useLocation();
    const excludedPaths = ["/", "/404"];

    return (
        <>
            <Navbar />
            {!excludedPaths.includes(pathname) && <Breadcrumbs />}
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/favorites" component={Favorites} />
                <Route path="/about" component={About} />
                <Route path="/contacts" component={Contacts} />
                <Route path="/member/:memberId" component={Member} />
                <Route path="/404" component={PageNotFound} />
                <Redirect from="/react-hackathon-team-website/" to="/" />
                <Redirect to="/404" />
            </Switch>
            <Footer />
        </>
    );
};

export default App;
