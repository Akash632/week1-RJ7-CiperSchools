import React from "react";
import AppChild from "./AppChild";

class AppCall extends React.Component{
    state={
        name:"Akash", 
    };
        const details= [
            {
                name:"Akash",
                email:"akash@example.com",
                phone:9052777513,
            },
            {
                name:"Anant",
                email:"anant@example.com",
                phone:8341245289
            },
            {
                name:"Aradya",
                email:"aradya@example.com",
                phone:62348594303,
            },
        ]
    render(){
        // let array = details.map((value, index) =>{
        //     <AllUserDetails key = {index} value={value}/>
        // });
        setTimeout(()=>{
            this.setState({name: "Anant"});
        },1000);
      return (
        <div>
            {/* <AllUser user={details[0]}/>
            <AllUser user={details[1]}/>
            <AllUser user={details[2]}/> */}
        {
           details.map((value)=>(
               <AppChild user={value}/>
           ))
        }
        </div>
      )
    }
    }
   

export default AppCall;