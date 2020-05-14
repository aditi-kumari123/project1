import React from 'react';
// import SimpleDialogDemo from './Modal';
class Login extends React.Component {
render(){
    // this.state={open: true, title: <login/>}
    
    return(
        <div>
        <form className="form-horizontal">
        <fieldset>
          <div id="legend">
              <center>
            <h1><b><u>Login Now</u></b></h1>
            <h3>Enjoy your food!!</h3></center>
          </div>
          <div className="control-group">
            {/* Username */}
            <label className="control-label" htmlFor="username">Username:</label>
            <div className="controls">
              <input type="text" name="username"  className="input-xlarge" />
              </div>
          </div>
          <div className="control-group">
            {/* E-mail */}
            <label className="control-label" htmlFor="email" >Password:</label>
            <div className="controls">
              <input type="text" id="email" name="email" className="input-xlarge"/>
              </div>
          </div>
          <div className="control-group">
            {/* Button */}
            <div className="controls">
            <button className="btn btn-success">Login Now!</button>
            </div>
            </div>
        </fieldset>
      </form>
       
    }
    {/* <SimpleDialogDemo open={this.state.open} title={this.state.title} handleClose={this.handleClose}/> */}
        </div>
    )
}

}
export default Login;