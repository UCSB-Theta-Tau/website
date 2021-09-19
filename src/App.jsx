import React from 'react';
import {
  HashRouter as Router,
  Route,
} from 'react-router-dom';
import { Navbar } from './components';
import { Home, History } from './pages';

function App() {
  return (
    <Router>
      <Navbar />

      <Route exact path="/" component={Home} />

      <Route path="/history" component={History} />
      <Route path="/brotherhood" />
      <Route path="/professionalism" />
      <Route path="/service" />

      <Route path="/actives" />
      <Route path="/alumni" />

      <Route path="/rush" />
    </Router>
  );
}

export default App;
