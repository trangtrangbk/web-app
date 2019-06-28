import React, { Component } from 'react';

class RowData extends Component {
    render() {
        return (
            <tr>
            <td className="highlight">
              Team 1
            </td>
            <td className="hidden-xs"> Travel Blog </td>
            <td>5</td>
            <td> 30/11/1998 </td>
            <td> 30/12/1998 </td>                                                  
            <td>
              <a href='abc' className="btn btn-outline btn-circle green btn-sm purple">
                <i className="fa fa-edit" /> Detail </a>
              <a href='abc' className="btn btn-outline btn-circle yellow btn-sm yellow">
                <i className="fa fa-trash-o" /> Edit </a>
              <a href='abc' className="btn btn-outline btn-circle dark btn-sm black">
                <i className="fa fa-trash-o" /> Delete </a>
            </td>
          </tr>
        );
    }
}

export default RowData;