import React from 'react'
import { Routes, Route, HashRouter } from 'react-router-dom'
import NavBar from '../Components/navbar/NavBar';
import SignIn from '../screens/Authorization/SignIn';
import Contact from '../screens/Contact/Contact';
import DisplayDocs from '../screens/Documentations/DisplayDocs';
import Introduction from '../screens/Introduction/Introduction';
import PageNotFound from '../screens/PageNotFound';
import StopWatch from '../screens/Stopwatch/Stopwatch';

// interface ButtonProps {
//     children: ReactNode;
//     footer?: ReactNode;
//   };

// function Router({children, footer}:ButtonProps) {
function Router() {
  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
      <div>
        <NavBar />
      </div>
      <Routes>
        {["/home", "/", "/utshaav", ""].map((path, index) =>
          <Route path={path} key={index} element={<Introduction />} />
        )}
        {["/stopwatch", "/portfolio/stopwatch"].map((path, index) =>
          <Route path={path} key={index} element={<StopWatch />} />
        )}
        {["/contact-me", "/contact", "/portfolio/contact-me"].map((path, index) =>
          <Route path={path} key={index} element={<Contact />} />
        )}

        {["/sign-in", "/register", "/portfolio/register"].map((path, index) =>
          <Route path={path} key={index} element={<SignIn />} />
        )}

        {["/document", "/documentation", "/portfolio/documentation"].map((path, index) =>
          <Route path={path} key={index} element={<DisplayDocs />} />
        )}
        {/* portfolio */}

        <Route path='*' element={<PageNotFound />} />
      </Routes>
      {/* <div>
        {footer}

        </div> */}
    </HashRouter>
  )
}

export default Router