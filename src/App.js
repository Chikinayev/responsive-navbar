import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" />
        <Route path="/products" />
        <Route path="/contacts" />
        <Route path="/about" />
      </Routes>
    </Router>
  );
}

export default App;
