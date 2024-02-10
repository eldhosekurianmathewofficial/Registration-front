import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Login from './components/Login';
import Home from './components/Home';
import Signup from './components/Signup';
import Posts from './components/Posts';

function App() {
  return (
    <div>
      <BrowserRouter>

      <Routes>

        <Route path="/" element={<><Login/></>}/>
        <Route path="/home" element={<><Home/></>}/>
        <Route path="/signup" element={<><Signup/></>}/>
        <Route path="/posts" element={<><Posts/></>}/>
        
        
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
