import React from 'react';
import Axios from 'axios';
import {BrowserRouter,Switch,Route,Link} from 'react-router-dom';
import login from './login';
import SimpleDialogDemo from './Modal';
import Login from './login';
class Form1 extends React.Component {
  constructor(){
    super();
    this.state={
      username:"",
      email:"",
      password:"",
      password_confirm:"",
      address:""
    }
  }
  state={open: false , title: ""}
  open_dialogue=(title)=>{
      this.setState({open: true , title:title})
  }
  handleClose=()=>{
    this.setState({title:"",open: false})
}

  Change=(e)=>{
    this.setState({[e.target.name]:e.target.value});
    console.log(this.state.username);
    console.log(this.state.password);
    console.log(this.state.password_confirm);
    console.log(this.state.email);
    console.log(this.state.address);
  }
  click=()=>{
    return Axios.post("http://localhost:3000/adddetail",
    {
    name:this.state.username,
    email:this.state.email,
    pwd:this.state.password,
    cpwd:this.state.password_confirm,
    address:this.state.address
    }
    )
  }

    render(){
      
        return(
            <div className="form_text">
              <BrowserRouter>
  
<form className="form-horizontal">
        <fieldset>
          <div id="legend">
              <center>
            <h1><b><u>Register Now</u></b></h1>
            <h3>Enjoy your food!!</h3></center>
          </div>
          <div className="control-group">
            {/* Username */}
            <label className="control-label" htmlFor="username">Username:</label>
            <div className="controls">
              <input type="text" name="username"  className="input-xlarge" value={this.state.username} onChange={(e)=>this.Change(e)} />
              <p className="help-block">*Username can contain any letters or numbers, without spaces</p>
            </div>
          </div>
          <div className="control-group">
            {/* E-mail */}
            <label className="control-label" htmlFor="email" >E-mail:</label>
            <div className="controls">
              <input type="text" id="email" name="email" className="input-xlarge" value={this.state.email} onChange={(e)=>this.Change(e)}/>
              <p className="help-block">*Please provide your E-mail</p>
            </div>
          </div>
          <div className="control-group">
            {/* Password*/}
            <label className="control-label" htmlFor="password">Password:</label>
            <div className="controls">
              <input type="password" id="password" name="password" placeholder className="input-xlarge" value={this.state.password} onChange={(e)=>this.Change(e)}/>
              <p className="help-block">*Password should be at least 4 characters</p>
            </div>
          </div>
          <div className="control-group">
            {/* Password */}
            <label className="control-label" htmlFor="password_confirm">Confirm Password:</label>
            <div className="controls">
              <input type="password" id="password_confirm" name="password_confirm" placeholder className="input-xlarge" value={this.state.password_confirm} onChange={(e)=>this.Change(e)} />
              <p className="help-block">*Please confirm password</p>
            </div>
          </div>
          <div className="control-group">
            {/* Password */}
            <label className="control-label" htmlFor="address">Delivery Address:</label>
            <div className="controls">
              <input type="text-field" id="address" name="address" placeholder className="input-xlarge"value={this.state.address} onChange={(e)=>this.Change(e)} />
              <p className="help-block">*Please Enter Your Full Address </p>
            </div>
          </div>
          <div className="control-group">
            {/* Button */}
            <div className="controls">
            <button className="btn btn-success"onClick={()=>this.click()}>Register Now!</button>
            <p className="help-block"onClick={()=>this.open_dialogue(<Login/>)} ><Link to={"/login"}>Already Registered?</Link></p>
            </div>
            </div>
        </fieldset>
      </form>
    
      <SimpleDialogDemo open={this.state.open} title={this.state.title} handleClose={this.handleClose}/>
      </BrowserRouter>

     </div>
        )         
    }
}
export default Form1;