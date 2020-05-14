import React from "react";
import Second from './second';
class Firstpg extends React.Component{
    constructor(){
        super();
        this.state={
            x:1,
            username:"",
            password:"",
            ids:3,
            arr:[{name:"aditi",id:"1"} , {name:"adi",id:"2"} , {name:"abc",id:"3"}]
        
        }
    }
handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
    console.log(event.target.value);
  };
  add1(){
this.setState({x:this.state.x+1})
  }
  sub(){
if(this.state.x===0){return;}
this.setState({x:this.state.x-1})
  }
  

add=(prevState)=>{
    var valueArr = this.state.arr.map((item)=>  item.name );
    var isDuplicate = (valueArr.indexOf(this.state.password) !== -1) 
    isDuplicate ?   alert(isDuplicate + "this is duplicate"):
          this.setState({arr: this.state.arr.concat({name:this.state.password ,
         id: this.state.ids+1}) ,
         ids:this.state.ids+1 ,
         username: ""}
        );
    console.log(this.state.arr)
}
delete=(id)=>{
   this.setState({arr:this.state.arr.filter((val) => val.id!==id)})
console.log("this is delete",id)
}

componentWillMount(){
    console.log("new");
}

componentDidMount(){
    console.log("new1");
}
   

componentWillUpdate(){
    return  false;
    //console.log("new3");
}
componentDidUpdate(){
    return false;
    console.log("new4"); 
}

    render() {
        return(
            <div>
            
            <div>hii</div>
            <input type="text" value={this.state.username} onChange={(e)=>this.handleChange(e)}
             name="username"/>
    
            <button type="btn" onClick={()=>this.add()}>Add</button>
        <div>{this.state.arr.map((val , i)=>{
             return(<div key={i}> <Second prval={val} i={1} deleted={this.delete}/>
             </div>)})
    }
    <div>{this.state.arr.length===0?"Enter item":""}</div>
    <div>{this.state.arr.length===0 && "enter item"}</div>
    <button type="btn"onClick={()=>this.add1()}>+1</button>{this.state.x}
    <button type="btn"onClick={()=>this.sub()}>-1</button>
    {this.state.arr[0] && this.state.arr[0].name}
    </div>
    
    
</div>
        );
}

}
export default Firstpg;
