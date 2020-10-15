import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Nav from "./Nav";
import About from "./About";
import styled from "styled-components";
import ItemDetails from "./ItemDetails";
// import ListingGrid from "./ListingGrid";

const AppWrapper = styled.div`
  margin: 50px 80px;
`;

const App = (props) => {
  return (
    <AppWrapper>
      <Router>
        <div className="App">
          <Nav />
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route path="/About" component={About}></Route>
            <Route path={`/items/:itemId`} component={ItemDetails}>
              <ItemDetails />
            </Route>
          </Switch>
        </div>
      </Router>
    </AppWrapper>
  );
};

export default App;
