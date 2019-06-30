import React, { Component } from 'react';
import RouterURL from './router/RouterURL';
import { BrowserRouter as Router} from "react-router-dom";
import Header from './Header';
import LeftBar from './LeftBar';
import Footer from './Footer';
import HeaderContent from './HeaderContent';
function App() {
    return (
    <div>
     <Router>
    <Header />
    <div className="container-fluid">
        <div className="page-content page-content-popup">
            <HeaderContent />
            <LeftBar />
            <div className="page-fixed-main-content">
                <RouterURL />
                <div className="col-md-6">
                </div>
                <div className="clearfix"></div>
            </div>
           <Footer />
        </div>
    </div>       
    <div className="quick-nav-overlay"></div>
    </Router>
    </div>
    );
}

export default App;