import React from "react";
import { Switch, Redirect, Route } from "react-router-dom";
import Topic from "./components/pages/topic/topic";
import City from "./components/pages/cities/city/city";
import NotFound from "./components/pages/404/404";
import ScrollTop from "./components/scrollTop/scrollTop";

import "./App.css";

function App() {
  return (
    <div className="App">
      <ScrollTop />
      <Switch>
        <Route path="/city" exact component={City} />
        <Route path="/" exact component={Topic} />
        <Route path="/notFound" component={NotFound} />
        <Redirect to="/notFound" />
      </Switch>
    </div>
  );
}

export default App;
