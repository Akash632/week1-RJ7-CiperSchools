import React, {Component } from "react";

// const AppChild = (props) => {
//     // let user=props.user
//   return (
//     <div>
//         <h3>{props.name}</h3>
//         <p>Email : {props.email}</p>
//         <p>Phone-Number:{props.phone}</p>
//     </div>
//   )
// }
// // class AllUser extends.components{
// //    user= this.props.user;
// // }
// export default AppChild;

//we should not never ever modify a prop property because they are read-only properties.

class AppChild extends Component {
  user = this.props.user;
  render() {
    return (
      <div>
        <h3>{this.user.name}</h3>
        <p>Email : {this.user.email}</p>
         <p>Phone-Number:{this.user.phone}</p>
      </div>
    );
  }
}
export default AppChild;
