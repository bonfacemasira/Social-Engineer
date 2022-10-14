import logo from './logo.svg';
import './App.css';
import ProjectList from './pages/ProjectList';
import React, {useEffect} from 'react';

function App() {
  let $user
  useEffect(() => {
    const id = 1
    fetch(`/users/${id}`)
    .then(res => res.json())
    .then(data => $user=data[0])
  }, [])

  return (
    <div className="App">
      <p>Testing</p>
      <ProjectList user={$user}/>
    </div>
  );
}

export default App;
