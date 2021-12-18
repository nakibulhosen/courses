import React from 'react';
import './SingleSession.css';

const SingleSession = (props) => {
    const sessionInfo = props.session;
    return (
        <div className="single-session mb-4 bg-white">
            <div className='d-flex align-items-center justify-content-around h-100'>
                <div className='session-details'>
                    <div className='d-flex align-items-center'>
                        <h4 style={{fontSize:'18px'}}>{sessionInfo.name}</h4>
                        <button className='light-btn'
                            style={{ background: sessionInfo.statusbg, color: sessionInfo.statuscolor }} >{sessionInfo.status}</button>
                    </div>
                    <p>May 1, 2021 - 1:00 pm</p>
                </div>
                <div className='session-registrant'>
                    <h4>Registration <span className='primary-color'>{sessionInfo.registrations}</span> </h4>
                </div>
                <div className='session-attendees'>
                    <h4>Attendees: <span className="primary-color">{sessionInfo.attendees}</span> </h4>
                </div>
                <div className='session-history'>
                    <h4 className='primary-color'>4 hours ago</h4>
                </div>
                <div className='single-session-icon'>
                    <span className={` ${sessionInfo.icon} text-warning`}></span>
                    <span className="fas fa-ellipsis-v ps-4" style={{color:'#B9B9B9'}} ></span>
                </div>
            </div>

        </div>
    );
};

export default SingleSession;