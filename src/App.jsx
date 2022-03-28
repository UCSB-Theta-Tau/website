import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import { Navbar } from './components';
import { Actives, Alumni, Brotherhood, History, Home, Professionalism, Rush, Service } from './pages';

function App() {
  return (
    <Router>
      <Navbar />

      <Route exact path="/" component={Home} />

      <Route path="/history" component={History} />
      <Route path="/brotherhood" component={Brotherhood} />
      <Route path="/professionalism" component={Professionalism} />
      <Route path="/service" component={Service} />

      <Route path="/actives" component={Actives} />
      <Route path="/alumni" component={Alumni} />

      <Route path="/rush" component={Rush} />
    </Router>
  );
}

export default App;
