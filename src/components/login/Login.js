import React, { Component } from 'react';
import {PostData} from './../../services/PostData';
class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
          title: '',
          description:''
        }
        this.login = this.login.bind(this);
        this.isChange = this.isChange.bind(this);
    }
    login(){
        PostData('login',this.state).then((result)=>{
          let responseJSON = result;
          console.log(responseJSON);
        });
    }
    isChange(event){
        this.setState({[event.target.name]: event.target.value});
        console.log(this.state);
    }
    render() {
        return (
            <div className="login">
            {/* BEGIN LOGO */}
            <div className="logo">
              <a href="index.html">
                <img src="../assets/pages/img/logo-big.png" /> </a>
            </div>
            {/* END LOGO */}
            {/* BEGIN LOGIN */}
            <div className="content">
              {/* BEGIN LOGIN FORM */}
              <form >
                <h3 className="form-title font-green">Sign In</h3>
                <div className="alert alert-danger display-hide">
                  <button className="close" data-close="alert" />
                  <span> Enter any username and password. </span>
                </div>
                <div className="form-group">
                  {/*ie8, ie9 does not support html5 placeholder, so we just show field title for that*/}
                  <label className="control-label visible-ie8 visible-ie9">Username</label>
                  <input onChange={this.isChange} name="title" className="form-control form-control-solid placeholder-no-fix" type="text" autoComplete="off" placeholder="Username" name="username" /> </div>
                <div className="form-group">
                  <label className="control-label visible-ie8 visible-ie9">Password</label>
                  <input onChange={this.isChange} name="description" className="form-control form-control-solid placeholder-no-fix" type="password" autoComplete="off" placeholder="Password" name="password" /> </div>
                <div className="">
                  <button type="submit" onClick={this.login} className="btn green uppercase">Login</button>
                    </div>
                </form>
            </div>
          </div>
        );
    }
}

export default Login;