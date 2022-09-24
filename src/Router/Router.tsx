import React, { ReactNode } from 'react'
import { Link, Routes, Route, BrowserRouter } from 'react-router-dom'
import Introduction from '../screens/Introduction';
import StopWatch from '../screens/Stopwatch/Stopwatch';
import Timer from '../screens/Stopwatch/Timer';

interface ButtonProps {
    children: ReactNode;
  };

function Router({children}:ButtonProps) {
  return (
    <BrowserRouter>
        <div>
            {children}
        </div>
        <Routes>
        {["/home", "/", "/utshaav"].map((path, index) => 
            <Route path={path} key={index} element={<Introduction />}/>
         )}
          
          <Route path="/stopwatch" element={<StopWatch />} />
        </Routes>
    </BrowserRouter>
  )
}

export default Router