import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import { Navbar } from './components';
import { Home } from './pages';

function App() {
  return (
    <Router>
      <Navbar />

      <Route exact path="/" component={Home} />

      <Route path="/history" />
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
