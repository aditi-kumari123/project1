import React from 'react';
import './body.css';
import sweets from "../../../myimg/sweets.png";
import namkeen from "../../../myimg/namkeen.png";
import snacks from "../../../myimg/snacks.png";
import catering from "../../../myimg/catering.jpg";
import Slide from './slide';
import Sweets from './sweets';
import Namkeen from './namkeen';
import Snacks from './snacks';
import Catering from './catering';
import {Grid } from "@material-ui/core";
import SimpleDialogDemo from './Modal';

var react = 'react';
class Body extends React.Component {
    state={open: false , title: ""}
    open_dialogue=(title)=>{
        this.setState({open: true , title:title})
    }
    handleClose=()=>{
        this.setState({title:"",open: false})
    }
    render(){
        return(
        <div class="main">
            <div className="row_1">
                <div id="parent">
                <div className="image">
                <div className="col-l-3" onClick={()=>this.open_dialogue(  <Sweets/> )}>  
                <div class="overlay">SWEETS</div>      
                    <img src= {sweets} alt="logo" width="300vwvh" height="230vwvh"/>
                </div>
                </div>
                </div>
                <div id="parent">
                <div className="image">
                <div className="col-l-3" onClick={()=>this.open_dialogue(  <Namkeen/> )}>
                <div class="overlay">NAMKEEN</div>  
                    <img src= {namkeen} alt="logo" width="280vwvh" height="230vwvh"/>
                </div>
                </div>
                </div>
                <div id="parent">
                <div className="image">
                <div className="col-l-3" onClick={()=>this.open_dialogue(  <Snacks/> )}>
                <div class="overlay">SNACKS</div> 
                    <img src= {snacks} alt="logo" width="330vwvh" height="230vwvh"/>
                     
                </div>
                </div>
                </div>
                <div id="parent">
                <div className="image">
                <div className="col-l-3" onClick={()=>this.open_dialogue(  <Catering/> )}>
                <div class="overlay">CATERING</div> 
                <img src= {catering} alt="logo" width="385vwvh" height="230vwvh"/>
                </div></div></div>
            </div>  
           
                <div className="background_img">
                <Grid container>
                    <Grid item sm={12} xs={12} md={4} lg={4}>
                    <div >
                        <p className="text">
                        <h3><b><i>BEST SELLERS</i></b></h3>
                        We have always taken special care of the choices of our esteemed customers.
                        And they have helped us to pick and display some of our best selling products.
                        Just click on "ADD TO CART" and get fast forward to the Cart!
                        </p>
                    </div>
                    
                    </Grid>
                    <Grid item sm={12} xs={12} md={8} lg={8}>
                    <Slide/>
                        </Grid>
                </Grid>
                </div>
                
            <SimpleDialogDemo open={this.state.open} title={this.state.title} handleClose={this.handleClose}/>
         </div>
         
      )
  }
  }
  export default Body;    