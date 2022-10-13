import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Login from './pages/Login';

function App() {
  const [user, setUser] = useState(null);

  return (
    <div className="App">
      <Login />
      {/* <NavBar user = {user} setUser={setUser} />
      <main>
        <Routes>
          <Route path="/login"></Route>
          <Route path="/register"></Route>
        </Routes>        
      </main> */}
    </div>
  );
}

export default App;
