import React, { Component } from 'react';
import DatePicker from "react-datepicker";
 
import "react-datepicker/dist/react-datepicker.css";
class AddForm extends Component {
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
  isChange = (event)=>{
    const fieldName = event.target.name;
    const value  = event.target.value;
    console.log(event.target.value);
    this.setState({
      [fieldName] : value
    });
    //pakage to item
    var item = {};
    item.id  = this.state.id;
    item.engName  = this.state.engName;
    item.fisrtName  = this.state.fisrtName;
    item.lastName  = this.state.lastName;
    item.address  = this.state.address;
    item.experiences  = this.state.experiences;
    item.phone  = this.state.phone;
    item.email  = this.state.email;
    item.skype  = this.state.skype;
    item.birthday  = this.state.birthday;
    item.skill  = this.state.skill;
    item.status  = this.state.status;
    console.log(item);
  }
  submitAddForm = (event)=>{
    event.preventDefault();  // stop loading
    console.log(this.state)
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
                        <input type = "text" name = "engName" onChange={(event) =>this.isChange(event)} className="form-control"  placeholder="Eng name"/> </div>
                    </div> 
                    
                    <div className="col-md-6">
                    <div className="form-group">
                      <label className="control-label">First Name</label>
                      <input type = "text" name= "firstName" onChange={(event) =>this.isChange(event)} className="form-control" /> </div>
                    <div className="form-group">
                      <label className="control-label">Last Name</label>
                      <input type="text" name="lastName" onChange={(event) =>this.isChange(event)} className="form-control" /> </div>
                    <div className="form-group">
                      <label className="control-label">Address</label>
                      <input type="text" name="address" onChange={(event) =>this.isChange(event)} className="form-control" /> </div>
                    <div className="form-group">
                      <label className="control-label">Experiences</label>
                      <input type="text" name="exp" onChange={(event) =>this.isChange(event)} className="form-control" /> </div>
                    <div className="form-group">
                      <label className="control-label">Phone Number</label>
                      <input type="text" name="phone" onChange={(event) =>this.isChange(event)} className="form-control" /> </div>
                    </div>   

                    <div className="col-md-6">                   
                    <div className="form-group">
                      <label className="control-label">Email</label>
                      <input type="text" name="email" onChange={(event) =>this.isChange(event)}  className="form-control" /> </div>                    
                    <div className="form-group">
                      <label className="control-label">Skype</label>
                      <input type="text" name="skype" onChange={(event) =>this.isChange(event)} className="form-control" /> </div>
                    <div className="form-group">
                      <label className="control-label">Birthday</label><br/>
                      <DatePicker        selected={this.state.startDate}        onChange={this.handleChange}      /> </div>
                      <div className="form-check">
        <label className="form-check-label">
          <input type="checkbox" className="form-check-input" name id defaultValue="checkedValue" defaultChecked />
          JAVA<br />
          <input type="checkbox" className="form-check-input" name id defaultValue="checkedValue" defaultChecked />
          React JS<br />
          <input type="checkbox" className="form-check-input" name id defaultValue="checkedValue" defaultChecked />
          Node JS<br />
          <input type="checkbox" className="form-check-input" name id defaultValue="checkedValue" defaultChecked />
          PHP<br />
        </label>
      </div>
                    <div className="form-group">
                      <label className="control-label">Status</label>
                      <select class="form-control" onChange={(event) =>this.isChange(event)} name="status" id="">
                        <option value="available">Available</option>
                        <option value = "Unavailable">Unavailable</option>
                      </select> 
                    </div>    
                    </div>            
                    <div className="margiv-top-10" style={{textAlign: 'center'}}>
                      <a  className="btn green" onClick = {(event) =>this.submitAddForm(event)}> Add </a>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        );
    }
}

export default AddForm;