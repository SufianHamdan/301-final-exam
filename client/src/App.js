import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from './components/Header';
import Main from './components/Main';
import Favorite from './components/Favorite';

export class App extends Component {
  render() {

    return (
      <>
      <BrowserRouter>
        <Switch>
          <Header />
          <Route exact path="/">
            <Main />
          </Route>
          <Route exact path="/favorite">
            <Favorite />
          </Route>
        </Switch>
      </BrowserRouter>
      </>
    )
  }
}

export default App
