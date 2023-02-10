import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Introduction from './screens/Introduction';
import NavBar from './Components/navbar/NavBar';
import Loader from './Components/Basics/Loader';
import Router from './Router/Router';
import { Navbar } from 'react-bootstrap';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      {/* <Router footer={<NavBar/>}> */}
      <ToastContainer />
      <Router />
        {/* <Introduction /> */}  
    </>
  );
}

export default App;
