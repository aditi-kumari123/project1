import React from 'react';
import './footer.css';
import SimpleDialogDemo from './Modal';
import Sweets from './sweets';
import Catering from './catering';
import Namkeen from './namkeen';
import Snacks from './snacks';
var react = 'react';
var FontAwesome ='react-fontawesome';
class Footer extends React.Component {
  state={open: false , title: ""}
    open_dialogue=(title)=>{
        this.setState({open: true , title:title})
    }
    handleClose=()=>{
        this.setState({title:"",open: false})
    }
render(){ return(
    <div><div>

    <section id="footer">
      <div className="container">
        <div className="row text-center text-xs-center text-sm-left text-md-left">
          <div className="col">
            <h3>Our Services</h3>
            <ul className="list-unstyled quick-links">
              <li><a href="javascript:void();"onClick={()=>this.open_dialogue(<div className="font">
                <table border="7"><tr><td>
                 <b> 
                <h1><center><u><i>About Us</i></u></center></h1>
                <p className="p_text">
                Shree ji- is not just a name, it's an emotion for the owner and it's customers.
                  We provide heartfelt hospitality when it comes to catering. We serve typically vegetarian
                  menu and take complete responsibility of 
                  purity and originality. We are located in Gaya, it is a holy city beside the Falgu River, 
                  in the northeast Indian state of Bihar. 
                  We deal in a variety of sweets and snacks. We are always happy to connect and be a part 
                  of your happiness and enhance it even more with a quality taste! 
                  Not forgetting we also have our "Shree Jee Utsav Bhawan" - it is a marriage hall and can 
                  be booked for various ceremonies and celebrations.
                  </p></b>
                  </td></tr></table>
              </div>)}>
                
                
                
                <i className="fa fa-angle-double-right" />About us</a></li>
              <li><a href="javascript:void();"onClick={()=>this.open_dialogue(  <Sweets/> )}><i className="fa fa-angle-double-right" />Sweets</a></li>
              <li><a href="javascript:void();"onClick={()=>this.open_dialogue(  <Namkeen/> )}><i className="fa fa-angle-double-right" />Namkeen</a></li>
              <li><a href="javascript:void();"onClick={()=>this.open_dialogue(  <Snacks/> )}><i className="fa fa-angle-double-right" />Snacks</a></li>
              <li><a href="javascript:void();"onClick={()=>this.open_dialogue(  <Catering/> )}><i className="fa fa-angle-double-right" />Catering</a></li>
            </ul>
          </div>
      
        {/* </div> */}
        
          <div className="col">
          <h3>Contact Us</h3>
          {/* <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5"> */}
            <ul className="list-unstyled quick-links">
              <li><a href="javascript:void();"><i className="fa fa-facebook" /></a></li>
              <li><a href="javascript:void();"><i className="fa fa-twitter" /></a></li>
              <li><a href="javascript:void();"><i className="fa fa-instagram" /></a></li>
              <li><a href="javascript:void();"><i className="fa fa-google-plus" /></a></li>
              <li className="list-inline-item"><a href="javascript:void();" target="_blank"><i className="fa fa-envelope" /></a></li>
            </ul>
          </div>
          
          <div className="col">
            <h3>Address</h3>
            <ul className="list-unstyled quick-links">
              <li><a href="javascript:void();"><i className="" />Address:Gaya-Bihar</a></li>
              <li><a href="javascript:void();"><i className="" />Contact No.: </a></li>
            </ul>
          </div>
          
          </div>
         
          </div>
        {/* </div>   */}
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white">
           
            <p className="h6">© All right Reversed.</p>
          </div>
        </div>  
      
    </section>
        </div>
        <SimpleDialogDemo open={this.state.open} title={this.state.title} handleClose={this.handleClose}/>
        </div>
)
}
}
export default Footer;