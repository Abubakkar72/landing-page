import './App.css';
import Desktop from './Components/desktop'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (

    <Router>
    <Routes>
      <Route path="/" element={<Desktop />} />
    </Routes>
  </Router>


    // <div className="App">
    //   {/* <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header> */
    //   <Desktop/>}
    // </div>
  );
}

export default App;
