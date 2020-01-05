import React from "react";
import { HashRouter as Router, Route, Redirect, Switch} from "react-router-dom";

import Home from "../Routes/Home";
import Tv from "../Routes/TV";
import Search from "../Routes/Search";
import Detail from "../Routes/Detail";
import Header from "./Header";

export default () => (
    <Router>
        <>
            <Header/>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/tv" exact component={Tv} />
                <Route path="/search" exact component={Search} />
                <Route path="/movie/:id" exact component={Detail} />
                <Route path="/show/:id" exact component={Detail} />
                <Redirect from="*" to="/" />
            </Switch>
        </>
    </Router>
)