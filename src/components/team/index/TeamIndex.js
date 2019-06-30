import React, { Component } from 'react';
import TableData from './TableData';

class TeamIndex extends Component {
    render() {
        return (
            <div className="row">
            <div className="col-md-24">
              <div className="portlet box green">
                <div className="portlet-title">
                  <div className="caption">
                    <i />Team Table </div>
                </div>
                <div className="portlet-body">
                  <a href='abc' className="btn btn-outline btn-circle blue btn-sm blue">
                    <i className="fa fa-edit" /> Add</a>
                  <TableData />
                </div>
              </div>
            </div>
          </div>
        );
    }
}

export default TeamIndex;