import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

 
import Home from './Pages/Home';

function App() {
  return (
    <div>
      <Router>
        <Route path ='/' >
        <Home />
        </Route>
      </Router>
    </div>
  );
}

export default App;
