import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Introduction from './screens/Introduction';
import NavBar from './Components/navbar/NavBar';
import Loader from './Components/Basics/Loader';
import Router from './Router/Router';
import { Navbar } from 'react-bootstrap';

function App() {
  return (
    <>
      {/* <Router footer={<NavBar/>}> */}
      <Router />
        {/* <Introduction /> */}  
    </>
  );
}

export default App;
