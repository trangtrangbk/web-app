import React, { Component } from 'react';
import {     BrowserRouter as Router, Route, Link     } from "react-router-dom";
import Index from './index/Index';
class App extends Component {
    render() {
        return (
        <div className="App">
          <Router>
            <Index />
          </Router>
        </div>
        );
    }
}

export default App;