import React from 'react';
import './App.scss';
import Router from './Router/Router';
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
