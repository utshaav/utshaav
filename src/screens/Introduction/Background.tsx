import React from 'react'
import em from './Experience.module.scss';
import image from '../../assets/images/brief.gif';

function Background() {
    return (
        <div className="row " style={{ height: '100vh',paddingTop: '4vh' }}>
            <div className="col-md-5 center image" style={{}} >
                <img className={em.image} src={image} alt="Mero pic lol" />
            </div>
            <div className={`${em.experience_text} col-md-7 center`}>
                <h3 className='title'>Brief</h3>
                
                <div className={em.position}>
                I recently completed my Bachelor's in Computer Science and Information Technology 
                from Madan Bhandari Memorial College, Anamnagar Kathmandu. <br/> <br/>
                Over the year I invested my fair share of time, in android development, 
                to OOP programming, did fair bit of python coding to learning basics 
                of machine learning. Finally I discovered my passion for Web development 
                and shifted to developing Web Applications using Microsoft's Dotnet Framework. 
                I have done few personal projects in dotnet and worked as a software engineer.  <br/><br/>
                My goal is to explore furthermore into machine learning and implement the magic of ML into
                Web Development.
                </div>
               
            </div>
        </div>
    )
}

export default Background