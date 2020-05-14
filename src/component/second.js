import React from "react";
import "./second.css";
import myimg from "../../src/myimg/gulabjamun.png";
 function Second(props){
      return(
             <div>hello
                 <div> {props.match.params.id}</div>
                {console.log()}
        {/* {props.prval.name}{props.prval.id} */}
        <button onClick={()=>props.deleted(props.prval.id)}>x</button>
        <img src= {myimg}></img>
            </div>
        );
    }

export default Second;
