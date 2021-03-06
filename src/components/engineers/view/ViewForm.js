import React, { Component } from 'react';
import DatePicker from "react-datepicker";
import { Link } from 'react-router-dom';
 
import "react-datepicker/dist/react-datepicker.css";
class EditForm extends Component {
  constructor(props){
      super(props);
      this.state = {
          id : 0,
          startDate: ""
      };
      this.handleChange = this.handleChange.bind(this);
  }
  handleChange(date) {
    this.setState({
      startDate: date
    });
  } 
    render() {
        return (
            <div className="portlet light bordered">
            <div className="portlet-title tabbable-line">
              <div className="caption caption-md">
                <i className="icon-globe theme-font hide" />
                <span className="caption-subject font-blue-madison bold uppercase">Engineer Profile </span>
              </div>
            </div>
            <div className="portlet-body">
              <div className="tab-content">
                <div className="tab-pane active" id="tab_1_1">
                  <form role="form" action="#">
                    <div className="form-group" style={{textAlign: 'center'}}>     
                      <img height="130px" src="../assets/layouts/layout6/img/none-avatar.png" alt /><br /><br /> 
                      <div className="form-group"  style={{width: '100px', marginLeft: '615px'}}>
                        <input type = "text" name = "engName" value="Hannah" onChange={(event) =>this.isChange(event)} className="form-control"  placeholder="Eng name"/> </div>
                    </div> 
                    
                    <div className="col-md-6">
                    <div className="form-group">
                      <label className="control-label">First Name</label>
                      <input type = "text" name= "firstName" value="Trang" onChange={(event) =>this.isChange(event)} className="form-control" disabled/> </div>
                    <div className="form-group">
                      <label className="control-label">Last Name</label>
                      <input type="text" name="lastName" value="Tran" onChange={(event) =>this.isChange(event)} className="form-control" disabled /> </div>
                    <div className="form-group">
                      <label className="control-label">Address</label> 
                      <input type="text" name="address" value = "Da Nang" onChange={(event) =>this.isChange(event)} className="form-control" disabled/> </div>
                    <div className="form-group">
                      <label className="control-label">Experiences</label>
                      <input type="text" name="exp" value = "1" onChange={(event) =>this.isChange(event)} className="form-control" disabled /> </div>
                    <div className="form-group">
                      <label className="control-label">Phone Number</label>
                      <input type="text" name="phone" value = "123456789" onChange={(event) =>this.isChange(event)} className="form-control" disabled/> </div>
                    </div>   

                    <div className="col-md-6">                   
                    <div className="form-group">
                      <label className="control-label">Email</label>
                      <input type="text" name="email" value = "trang@gmail.com" onChange={(event) =>this.isChange(event)}  className="form-control" disabled /> </div>                    
                    <div className="form-group">
                      <label className="control-label">Skype</label>
                      <input type="text" name="skype"  value = "trang@gmail.com" onChange={(event) =>this.isChange(event)} className="form-control" disabled /> </div>
                    <div className="form-group">
                      <label className="control-label">Birthday</label><br/>
                      <DatePicker  selected={this.state.startDate} value="11/20/1998" onChange={this.handleChange} disabled/></div>
                      <div className="form-check">
        <label className="form-check-label"> Skills <br />
          <input type = "text" value = "JAVA || React" name="skill" className="form-control" disabled/>
       
        </label>
      </div>
                    <div className="form-group">
                      <label className="control-label">Status</label>
                      <select class="form-control" onChange={(event) =>this.isChange(event)} name="status" id="" disabled>
                        <option  value="available">Available</option>
                        <option value = "Unavailable">Unavailable</option>
                      </select> 
                    </div>    
                    </div>            
                    <div className="margiv-top-10" style={{textAlign: 'center'}}>
                      <Link to = "/engineer"  className="btn green" >  BACK </Link>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        );
    }
}

export default EditForm;