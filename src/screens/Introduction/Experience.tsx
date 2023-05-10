import React from 'react'
import em from './Experience.module.scss';
import image from '../../assets/images/programmer.gif';

function Experience() {
    return (
        <div className="row " style={{ height: '100vh' }}>
            <div className="col-md-5 center image" style={{}} >
                <img className={em.image} src={image} alt="Mero pic lol" />
            </div>
            <div className={`${em.experience_text} col-md-7 center`}>
                <h3 className='title'>Experiences</h3>
                <table>
                    <tr>
                        <th className='col-md-8'>SlilconSoft & IT Consultant</th>
                        <td className={`col-md-4 ${em.date}`}>August 2021 - December 2021</td>
                    </tr>
                    <tr>
                        <td className={em.position}>Dotnet Developer Internship</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td  className={em.description}>
                            <ul>
                                <li>Technologies: Dotnet Framework, SSMS, Sql Server, Git, github, JQuery, nestJS</li>
                                {/* <li>Roles: CRUD operations, Fixing issues</li> */}
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <th>Social IT World</th>
                        <td className={em.date}>December 2021 - August 2021</td>
                    </tr>
                    <tr>
                        <td className={em.position}>Junior Software Engineer</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td  className={em.description}>
                            <ul>
                                <li>Technologies: Dotnet Core, SSMS, Sql Server, Git, Azure DevOps, JQuery</li>
                                <li>Highlights: Payment Integration of Barclays Bank, worked on microservice architecture</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <th>Nimble Infosys</th>
                        <td className={em.date}>August 2022 - Present</td>
                    </tr>
                    <tr>
                        <td className={em.position}>Junior Software Engineer</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td  className={em.description}>
                            <ul>
                                <li>Technologies: Dotnet Framework, SSMS, Sql Server, SVN, JQuery</li>
                                <li>Highlights: Design and develop project management (similar to jira)</li>
                            </ul>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    )
}

export default Experience