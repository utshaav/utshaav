import React, { ReactNode } from 'react'
import { Link, Routes, Route, BrowserRouter, HashRouter } from 'react-router-dom'
import NavBar from '../Components/navbar/NavBar';
import Contact from '../screens/Contact/Contact';
import Introduction from '../screens/Introduction';
import PageNotFound from '../screens/PageNotFound';
import StopWatch from '../screens/Stopwatch/Stopwatch';
import Timer from '../screens/Stopwatch/Timer';

// interface ButtonProps {
//     children: ReactNode;
//     footer?: ReactNode;
//   };

// function Router({children, footer}:ButtonProps) {
  function Router() {
  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
        <div>
            <NavBar/>
        </div>
        <Routes>
        {["/home", "/", "/utshaav", ""].map((path, index) => 
            <Route path={path} key={index} element={<Introduction />}/>
         )}
         {["/stopwatch", "/portfolio/stopwatch"].map((path, index) => 
            <Route path={path} key={index} element={<StopWatch />}/>
         )}
          {["/contact-me","/contact" ,"/portfolio/contact-me"].map((path, index) => 
            <Route path={path} key={index} element={<Contact />}/>
         )}
          {/* portfolio */}

          <Route path='*'  element={<PageNotFound />}/>
        </Routes>
        {/* <div>
        {footer}

        </div> */}
    </HashRouter>
  )
}

export default Router