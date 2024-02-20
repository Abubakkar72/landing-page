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

  );
}

export default App;
