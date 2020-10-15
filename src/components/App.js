import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Nav from "./Nav";
import About from "./About";
import styled from "styled-components";
// import ListingGrid from "./ListingGrid";

const AppWrapper = styled.div`
  margin: 50px 80px;
`;

const App = (props) => {
  console.log(props.items);
  return (
    <AppWrapper>
      <Router>
        <div className="App">
          <Nav />
          <Switch>
            <Route exact path="/" component={Home}></Route>

            <Route path="/About" component={About}></Route>
          </Switch>
        </div>
      </Router>
    </AppWrapper>
  );
};

export default App;
