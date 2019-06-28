import React, { Component } from 'react';

class RowData extends Component {
    render() {
        return (
            <tr>
            <td className="highlight">
              Hannah
            </td>
            <td className="hidden-xs"> hannah@gmail.com </td>
            <td>0123456789</td>
            <td> 1 years </td>
            <td> JAVA,PHP,Android </td>
            <td>
              <a href="engineer-view.html" className="btn btn-outline btn-circle green btn-sm purple">
                <i className="fa fa-edit" /> View </a>
              <a href="engineer-edit.html" className="btn btn-outline btn-circle yellow btn-sm yellow">
                <i className="fa fa-trash-o" /> Edit </a>
              <a href="engineer-index.html" onclick="return (confirm('DELETE?'))" className="btn btn-outline btn-circle dark btn-sm black">
                <i className="fa fa-trash-o" /> Delete </a>
            </td>
          </tr>
        );
    }
}

export default RowData;