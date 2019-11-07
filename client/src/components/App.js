import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";

import Header from "./Header";
import Landing from './Landing';
import Dashboard from './Dashboard';
import RequireAuth from './RequireAuth';
import RequireNotAuth from './RequireNotAuth';
import Login from "./Login";
import Footer from "./Footer";
import Logs from "./Logs";

// 7. If possible, you can use a frontend technology such as Angular or React for your UI.

class App extends Component {

  componentWillMount() {
    //console.log("componentWillMount")
    this.props.fetchUser();
  }

  render() {
    return (
   <BrowserRouter>
      <main>
        <Header />
        <div className="container page-wrap" style= {{marginTop:"40px"}}>
          <Route exact path="/login" component={RequireNotAuth(Login)} />
          <Route exact path="/" component={Landing} />
          <Route exact path="/twits" component={RequireAuth(Dashboard)} />
          <Route exact path="/logs" component={RequireAuth(Logs)} />
        </div>
      </main>
      <Footer key="2" />
    </BrowserRouter>
    );
  }
}

export default connect(
  null,
  actions
)(App);
