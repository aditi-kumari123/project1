import React from 'react';
import Slider from "react-slick";
import catering1 from "../../../myimg/catering1.jpg";
import catering2 from "../../../myimg/catering2.jpg";
import catering4 from "../../../myimg/catering4.jpg";
import catering6 from "../../../myimg/catering6.jpg";
import catering8 from "../../../myimg/catering8.jpg";
class Catering extends React.Component {
    render(){
        var settings = {
            dots: false,
            infinite: true,
            speed: 800,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            autoplay: true,
            speed: 4000,
          autoplaySpeed:500,
        }
        return(
                    <div className="form_text">
                        <h1 className="font"><center><b><i><u>CATERING</u></i></b></center></h1>
                            <div>
                            <Slider {...settings}>
                            <img className="cat_img" src= {catering1} alt="logo" width="120vwvh" height="300vwvh"/>
                            <img className="cat_img" src= {catering2} alt="logo" width="120vwvh" height="300vwvh"/>
                            <img className="cat_img" src= {catering4} alt="logo" width="120vwvh" height="300vwvh"/>
                            <img className="cat_img" src= {catering6} alt="logo" width="120vwvh" height="300vwvh"/>
                            <img className="cat_img" src= {catering8} alt="logo" width="120vwvh" height="300vwvh"/>
                            </Slider> 
                            <div>
                            <p className="cat_text">
                                Shree jee has also been serving as a catering company where we create perfect and quintessential environment and make our customers encounter a wide spectrum of top quality and exquisite and elite services of hospitality.
                                Shree jee caterers can help you in arranging  a deluxe and epicurean atmosphere for turning your event brighter and memorable.
                                We also have our Shree Jee Utsav Bhawan which is efficient for a gathering of 300 people. Shree Jee Utsav Bhawan is used for wedding parties, corporate parties, theme parties, private parties and niche parties.
                                Just enjoy the eminent moment and your special time. Appreciate an outstanding event with long lasting and extraordinary memories, being sure that there can be nothing you need to worry about, except alluring
                                the beautiful day because you can rely on our services taking care of your individual and personal needs.
                            </p>

                            </div>
                     </div>

                    </div>
        )}
}
export default Catering;
