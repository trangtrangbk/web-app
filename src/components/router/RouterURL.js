import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import TeamIndex from '../team/index/TeamIndex';
import EngineerIndex from '../engineers/index/EngineerIndex';
import Index from '../index/Index';

class RouterURL extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Index} />
          <Route path="/engineer" component={EngineerIndex} />
          <Route path="/team" component={TeamIndex} />
        </div>
      </Router>
    );
  }
}

export default RouterURL;