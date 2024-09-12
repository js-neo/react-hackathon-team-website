import React from 'react';
import {Route, Switch, Redirect, useLocation} from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import Breadcrumbs from './components/breadcrumbs/breadcrumbs';
import Footer from './components/footer/footer';
import Home from './pages/home';
import About from './pages/about';
import Contacts from './pages/contacts';
import Favorites from './pages/favorites';
import Member from './pages/member';
import PageNotFound from './pages/404';

const App = () => {
    const {pathname} = useLocation();
    const excludedPaths = ["/", "/404"];

    return (
        <>
            <Navbar/>
            {!excludedPaths.includes(pathname) && <Breadcrumbs/>}
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/favorites" component={Favorites}/>
                <Route path="/about" component={About}/>
                <Route path="/contacts" component={Contacts}/>
                <Route path="/member/:memberId" component={Member}/>
                <Route path="/404" component={PageNotFound}/>
                <Redirect from="/react-hackathon-team-website/" to="/"/>
                <Redirect to="/404"/>
            </Switch>
            <Footer/>
        </>
    );
};

export default App;
