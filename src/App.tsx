import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Introduction from './screens/Introduction';
import NavBar from './components/navbar/NavBar';

function App() {
  return (
    <>
      <NavBar />
      <Introduction />
    </>
  );
}

export default App;
