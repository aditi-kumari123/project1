import React from 'react';
import spicysev from "../../../myimg/spicysev.png";
import daalmixture from "../../../myimg/daalmixture.png";
import hingmixture from "../../../myimg/hingmixture.png";
import khattamithachivda from "../../../myimg/khattamithachivda.png";
import peanutmixture from "../../../myimg/peanutmixture.png";
import teekhiboondi from "../../../myimg/teekhiboondi.png";
import Card1 from './card1'
class Namkeen extends React.Component {
    render(){
        return(
            <div className="form_text">
                        
            <h1 className="font"><center><b><i><u>NAMKEEN</u></i></b></center></h1>
                    <div className="row">
                       
                        <div className="col">
                        <div className="card1">
                        <center>
                        <img src= {spicysev} alt="logo" width="130vwvh" height="100vwvh"/>
                        <div className="card-body">
                        <h6 className="card-title">Spicy Sev</h6>
                        <p className="card-text" /><center>
                        <a href="#" className="btn1 btn-primary">Add To Cart</a></center>
                        </div>
                        </center>
                        </div>
                        </div>
                        <div className="col">
                        <div className="card1">
                        <center>
                        <img src= {daalmixture} alt="logo" width="130vwvh" height="100vwvh"/>
                        <div className="card-body">
                        <h6 className="card-title">Daal Mixture</h6>
                        <p className="card-text" /><center>
                        <a href="#" className="btn1 btn-primary">Add To Cart</a></center>
                        </div>
                        </center>
                        </div>
                        </div>
                        <div className="col">
                        <div className="card1">
                        <center>
                        <img src= {hingmixture} alt="logo" width="130vwvh" height="100vwvh"/>
                        <div className="card-body">
                        <h6 className="card-title">Hing Mixture</h6>
                        <p className="card-text" /><center>
                        <a href="#" className="btn1 btn-primary">Add To Cart</a></center>
                        </div>
                        </center>
                        </div>
                        </div>
                        <div className="col">
                        <div className="card1">
                        <center>
                        <img src= {khattamithachivda} alt="logo" width="130vwvh" height="100vwvh"/>
                        <div className="card-body">
                        <h6 className="card-title">Khatta Mittha Chivda</h6>
                        <p className="card-text" /><center>
                        <a href="#" className="btn1 btn-primary">Add To Cart</a></center>
                        </div>
                        </center>
                        </div>
                        </div>
                        <div className="col">
                        <div className="card1">
                        <center>
                        <img src= {peanutmixture} alt="logo" width="130vwvh" height="100vwvh"/>
                        <div className="card-body">
                        <h6 className="card-title">Peanut Mixture</h6>
                        <p className="card-text" /><center>
                        <a href="#" className="btn1 btn-primary">Add To Cart</a></center>
                        </div>
                        </center>
                        </div>
                        </div>
                        <div className="col">
                        <div className="card1">
                        <center>
                        <img src= {teekhiboondi} alt="logo" width="130vwvh" height="100vwvh"/>
                        <div className="card-body">
                        <h6 className="card-title">Teekhi Boondi</h6>
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
export default Namkeen;
