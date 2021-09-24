import React from 'react';
import {
  HashRouter as Router,
  Route,
} from 'react-router-dom';
import { Navbar } from './components';
import {
  Home, History, Brotherhood, Professionalism,
} from './pages';

function App() {
  return (
    <Router>
      <Navbar />

      <Route exact path="/" component={Home} />

      <Route path="/history" component={History} />
      <Route path="/brotherhood" component={Brotherhood} />
      <Route path="/professionalism" component={Professionalism} />
      <Route path="/service" />

      <Route path="/actives" />
      <Route path="/alumni" />

      <Route path="/rush" />
    </Router>
  );
}

export default App;
