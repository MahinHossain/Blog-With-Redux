import React, { Component, useEffect, useState } from "react";

// export default function Riyaz() {
//   const [DDL1, setDDL1] = useState([]);
//   const [DDL2, setDDL2] = useState([]);
//   const [selectddl, setselected] = useState("");

//   useEffect(() => {
//     setDDL1({
//       DDL1: [
//         { name: "Colors", DDL2: ["red", "green", "blue", "violent"] },
//         { name: "Fruits", DDL2: ["Mango", "Banana", "Apple", "Lichee"] },
//         { name: "Sports", DDL2: ["Football", "Cricket", "blue", "violent"] },
//         { name: "Country", DDL2: ["red", "bangladesh", "blue", "India"] },
//       ],
//     });
//   }, []);

//   const selectChange = (e) => {
//     selectddl(e.target.value);
//     DDL2(DDL1.find((x) => x.name === e.target.value).state.DDL2);
//   };
//   console.log(`DDL1`, DDL1.DDL1);
//   return (
//     <div>
//       <h3>How To Implement DDL </h3>
//       <h3>Lorem ipsum dolor sit amet.</h3>
//       <hr />
//       <select value={selectddl} onChange={(e) => selectChange(e)}>
//         <option> ---Select--- </option>
//         {/* {DDL1.map((x) => {
//           console.log(`DDL1`, DDL1);
//           return <option> {x.name} </option>;
//         })}
//       </select>

//       <select>
//         <option selected disabled>
//           ----------
//         </option>
//         {DDL2.map((x) => {
//           return <option> {x} </option>;
//         })} */}
//       </select>
//     </div>
//   );
// }
// import React, { useState, useEffect } from "react";

function ComponentName() {
  const [DDL1, setDDL1] = useState([]);
  const [DDL2, setDDL2] = useState([]);
  const [selectddl, setselected] = useState("");

  useEffect(() => {
    const cloneDDL1 = [...DDL1];
    cloneDDL1.push(
      { name: "Colors", DDL2: ["red", "green", "blue", "violent"] },
      { name: "Fruits", DDL2: ["Mango", "Banana", "Apple", "Lichee"] },
      { name: "Sports", DDL2: ["Football", "Cricket", "blue", "violent"] },
      { name: "Country", DDL2: ["red", "bangladesh", "blue", "India"] }
    );

    setDDL1(cloneDDL1);
  }, []);

  console.log("DDL1 => ", DDL1);
  console.log("DDL2 => ", DDL2);

  const selectChange = (e) => {
    setselected(e.target.value);
    const value = DDL1.filter((item) => {
      return e.target.value === item.name;
    }).map((item) => item.DDL2);

    setDDL2(value[0]);
  };

  return (
    <div>
      <h3>How To Implement DDL </h3>
      <h3>Lorem ipsum dolor sit amet.</h3>
      <hr />
      <select value={selectddl} onChange={selectChange.bind(this)}>
        <option> ---Select--- </option>
        {DDL1.map((x, i) => {
          return <option key={i}> {x.name} </option>;
        })}
      </select>

      <select>
        <option selected disabled>
          ----------
        </option>
        {DDL2.map((x, i) => (
          <option key={i}> {x} </option>
        ))}
      </select>
    </div>
  );
}

export default ComponentName;

// export default class componentName extends Component {
//   constructor() {
//     super();
//     this.state = {
//       DDL1: [],
//       DDL2: [],
//       selectddl: "",
//     };
//   }
//   componentDidMount() {
//     this.setState({
//       DDL1: [
//         { name: "Colors", DDL2: ["red", "green", "blue", "violent"] },
//         { name: "Fruits", DDL2: ["Mango", "Banana", "Apple", "Lichee"] },
//         { name: "Sports", DDL2: ["Football", "Cricket", "blue", "violent"] },
//         { name: "Country", DDL2: ["red", "bangladesh", "blue", "India"] },
//       ],
//     });
//   }

//   selectChange(e) {
//     this.setState({ selectddl: e.target.value });
//     this.setState({
//       DDL2: this.state.DDL1.find((x) => x.name === e.target.value).DDL2,
//     });
//     console.log(this.state.DDL1.find((x) => x.name === e.target.value).DDL2);
//   }

//   render() {
//     console.log("ddd222 => ", this.state.DDL2);
//     return (
//       <div>
//         <h3>How To Implement DDL </h3>
//         <h3>Lorem ipsum dolor sit amet.</h3>
//         <hr />
//         <select
//           value={this.state.selectddl}
//           onChange={this.selectChange.bind(this)}
//         >
//           <option> ---Select--- </option>
//           {this.state.DDL1.map((x) => {
//             return <option> {x.name} </option>;
//           })}
//         </select>

//         <select>
//           <option selected disabled>
//             ----------
//           </option>
//           {this.state.DDL2.map((x) => {
//             return <option> {x} </option>;
//           })}
//         </select>
//       </div>
//     );
//   }
// }
