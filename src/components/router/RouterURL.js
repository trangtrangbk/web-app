import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import TeamIndex from '../team/index/TeamIndex';
import EngineerIndex from '../engineers/index/EngineerIndex';
import Index from '../index/Index';

class RouterURL extends Component {
  render() {
    return (
        <div>
          <Route exact path="/home" component={Index} />
          <Route exact path="/" component={Index} />
          <Route exact path="/engineer" component={EngineerIndex} />
          <Route exact path="/team" component={TeamIndex} />
        </div>
    );
  }
}

export default RouterURL;