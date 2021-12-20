
import Routes from "./Routes";

const App = () => {
  return (
    <div className="bg-light">
      <Routes />
    </ div>
  );
}

export default App;


//   console.log('Parent component');
//   const num = 10;
//   const myData = { abc: 15, def: 25 }
//   const myArray = [10, 20, 30];

//   const [dataFromChild, setDataFromChild] = useState(4);

//   useEffect(() => {
//     console.log('parent useEffect');
//     setDataFromChild(5);
//   }, []);

//   const parentFun = (arg) => {
//     console.log('parentFun');
//     setDataFromChild(arg()); // callback
//     console.log(dataFromChild);
//   }


//   return (
//     <div>
//       <Header />
//       <div className="container">
//         <p className="display-4 text-primary" >CG React App</p>
//         <SpringBootData />
//         {/* <Hello /> */}
//         {/* <Login /> */}
//         {/* <Register /> */}
//         {/* <p>Child data in parent component: {dataFromChild} </p> */}
//         {/* This will not work */}
//         {/* <p>{myData} </p> */}
//         {/* This will work  */}
//         {/* <p>{myData.abc} </p>
//         <p>{myData.def} </p>
//         <p>{myArray}</p>
//         <p>{myArray[0]}</p>
//         <p>{num}</p>
//         <EmpData
//           // normalFun={aNormalFunction}
//           callParentFun={parentFun}
//           someData={myData}
//           numToPassToChild={num}
//           anotherData={myData}
//         /> */}
//       </div>
//     </div>
//   );
// }
// export default App;

// function App() {
//   return (
//     <div>
//       <h1>CG React App</h1>
//       <p>Welcome to Capgemini React App...</p>
//     </div>
//   );
// }
// export default App;



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
































//Mine
// // import { useState } from "react";
// import { useEffect, useState } from "react";
// import EmpDept from "./components/EmpDept";
// import EmpData from "./components/EmpData";

// import Header from "./components/Header";

// const App = () => {
//   console.log('Parent component');
//   const num = 10;
//   const myData = { abc: 15, def: 25 }
//   const myArray = [10, 20, 30];

//   const [dataFromChild, setDataFromChild] = useState(4);
//   const [dataFromDept, setDataFromDept] = useState(100);
//   const [nameDataFromDept, setNameDataFromDept] = useState("No Pta");
//   console.log(nameDataFromDept);

//   useEffect(() => {
//     console.log('parent useEffect');
//     setDataFromChild(5);
//     setDataFromDept(5);
//     setNameDataFromDept("Kya Pata")
//   }, []);

//   // useEffect(() => {
//   //   console.log('parent useEffect');
//   //   setDataFromDept(5);
//   // }, []);

//   const parentFun = (arg) => {
//     console.log('parentFun');
//     setDataFromChild(arg()); // callback
//     console.log(dataFromChild);
//   }

//   const deptParent = (arg) => {
//     console.log('Dept Parent');
//     setDataFromDept(arg()); // callback
//     console.log(dataFromDept);
//   }

//   const deptParentName = (arg) => {
//     console.log('Dept Parent Name');
//     setNameDataFromDept(arg()); // callback
//     console.log(nameDataFromDept);
//   }


//   return (
//     <div>
//       <Header />
//       <div className="container">
//         <p className="display-4 text-primary" >CG React App</p>
//         <p>Child data in parent component: {dataFromChild} </p>
//         <p>Dept data in parent component: {dataFromDept} </p>
//         <p>Dept Name data in parent component: {nameDataFromDept} </p>
//         {/* This will not work */}
//         {/* <p>{myData} </p> */}
//         {/* This will work  */}
//         {/* <p>{myData.abc} </p>
//         <p>{myData.def} </p>
//         <p>{myArray}</p>
//         <p>{myArray[0]}</p>
//         <p>{num}</p> */}
//         <EmpData
//           // normalFun={aNormalFunction}
//           callParentFun={parentFun}
//           someData={myData}
//           numToPassToChild={num}
//           anotherData={myData}
//         />
//         <EmpDept
//           // normalFun={aNormalFunction}
//           callDeptParent={deptParent}
//           callNameDeptParent={deptParentName}
//         />
//       </div>
//     </div>
//   );
// }
// export default App;

// // function App() {
// //   return (
// //     <div>
// //       <h1>CG React App</h1>
// //       <p>Welcome to Capgemini React App...</p>
// //     </div>
// //   );
// // }
// // export default App;



// // import logo from './logo.svg';
// // import './App.css';

// // function App() {
// //   return (
// //     <div className="App">
// //       <header className="App-header">
// //         <img src={logo} className="App-logo" alt="logo" />
// //         <p>
// //           Edit <code>src/App.js</code> and save to reload.
// //         </p>
// //         <a
// //           className="App-link"
// //           href="https://reactjs.org"
// //           target="_blank"
// //           rel="noopener noreferrer"
// //         >
// //           Learn React
// //         </a>
// //       </header>
// //     </div>
// //   );
// // }
// // export default App;