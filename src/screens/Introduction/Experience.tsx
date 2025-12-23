import React from 'react'
import em from './Experience.module.scss';
import image from '../../assets/images/programmer.gif';

function Experience() {
    return (
        <div className="row s-row" style={{ height: '100vh', paddingTop: '4vh' }}>
            <div className="col-md-5 center image">
                <img className={em.image} src={image} alt="Developer illustration" />
            </div>

            <div className={`${em.experience_text} col-md-7 center`}>
                <h3 className='title'>Experience</h3>

                <table>
                    <tbody>

                        {/* Kash4me */}
                        <tr>
                            <th>Kash4me</th>
                            <td className={em.date}>2023 – Present</td>
                        </tr>
                        <tr>
                            <td className={em.position}>Full Stack Developer</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td className={em.description}>
                                <ul>
                                    <li>Worked across front-end, backend services, and databases to support high-volume financial and transactional workflows.</li>
                                    <li>Implemented and evolved REST APIs with backward-compatible changes to safely introduce new features.</li>
                                    <li>Improved application performance by identifying bottlenecks and optimizing critical data access paths.</li>
                                    <li>Supported CI/CD pipelines and deployments to improve release reliability and reduce manual effort.</li>
                                </ul>
                            </td>
                        </tr>

                        {/* Nimble Infosys */}
                        <tr>
                            <th>Nimble Infosys</th>
                            <td className={em.date}>2021 – 2023</td>
                        </tr>
                        <tr>
                            <td className={em.position}>Software Engineer</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td className={em.description}>
                                <ul>
                                    <li>Contributed to the development and maintenance of web-based business applications.</li>
                                    <li>Implemented backend logic and APIs while working within existing systems and databases.</li>
                                    <li>Investigated and resolved bugs across application and data layers in testing and production environments.</li>
                                    <li>Collaborated with team members through code reviews and sprint-based development.</li>
                                </ul>
                            </td>
                        </tr>

                        {/* Softshala Nepal */}
                        <tr>
                            <th>Softshala Nepal</th>
                            <td className={em.date}>2019 – 2021</td>
                        </tr>
                        <tr>
                            <td className={em.position}>Associate Software Engineer</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td className={em.description}>
                                <ul>
                                    <li>Supported internal and client-facing application development by implementing features and fixing defects.</li>
                                    <li>Assisted in maintaining live systems, investigating issues, and supporting deployments.</li>
                                    <li>Worked closely with senior engineers to understand existing codebases and development workflows.</li>
                                    <li>Built a strong foundation in writing maintainable code within real production constraints.</li>
                                </ul>
                            </td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Experience;
