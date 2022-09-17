// import { prototype } from 'events';
import React from 'react'
import loader from './Loader.module.scss';
interface prototype {
  animate? : boolean
}

const child = ()  => {
  return(
    <div className={loader.main}>
          <i className="devicon-dotnetcore-plain"></i>
          <i className="devicon-spring-plain"></i>
          <i className="devicon-vscode-plain"></i>
          <i className="devicon-javascript-plain"></i>
          <i className="devicon-jquery-plain"></i>
          <i className="devicon-react-plain"></i>
      </div>
  )
}

const wrappedChild = ()  => {
  return(
    <div className={loader.animate}>
      {child()}
    </div>
  )
}

function Loader({animate = false}: prototype) {
  return(
    animate ? wrappedChild() : child()
  )
}

export default Loader