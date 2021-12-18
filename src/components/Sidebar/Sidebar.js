import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';
import logo from '../../assets/image/logo.png';
import Navbar from '../Navbar/Navbar';
import homeIcon from '../../assets/image/home.svg';
import dashboardIcon from '../../assets/image/dashboard.svg';
import courseIcon from '../../assets/image/course.svg';
import examIcon from '../../assets/image/exam.svg';
import discussionIcon from '../../assets/image/discussion.svg';
import surveryIcon from '../../assets/image/survey.svg';
import certificateIcon from '../../assets/image/certificate.svg';
import libraryIcon from '../../assets/image/liabrary.svg';
import settingIcon from '../../assets/image/setting.svg';
import crmIcon from '../../assets/image/crm.svg';

const Sidebar = (props) => {
    return (
        <div className="container-fluid">
            <div className="row flex-nowrap">
                <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0" style={{maxWidth:'200px'}}>
                    <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 min-vh-100 bg-white" id="sidebar">
                        <div className="d-flex align-items-start justify-content-around w-100 pb-3 mb-md-0 me-md-auto mt-3 text-default">
                            <span className="fs-5 d-none d-sm-inline fas fa-bars"></span>
                            <img src={logo} alt="logo" />
                        </div>
                        <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                            <li className="nav-item">
                                <Link to='/' className="nav-link align-middle px-0 text-small">
                                    <img src={homeIcon} alt="overview" /> <span className=" d-none d-sm-inline">Overview</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="#submenu1" data-bs-toggle="collapse" className="nav-link px-0 align-middle text-small">
                                <img src={dashboardIcon} alt="overview" /> <span className=" d-none d-sm-inline">Dashboard</span> </Link>
                            </li>
                            <li>
                                <Link to='/courses' className="nav-link px-0 align-middle text-small">
                                <img src={courseIcon} alt="overview" /> <span className=" d-none d-sm-inline">Courses</span></Link>
                            </li>
                            <li>
                                <Link to="#submenu2" data-bs-toggle="collapse" className="nav-link px-0 align-middle text-small">
                                <img src={discussionIcon} alt="overview" /> <span className=" d-none d-sm-inline">Discussion</span></Link>
                            </li>
                            <li>
                                <Link to="#submenu2" data-bs-toggle="collapse" className="nav-link px-0 align-middle text-small">
                                <img src={examIcon} alt="overview" /> <span className=" d-none d-sm-inline">Exams</span></Link>
                            </li>
                            <li>
                                <Link to="#submenu2" data-bs-toggle="collapse" className="nav-link px-0 align-middle text-small">
                                <img src={crmIcon} alt="overview" /> <span className=" d-none d-sm-inline">CRM</span></Link>
                            </li>
                            
                            <li>
                                <Link to='/' className="nav-link px-0 align-middle text-small">
                                <img src={surveryIcon} alt="overview" /> <span className=" d-none d-sm-inline">Servey</span> </Link>
                            </li>
                            <li>
                                <Link to='/' className="nav-link px-0 align-middle text-small">
                                <img src={certificateIcon} alt="overview" /> <span className=" d-none d-sm-inline">Cirtificate</span> </Link>
                            </li>
                            <li>
                                <Link to='/' className="nav-link px-0 align-middle text-small">
                                   <img src={libraryIcon} alt="" /> <span className=" d-none d-sm-inline">Library</span> </Link>
                            </li>
                            <li>
                                <Link to='/' className="nav-link px-0 align-middle text-small">
                                <img src={settingIcon} alt="overview" /> <span className=" d-none d-sm-inline">Setting</span> </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col py-3">
                    <Navbar/>
                    {props.children}
                </div>
            </div>
        </div>
    );
};

export default Sidebar;