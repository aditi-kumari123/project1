// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
// import Firstpg from './component/firstpg';
// import Modals from './component/modal';
// import Second from "./component/second";
// import Third from "./component/third";
import React from "react";
import {BrowserRouter, Switch, Route, Link, NavLink} from "react-router-dom";
import Header from "./myproject/views/header/header";
import Footer from "./myproject/views/header/footer";
import Body from "./myproject/views/header/body";
import Form1 from './myproject/views/header/form';
import Login from "./myproject/views/header/login";
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
