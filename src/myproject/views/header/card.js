import React from 'react';
import samosa from "../../../myimg/samosa.png";
import Card1 from './card1';
class Card extends React.Component {
    render(){
    return(
        <div className="col">
            <div className="card1">
            <center>
            <img src= {samosa} alt="logo" width="150vwvh" height="100vwvh"/>
            <div className="card-body">
            <h5 className="card-title"><b>{this.props.data1 &&this.props.data1.Product_name}</b></h5>
            <h5>Price:{this.props.data1 &&this.props.data1.Price}</h5>
            <p className="card-text" />
            <a href="#" className="btn1 btn-primary">Add To Cart</a>
            <a href="#" className="btn1 btn-primary">Buy Now</a>
            
            </div>
            </center>
            </div>                      
         </div>
    )}
    }
    export default Card;