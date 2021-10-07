import React, { Component  }  from 'react';
import MyName from './MyName';
import axios from 'axios';
// import useFetchBuildingIntroduction from "./userFetchBuildingIntroduction";
class App extends Component {
  render() {
    return (
      <MyName name="리액트" />
    );
  }
}



export default App;
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

