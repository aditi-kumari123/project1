import React from "react";
import Modal from 'react-modal';
import {BrowserRouter, Switch, Route, Link,NavLink} from "react-router-dom";
class Modals extends React.Component{
  constructor (){
    super();
    this.state={
      isOpen:false
    }
  }
render(){
    return(
        <div>
  <ul>
             <li><Link to ={'/'}>Home</Link></li>
            <li><Link to ={'/Second'}>Login</Link></li> 
            <li><Link to ={'/Third'}>Third</Link></li> 
        </ul>
        <div><NavLink to={'/second/1'}>id 1</NavLink></div>
        <div><NavLink to={'/second/2'}>id 2</NavLink></div>
        <div><NavLink to={'/second/3'}>id 3</NavLink></div>
       
      
        <button onClick={()=>{this.setState({isOpen:true});
        }}> Open Modal </button>
            <Modal
          isOpen={this.state.isOpen}
          //onAfterOpen={this.afterOpenModal}
          //onRequestClose={this.closeModal}
          //style={customStyles}
          contentLabel="Example Modal"
        >
 
          <h2 ref={subtitle => this.subtitle = subtitle}>Hello</h2>
          <button onClick={()=>{this.setState({isOpen:false});
        }}> close </button>


          <div>I am a modal</div>
          <form>
            <input />
            <button>tab navigation</button>
            <button>stays</button>
            <button>inside</button>
            <button>the modal</button>
          </form>
        </Modal>
        </div>
        )
    }
}
export default Modals;