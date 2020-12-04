import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
import './App.css';
import Header from './Components/Header/Header';
import List from './Components/List/List';


function App() {
  return (
    <div>
      <Header></Header>
      <List></List>
    </div>
  );
}

export default App;
