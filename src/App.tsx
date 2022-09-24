import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Introduction from './screens/Introduction';
import NavBar from './components/navbar/NavBar';
import Loader from './components/Basics/Loader';
import Router from './Router/Router';

function App() {
  return (
    <>
      <Router>
        <NavBar />
        {/* <Introduction /> */}
      </Router>
    </>
  );
}

export default App;
