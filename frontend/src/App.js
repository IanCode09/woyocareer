import React from 'react';
import {  BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import HomeScreen from './screens/HomeScreen'
import JobScreen from './screens/JobScreen'

function App() {
  return (
    <Router>
      <Route path='/' component={ HomeScreen } exact />
      <Route path='/job' component={ JobScreen } exact />
    </Router>
  );
}

export default App;
