import React, { Component } from 'react';
import TableData from './TableData';
import AddForm from '../add/AddForm';

class Content extends Component {
  constructor(props){
    super(props);
    this.state = {
        status: 0,
    }
}
clickAddButton = ()=>{
    this.setState({status:1});
}
clickCloseButton = ()=>{
    this.setState({status:0});
}
displayCheck = ()=>{
    if(this.state.status == 0) {
        return (<a onClick={() =>this.clickAddButton()} className="btn btn-outline btn-circle blue btn-sm blue">
        <i class="fa fa-edit"></i> Add  </a>);
    }
    else{
        return (<a onClick={() =>this.clickCloseButton()} className="btn btn-outline btn-circle blue btn-sm blue">
        <i class="fa fa-edit"></i> Close  </a>); 
    }
}
addFormCheck = ()=>{
    if(this.state.status == 1){
        return (<AddForm />);
    }
    else{
        return ;
    }
}


    render() {
        return (
            <div className="row">
              <div className="col-md-24">
                <div className="portlet box green">
                  <div className="portlet-title">
                    <div className="caption">
                      <i />Engineer Table </div>
                  </div>
                  <div className="portlet-body"> {this.displayCheck()}
                                             {this.addFormCheck()}
                   <TableData />
                  </div>
                </div>
              </div>
            </div>
        );
    }
}

export default Content;