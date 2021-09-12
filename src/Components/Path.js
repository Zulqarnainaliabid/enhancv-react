import React from "react";
import { Route, Switch } from "react-router-dom";
import Main from "./MainPage";
import App from '../App'
import CoverLetter from './CoverLetter'
import Privacy from './Privacy'
import Term from './Term'
function Path() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/super_cv" component={App} />
        <Route exact path="/cover_letter" component={CoverLetter} />
        <Route exact path="/privacy_policy" component={Privacy} />
        <Route exact path="/term_and_condation" component={Term} />
      </Switch>
    </>
  );
}
export default Path;
