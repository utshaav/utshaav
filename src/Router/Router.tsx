import React, { ReactNode } from 'react'
import { Link, Routes, Route, BrowserRouter, HashRouter } from 'react-router-dom'
import Introduction from '../screens/Introduction';
import StopWatch from '../screens/Stopwatch/Stopwatch';
import Timer from '../screens/Stopwatch/Timer';

interface ButtonProps {
    children: ReactNode;
  };

function Router({children}:ButtonProps) {
  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
        <div>
            {children}
        </div>
        <Routes>
        {["/home", "/", "/utshaav", ""].map((path, index) => 
            <Route path={path} key={index} element={<Introduction />}/>
         )}
         {["/stopwatch", "/portfolio/stopwatch"].map((path, index) => 
            <Route path={path} key={index} element={<StopWatch />}/>
         )}
          portfolio
        </Routes>
    </HashRouter>
  )
}

export default Router