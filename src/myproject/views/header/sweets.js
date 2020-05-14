import React from 'react';
import gulabjamun from "../../../myimg/gulabjamun.png";
import motichur from "../../../myimg/motichur.png";
import rasmalai from "../../../myimg/rasmalai.png";
import rasgulla from "../../../myimg/rasgulla.png";
import rajbhog from "../../../myimg/rajbhog.png";
import kajuroll from "../../../myimg/kajuroll.png";
class Sweets extends React.Component {
    render(){
        return(
                    <div className="form_text">
                        
                        <h1 className="font"><center><b><i><u>SWEETS</u></i></b></center></h1>
                                <div className="row">
                                   
                                    <div className="col">
                                    <div className="card1">
                                    <center>
                                    <img src= {gulabjamun} alt="logo" width="130vwvh" height="100vwvh"/>
                                    <div className="card-body">
                                    <h6 className="card-title">Gulabjamun</h6>
                                    <p className="card-text" /><center>
                                    <a href="#" className="btn1 btn-primary">Add To Cart</a></center>
                                    </div>
                                    </center>
                                    </div>
                                    </div>
                                    <div className="col">
                                    <div className="card1">
                                    <center>
                                    <img src= {rasmalai} alt="logo" width="130vwvh" height="100vwvh"/>
                                    <div className="card-body">
                                    <h6 className="card-title">Rasmalai</h6>
                                    <p className="card-text" /><center>
                                    <a href="#" className="btn1 btn-primary">Add To Cart</a></center>
                                    </div>
                                    </center>
                                    </div>
                                    </div>
                                    <div className="col">
                                    <div className="card1">
                                    <center>
                                    <img src= {motichur} alt="logo" width="130vwvh" height="100vwvh"/>
                                    <div className="card-body">
                                    <h6 className="card-title">Motichur Laddu</h6>
                                    <p className="card-text" /><center>
                                    <a href="#" className="btn1 btn-primary">Add To Cart</a></center>
                                    </div>
                                    </center>
                                    </div>
                                    </div>
                                    <div className="col">
                                    <div className="card1">
                                    <center>
                                    <img src= {rasgulla} alt="logo" width="130vwvh" height="100vwvh"/>
                                    <div className="card-body">
                                    <h6 className="card-title">Rasgulla</h6>
                                    <p className="card-text" /><center>
                                    <a href="#" className="btn1 btn-primary">Add To Cart</a></center>
                                    </div>
                                    </center>
                                    </div>
                                    </div>
                                    <div className="col">
                                    <div className="card1">
                                    <center>
                                    <img src= {rajbhog} alt="logo" width="130vwvh" height="100vwvh"/>
                                    <div className="card-body">
                                    <h6 className="card-title">Rajbhog</h6>
                                    <p className="card-text" /><center>
                                    <a href="#" className="btn1 btn-primary">Add To Cart</a></center>
                                    </div>
                                    </center>
                                    </div>
                                    </div>
                                    <div className="col">
                                    <div className="card1">
                                    <center>
                                    <img src= {kajuroll} alt="logo" width="130vwvh" height="100vwvh"/>
                                    <div className="card-body">
                                    <h6 className="card-title">Kajuroll</h6>
                                    <p className="card-text" /><center>
                                    <a href="#" className="btn1 btn-primary">Add To Cart</a></center>
                                    </div>
                                    </center>
                                    </div>
                                    </div>

                              </div>

                    </div>
        )}
}
export default Sweets;
