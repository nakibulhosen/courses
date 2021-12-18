import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import SingleSession from '../SingleSession/SingleSession';
import './Session.css';
import upchart from '../../assets/image/upchart.png';

const SessionsContent = () => {
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
    }, [path])
    
    const sessionData = [
        {
            name: 'Conflict',
            statusbg: 'rgba(255, 80, 80, 0.3)',
            statuscolor: '#ED4C5C',
            status: 'Live',
            Date: '25/03/22',
            time: '22:10',
            registrations: 60,
            attendees: 30,
            history: 4,
            icon: 'fas fa-exclamation-triangle',
            iconColor: 'text-warning'
        },
        {
            name: 'Discussion',
            statusbg: 'gba(21, 122, 255, 0.1)',
            statuscolor: 'rgba(21, 122, 255, 0.8)',
            status: 'Upcoming',
            Date: '25/03/22',
            time: '22:10',
            registrations: 60,
            attendees: 30,
            history: 4,
            icon: '',
            color: 'text-warning'
        },
        {
            name: 'Negotiation',
            statusbg: 'rgba(108, 199, 29, 0.2)',
            statuscolor: '#6CC71D',
            status: 'Completed',
            Date: '25/03/22',
            time: '22:10',
            registrations: 60,
            attendees: 30,
            history: 4,
            icon: '',
            color: 'text-warning'
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
                        <div className='sessions-top-button'>
                            <button className='light-btn me-5'> <i className="fas fa-share-alt"></i> Share</button>
                            <button className='light-btn'> <i className="fas fa-plus"></i> Add Session</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <div className="session-wrapper">
                        <div className="session-container">
                            <div className="session-menu d-flex align-items-center justify-content-between">
                                <div className="session-left-menu w-50">
                                    <span><Link to="/sessions" >Session</Link></span>
                                    <span><Link  to="/session/registrants" style={{color:'#B9B9B9'}}>Registants</Link></span>
                                    <span><Link  to="//session/setting" style={{color:'#B9B9B9'}} >Setting</Link></span>
                                </div>
                                <div className="session-right-menu">
                                    <span><img src={upchart} alt="icon" /></span>
                                    <span>Sort</span>
                                    <span> <i className="fas fa-filter"></i> </span>
                                    <span> Filter </span>
                                </div>
                            </div>
                            <div className="row mt-5">
                            <div className="col-12">
                                {
                                    sessionData.map(session => <SingleSession session={session} />)
                                }
                            </div>
                        </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default SessionsContent;