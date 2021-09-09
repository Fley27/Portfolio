import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../../pages/home";
import About from "../../pages/about"
import Contact_ from "../../pages/contact";
import Work_ from "../../pages/work";
import Skill_ from "../../pages/skill";
const Routes = () => {
    return (
        <Fragment>
            <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />
            <Route exact path='/contact' component={Contact_} />
            <Route exact path='/work' component={Work_} />
            <Route exact path='/skill' component={Skill_} />
        </Switch>
        </Fragment>
    );
};

export default Routes;