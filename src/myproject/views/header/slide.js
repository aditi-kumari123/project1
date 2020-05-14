import React from 'react';
import Slider from "react-slick";
import gulabjamun from "../../../myimg/gulabjamun.png";
import motichur from "../../../myimg/motichur.png";
import samosa from "../../../myimg/samosa.png";
import rasmalai from "../../../myimg/rasmalai.png";
import spicysev from "../../../myimg/spicysev.png";
import './slide.css';

class Slide  extends React.Component{
    render(){
        var settings = {
            dots: true,
            infinite: true,
            speed: 800,
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: true,
            autoplay: true,
            speed: 4000,
          autoplaySpeed:500,
        }
return(
    <div style={{width: "100%" , overflow : "hidden"}}>
        <div>
                 <Slider {...settings}>
                    <div className="col">
                        <div className="card_slide">
                        <center>
                        <img src= {spicysev} alt="logo" width="130vwvh"height="100vwvh"/>
                        <div className="card-body">
                        <h6 className="card-title">Spicy Sev</h6>
                        <p className="card-text" /><center>
                        <a href="#" className="btn1 btn-primary">Add To Cart</a></center>
                        </div>
                        </center>
                    </div>
                    </div>
                    <div className="col">
                        <div className="card_slide">
                        <center>
                        <img src= {gulabjamun} alt="logo" width="140vwvh"height="100vwvh"/>
                        <div className="card-body">
                        <h6 className="card-title">Gulabjamun</h6>
                        <p className="card-text" /><center>
                        <a href="#" className="btn1 btn-primary">Add To Cart</a></center>
                        </div>
                        </center>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card_slide">
                        <center>
                        <img src= {motichur} alt="logo" width="130vwvh"height="100vwvh"/>
                        <div className="card-body">
                        <h6 className="card-title">Motichur</h6>
                        <p className="card-text" /><center>
                        <a href="#" className="btn1 btn-primary">Add To Cart</a></center>
                        </div>
                        </center>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card_slide">
                        <center>
                        <img src= {samosa} alt="logo" width="135vwvh"height="100vwvh"/>
                        <div className="card-body">
                        <h6 className="card-title">Samosa</h6>
                        <p className="card-text" /><center>
                        <a href="#" className="btn1 btn-primary">Add To Cart</a></center>
                        </div>
                        </center>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card_slide">
                        <center>
                        <img src= {rasmalai} alt="logo" width="150vwvh" height="100vwvh"/>
                        <div className="card-body">
                        <h6 className="card-title">Rasmalai</h6>
                        <p className="card-text" /><center>
                        <a href="#" className="btn1 btn-primary">Add To Cart</a></center>
                        </div>
                        </center>
                        </div>
                    </div>
                    </Slider>
            </div>
    </div>
)
    }

}
export default Slide;