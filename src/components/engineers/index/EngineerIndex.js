import React, { Component } from 'react';
import TableData from './TableData';

class EngineerIndex extends Component {
    
    render() {
        return (
            <div className="row">
            <div className="col-md-24">
              <div className="portlet box green">
                <div className="portlet-title">
                  <div className="caption">
                    <i />Engineer Table </div>
                </div>
                <div className="portlet-body"> 
                 <TableData />
                </div>
              </div>
            </div>
          </div>
        );
    }
}

export default EngineerIndex;