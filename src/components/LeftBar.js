import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
class LeftBar extends Component {
    render() {
        return (
            <div className="page-sidebar-wrapper">
            <div className="page-sidebar navbar-collapse collapse">
              <ul className="page-sidebar-menu  page-header-fixed " data-keep-expanded="false" data-auto-scroll="true" data-slide-speed={200}>
                <li className="nav-item start active open">
                <NavLink  to="/"> 
                    <i className="icon-bar-chart" />
                    <span className="title">Dashboard</span>
                    <span className="selected" />
                </NavLink>
                </li>
                <li className="nav-item start active open">
                <Link  to="/engineer"> 
                    <i className="icon-bar-chart" />
                    <span className="title">Engineer</span>
                    <span className="selected" />
                </Link>
                </li>
                <li className="nav-item start active open">
                <NavLink  to="/team"> 
                    <i className="icon-bar-chart" />
                    <span className="title">Team</span>
                    <span className="selected" />
                  </NavLink>
                </li>
                <li className="nav-item start active open">
                <NavLink  to="/team"> 
                    <i className="icon-bar-chart" />
                    <span className="title">Project</span>
                    <span className="selected" />
                  </NavLink>
                </li>
                <li className="nav-item start active open">
                <NavLink  to="/team"> 
                    <i className="icon-bar-chart" />
                    <span className="title">User</span>
                    <span className="selected" />
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        );
    }
}

export default LeftBar;