import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Introduction from './screens/Introduction';
import NavBar from './Components/navbar/NavBar';
import Loader from './Components/Basics/Loader';
import Router from './Router/Router';
import { Navbar } from 'react-bootstrap';

import './assets/fonts/clockicons.ttf';
import './assets/fonts/Fellya.ttf';
import './assets/fonts/Halimun.ttf';


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
