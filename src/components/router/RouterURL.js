import React, { Component } from 'react';
import {     BrowserRouter as Router, Route, Link     } from "react-router-dom";
import Index from '../index/Index';
import EngineerIndex from '../engineers/index/EngineerIndex';
import TeamIndex from '../team/index/TeamIndex';

class RouterURL extends Component {
    render() {
        return (
      <div>      
        <Route exact path="/" component={Index} />
        <Route exact path="/engineer" component={EngineerIndex} />
        <Route exact path="/team" component={TeamIndex} />
        <Route exact path="/project" component={Index} />
        <Route exact path="/user" component={Index} />
      </div>
        );
    }
}

export default RouterURL;