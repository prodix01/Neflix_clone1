import React from "react";
import { HashRouter as Router, Route, Redirect, Switch} from "react-router-dom";

import Home from "../Routes/Home";
import Tv from "../Routes/TV";
import Search from "../Routes/Search";
import Header from "./Header";

export default () => (
    <Router>
        <>
            <Header/>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/tv" exact component={Tv} />
                <Route path="/search" exact component={Search} />
                <Redirect from="*" to="/" />
            </Switch>
        </>
    </Router>
)