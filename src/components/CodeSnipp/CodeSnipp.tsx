import React from 'react'
import './CodeSnipp.scss'

function CodeSnipp() {
  return (
    <div className='code'>
      <div className='codeHeader'>
        <span className='headerButton'>
          <span className='circle red'></span>
          <span className='circle yellow'></span>
          <span className='circle green'></span>
        </span>
        <span>HeaderTitle.js</span>
      </div>
      <div className='codeBody'>
        {/* Constant */}
        <span className='identifier'>const </span>
        <span className='variable'>personalInfo </span>
        <span className='operator'>=</span>
        <span className='braces'> &#123; </span><br/> 
        {/* End Constant */}
        <span className='key'>Name </span>
        <span className='seperator'> : </span>
        <span className='value'> 'Utsav Kuinkel'</span> <br/>
        


        {/* <span className='braces'> &#123; </span>
        <span className='end_braces'> &#125; </span> */}
        {/* Constant */}
        <span className='end_braces'> &#125; </span>
        {/* End Constant */}
        
      </div>
    </div>
  )
}

export default CodeSnipp