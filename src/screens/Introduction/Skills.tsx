import React from 'react'
import em from './Experience.module.scss';
import image from '../../assets/images/skills.gif';
import Arrow from '../../Components/Arrow';

function Skills() {
    return (
        <div id='skills' className="row s-row" style={{ height: '100vh', paddingTop: '4vh' }}>
            <div className={`${em.experience_text} col-md-7 center`}>
                <h3 className='title'>Skills</h3>
                <table>
                    <tbody>

                        <tr>
                            <th className='col-md-6'>Languages</th>
                            <th className='col-md-6'>Frameworks</th>
                            {/* <td className={`col-md-4 ${em.date}`}>AUG 2021 - DEC 2021</td> */}
                        </tr>
                        <tr>
                            <td className={em.description}>
                                <ul>
                                    <li>C#</li>
                                    <li>JS</li>
                                    <li>HTML/CSS</li>
                                    <li>Python</li>
                                    <li>Dart</li>
                                    {/* <li>Roles: CRUD operations, Fixing issues</li> */}
                                </ul>
                            </td>
                            <td className={em.description}>
                                <ul>
                                    <li>Dotnet (Core and Frameork)</li>
                                    <li>React.js</li>
                                    <li>Nest.js</li>
                                    <li>JQuery</li>
                                    <li>Express</li>
                                    <li>Flutter</li>
                                    {/* <li>Roles: CRUD operations, Fixing issues</li> */}
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <th className='col-md-6'>Databases</th>
                            <th className='col-md-6'>Tools</th>
                            {/* <td className={`col-md-4 ${em.date}`}>AUG 2021 - DEC 2021</td> */}
                        </tr>
                        <tr>
                            <td className={em.description}>
                                <ul>
                                    <li>Sql Server</li>
                                    <li>mySql, MariaDB</li>
                                    <li>Postgres</li>
                                    <li>MongoDB</li>
                                    {/* <li>Roles: CRUD operations, Fixing issues</li> */}
                                </ul>
                            </td>
                            <td className={em.description}>
                                <ul>
                                    <li>Git, SVN</li>
                                    <li>Github, Azure DevOps, Gitlab</li>
                                    <li>Visual Studios</li>
                                    <li>VSCode</li>
                                    <li>Postman</li>
                                    <li>Heroku</li>
                                    {/* <li>Flutter</li> */}
                                    {/* <li>Roles: CRUD operations, Fixing issues</li> */}
                                </ul>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="col-md-5 center image" style={{}} >
                <img className={em.image} src={image} alt="Mero pic lol" />
            </div>
            {/* <a href='#experience'> */}

                <div className="bottom-left">
                    <span className="text">EXPERIENCE</span>
                    <Arrow />
                </div>
            {/* </a> */}
        </div>
    )
}

export default Skills