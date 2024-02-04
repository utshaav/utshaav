import React from 'react'
import em from './Experience.module.scss';
import image from '../../assets/images/programmer.gif';

function Experience() {
    return (
        <div className="row " style={{ height: '100vh', paddingTop: '4vh'}}>
            <div className="col-md-5 center image" style={{}} >
                <img className={em.image} src={image} alt="Mero pic lol" />
            </div>
            <div className={`${em.experience_text} col-md-7 center`}>
                <h3 className='title'>Experiences</h3>
                <table>
                    <tbody>
                    <tr>
                            <th>Nimble Infosys</th>
                            <td className={em.date}>AUG 2022 - OCT 2023</td>
                        </tr>
                        <tr>
                            <td className={em.position}>Junior Software Engineer</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td className={em.description}>
                                <ul>
                                    <li>Technologies: Dotnet Framework, SSMS, Sql Server, SVN, JQuery</li>
                                    <li>Highlights: Design and develop project management (similar to jira)</li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <th>Softshala Nepal</th>
                            <td className={em.date}>AUG 2021 - AUG 2022</td>
                        </tr>
                        <tr>
                            <td className={em.position}>Junior Software Engineer</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td className={em.description}>
                                <ul>
                                    <li>Technologies: Dotnet Core, SSMS, Sql Server, Git, Azure DevOps, JQuery, nestJS</li>
                                    <li>Highlights: Payment Integration of Barclays Bank, worked on microservice architecture</li>
                                </ul>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Experience