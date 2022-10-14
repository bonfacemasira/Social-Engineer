import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Login from './pages/Login';

function App() {
  // const [user, setUser] = useState(null);

  return (
    <div>
      <Login />
    </div>
  );
}

export default App;
