import React, { Component } from 'react';
import Header from '../../Header';
import HeaderContent from '../../HeaderContent';
import LeftBar from '../../LeftBar';
import Content from './Content';
import Footer from '../../Footer';

class EngineerIndex extends Component {
    
    render() {
        return (
        <div>
        <Header />
        <div className="container-fluid">
            <div className="page-content page-content-popup">
                <HeaderContent />
                <LeftBar />
                <div className="page-fixed-main-content">
                    <Content />
                    <div className="col-md-6">
                    </div>
                    <div className="clearfix"></div>
                </div>
               <Footer />
            </div>
        </div>       
        <div className="quick-nav-overlay"></div>
        </div>
        );
    }
}

export default EngineerIndex;