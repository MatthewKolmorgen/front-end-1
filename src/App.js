import React from 'react';
import { Route, Link, Switch, Redirect } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      
      <Link to='/'>
        <MainContent />
      </Link>
      <Link to='/instructor'>
        <Instructor />
      </Link>
      <Link to='/member'>
        <Members />
      </Link>
    </div>
  );
}

export default App