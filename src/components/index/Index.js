import React, { Component } from 'react';
import Header from '../Header';
import LeftBar from '../LeftBar';
import HeaderContent from '../HeaderContent';
import Footer from '../Footer';
import Action from './Action';
import Stats from './Stats';
import Portlet from './Portlet';

class Index extends Component {
    render() {
        return (
        <div>
        <Header />
        <div className="container-fluid">
            <div className="page-content page-content-popup">
                <HeaderContent />
                <LeftBar />
                <div className="page-fixed-main-content">
                  <Stats />
                <div className="col-lg-6 col-xs-12 col-sm-12">
                    <Action />
                </div>
                <div className="col-lg-6 col-xs-12 col-sm-12">
                  <Portlet />
                </div>
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

export default Index;