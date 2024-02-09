import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Login from './components/Login';
import Home from './components/Home';

function App() {
  return (
    <div>
      <BrowserRouter>

      <Routes>

        <Route path="/" element={<><NavBar/><Login/></>}/>
        <Route path="/home" element={<><NavBar/><Home/></>}/>
        
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
