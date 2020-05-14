import React from 'react';
import vegroll from "../../../myimg/vegroll.png";
import patties from "../../../myimg/patties.png";
import pastaroll from "../../../myimg/pastaroll.png";
import papdichat from "../../../myimg/papdichat.png";
import hotdog from "../../../myimg/hotdog.png";
import samosa from "../../../myimg/samosa.png";
class Snacks extends React.Component {
    render(){
        return(
            <div className="form_text">
                        
            <h1 className="font"><center><b><i><u>SNACKS</u></i></b></center></h1>
                    <div className="row">
                       
                        <div className="col">
                        <div className="card1">
                        <center>
                        <img src= {vegroll} alt="logo" width="130vwvh" height="100vwvh"/>
                        <div className="card-body">
                        <h6 className="card-title">VEG ROLL</h6>
                        <p className="card-text" /><center>
                        <a href="#" className="btn1 btn-primary">Add To Cart</a></center>
                        </div>
                        </center>
                        </div>
                        </div>
                        <div className="col">
                        <div className="card1">
                        <center>
                        <img src= {patties} alt="logo" width="130vwvh" height="100vwvh"/>
                        <div className="card-body">
                        <h6 className="card-title">Patties</h6>
                        <p className="card-text" /><center>
                        <a href="#" className="btn1 btn-primary">Add To Cart</a></center>
                        </div>
                        </center>
                        </div>
                        </div>
                        <div className="col">
                        <div className="card1">
                        <center>
                        <img src= {pastaroll} alt="logo" width="130vwvh" height="100vwvh"/>
                        <div className="card-body">
                        <h6 className="card-title">Pasta Roll</h6>
                        <p className="card-text" /><center>
                        <a href="#" className="btn1 btn-primary">Add To Cart</a></center>
                        </div>
                        </center>
                        </div>
                        </div>
                        <div className="col">
                        <div className="card1">
                        <center>
                        <img src= {papdichat} alt="logo" width="130vwvh" height="100vwvh"/>
                        <div className="card-body">
                        <h6 className="card-title">Papdi Chat</h6>
                        <p className="card-text" /><center>
                        <a href="#" className="btn1 btn-primary">Add To Cart</a></center>
                        </div>
                        </center>
                        </div>
                        </div>
                        <div className="col">
                        <div className="card1">
                        <center>
                        <img src= {hotdog} alt="logo" width="130vwvh" height="100vwvh"/>
                        <div className="card-body">
                        <h6 className="card-title">Hotdog</h6>
                        <p className="card-text" /><center>
                        <a href="#" className="btn1 btn-primary">Add To Cart</a></center>
                        </div>
                        </center>
                        </div>
                        </div>
                        <div className="col">
                        <div className="card1">
                        <center>
                        <img src= {samosa} alt="logo" width="130vwvh" height="100vwvh"/>
                        <div className="card-body">
                        <h6 className="card-title">Samosa</h6>
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
export default Snacks;
