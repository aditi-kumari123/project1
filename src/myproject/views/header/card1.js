import React from 'react';
import Card from './card';
import axios from 'axios';
class Card1 extends React.Component{
    constructor(){
        super();
        this.state={
            data:[]
        }
    }
    componentDidMount(){
        return axios.get("http://localhost:3000/abcdd")
        .then(res=>{
            console.log("hello aditi");
        console.log("this is body");
        this.setState({data:res.data})
        console.log(this.state.data);
         })
    }
    render(){
        var items = [];
        for(var i=0 ; i<this.state.data.length; i++)
        items.push(  <span><Card data1={this.state.data[i]}/></span>);
         return(
            <div>
                <div className="row4"> {items} </div>
            </div>
        
        )
}
}
export default Card1;
