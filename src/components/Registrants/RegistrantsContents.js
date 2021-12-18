import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import exportIcon from '../../assets/image/export.svg';
import userPlusIcon from '../../assets/image/user-plus.svg';
import ragistrant1 from '../../assets/image/ragistrants1.png';
import ragistrant2 from '../../assets/image/ragistrants2.png';
import ragistrant3 from '../../assets/image/registrants3.png';
import flag from '../../assets/image/flag.png';
import './Ragistrants.css';

const RegistrantsContents = () => {

    const location = useLocation();
    const path = location.pathname;
    console.log(path);
    useEffect(() => {
        const elearning = document.getElementById('e-learning');
        const lightBtn = document.getElementById('light-btn');
        if (path === '/sessions' || '/session/registrants') {
            elearning.style.display = 'none';
            lightBtn.style.display = 'none';
        }
    }, [path]);

    const registantsDate = [
        {
            image: ragistrant1,
            name: 'Max Clark',
            email: 'maxclark@gmail.com',
            country: flag,
            date: 'May 21, 2021',
            attended: '3/3',
            flag: flag
        },
        {
            image: ragistrant2,
            name: 'Max Clark',
            email: 'maxclark@gmail.com',
            country: flag,
            date: 'May 21, 2021',
            attended: '3/3',
            flag: flag
        },
        {
            image: ragistrant3,
            name: 'Max Clark',
            email: 'maxclark@gmail.com',
            country: flag,
            date: 'May 21, 2021',
            attended: '3/3',
            flag: flag
        },
        {
            image: ragistrant3,
            name: 'Max Clark',
            email: 'maxclark@gmail.com',
            country: flag,
            date: 'May 21, 2021',
            attended: '3/3',
            flag: flag
        },
        {
            image: ragistrant2,
            name: 'Max Clark',
            email: 'maxclark@gmail.com',
            country: flag,
            date: 'May 21, 2021',
            attended: '3/3',
            flag: flag
        },
    ]

    return (
        <div className='container-fluid' style={{ marginTop: '60px' }}>
            <div className="row">
                <div className="col-12">
                    <div className="session-top-content d-flex justify-content-between align-items-center">
                        <Link to="/courses" className='text-decoration-none navigation-text'>
                            <i className="fas fa-chevron-left primary-color pe-3" style={{ fontSize: "18px" }}></i> Nagotiation
                        </Link>
                        <div className='ragistrants-top-btns'>
                            <button className='light-btn me-5'> <i className="fas fa-share-alt"></i> Share</button>
                            <button className='light-btn'> <i className="fas fa-plus"></i> Add Session</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="row">
                    <div className="col-12">
                        <div className="session-wrapper">
                            <div className="session-container">
                                <div className="session-menu d-flex align-items-center justify-content-between">
                                    <div className="session-left-menu w-50">
                                        <span><Link to="/sessions" style={{ color: '#B9B9B9' }}>Session</Link></span>
                                        <span><Link to="/session/registrants" >Registants</Link></span>
                                        <span><Link to="/session/setting" style={{ color: '#B9B9B9' }} >Setting</Link></span>
                                    </div>
                                    <div className="session-right-menu ragistrants-import-export">
                                        <button className="btn btn-primary" style={{ marginRight: '37px', fontSize: '12px', paddingTop:'8px' }}>
                                            <img src={exportIcon} alt="export" style={{ marginRight: '12px', paddingBottom: '5px' }} />
                                            Export
                                        </button>
                                        <button className="btn btn-primary" style={{ fontSize: '12px', paddingTop:'8px' }} >
                                            <img src={userPlusIcon} alt="invite" style={{ marginRight: '12px', paddingBottom: '5px' }} />
                                            Invite
                                        </button>
                                    </div>
                                </div>
                                <div className="row mt-5">
                                    <div className="col-12">
                                        <div className="registrants-table">
                                            <table class="table table-borderless">
                                                <thead>
                                                    <tr>
                                                        <th scope="col">Name</th>
                                                        <th scope="col">Email Id</th>
                                                        <th scope="col">Country</th>
                                                        <th scope="col">Registration Date</th>
                                                        <th scope="col">Attended</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {
                                                        registantsDate.map(ragistrant => <tr>
                                                            <td>
                                                                <div className='d-flex align-items-center justify-content-around'>
                                                                    <img src={ragistrant.image} alt={ragistrant.name} className="rounded-circle" />
                                                                    <p className='mb-0'>{ragistrant.name}</p>
                                                                </div>
                                                            </td>
                                                            <td>{ragistrant.email}</td>
                                                            <td>
                                                                <img src={ragistrant.flag} alt="country" className="rounded-circle" />
                                                            </td>
                                                            <td>{ragistrant.date}</td>
                                                            <td>{ragistrant.attended}</td>
                                                        </tr>)
                                                    }
                                                </tbody>
                                            </table>
                                            <div className="mb-0 ragistrant-table-footer">
                                                <span>1-5 of 15</span>
                                                <span>
                                                    <i className="fas fa-chevron-left pe-3"></i>
                                                    <i className="fas fa-chevron-right"></i>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegistrantsContents;