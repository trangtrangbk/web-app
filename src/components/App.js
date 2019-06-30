import React, { Component } from 'react';
import RouterURL from './router/RouterURL';
import { BrowserRouter as Router} from "react-router-dom";
class App extends Component {
    render() {
        return (
        <div className="App">
          <Router>
            <RouterURL />
          </Router>
        </div>
        );
    }
}

export default App;