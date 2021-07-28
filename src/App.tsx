import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';
import MainPage from './components/MainPage/MainPage';

function App() {
  return (
    <Router>
      <Route path="/" component={MainPage} exact />
    </Router>  
  );
}

export default App;
