import React, { Component } from "react";
import  styled, { createGlobalStyle } from "styled-components";
import Movies from "./components/Movies";
import Series from "./components/Series";
import Home from "./components/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const GlobalStyle = createGlobalStyle`
  * {
    text-decoration: none;
    list-style: none;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    background: #141414;
  }
`;

const ListGroup = styled.ul`
  font-size: 1.2em;
  width: 100%;
  height: 6vw;
  color: white;
  heigth: 10vw;
  display: flex;
  align-items: center;
  justify-content: space-around;
  
  `;
class App extends Component {
  render() {
    return (
      <Router>
          <GlobalStyle/>
        <div>
          <nav>
            <ListGroup>
              <div>
                <h2>LnXFlix</h2>
              </div>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/movies">Filmes</Link>
              </li>
              <li>
                <Link to="/series">Series</Link>
              </li>
            </ListGroup>
          </nav>

          <Switch>
            <Route path="/series">
              <Series />
            </Route>
            <Route path="/movies">
              <Movies />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
