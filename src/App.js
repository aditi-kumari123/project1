import React from "react";
import {BrowserRouter, Switch, Route, Link, NavLink} from "react-router-dom";
import Header from "./myproject/views/header/header";
import Footer from "./myproject/views/header/footer";
import Body from "./myproject/views/header/body";
import Form1 from './myproject/views/header/form';
import SignUp from "./myproject/views/header/form2";

class App extends React.Component {
    
    render(){
  
        return(
        <div>
           <Header/>
         <BrowserRouter>       
        <Switch>
            {/* <Route exact path="/" component={Header}/>
            <Route exact path="/Header" component={Footer}/> */}
              
      <Route exact path="/login"component={SignUp}/> 
      <Route exact path="/signup"component={Form1}/> 
      
            <Body/>
        </Switch>      
         </BrowserRouter>
         <Footer/>
        </div>
        );
     }

}
export default App;
