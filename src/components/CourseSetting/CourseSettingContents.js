import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './CourseSetting.css';
import copyIcon from '../../assets/image/copyIcon.svg';

const CourseSettingContents = () => {
const location = useLocation();
let pathname = location.pathname;
useEffect(()=>{
    const elearning = document.getElementById('e-learning');
    const lightBtn = document.getElementById('light-btn');
    if(pathname === '/session/setting'){
        elearning.style.display = 'none';
        lightBtn.style.display = 'none';
    }
},[pathname])
    return (
        <div className='container-fluid' style={{ marginTop: '60px' }}>
            <div className="row">
                <div className="col-12">
                    <div className="session-top-content d-flex justify-content-between align-items-center">
                        <Link to="/courses" className='text-decoration-none navigation-text'>
                            <i className="fas fa-chevron-left primary-color pe-3" style={{ fontSize: "18px" }}></i> Navigation
                        </Link>
                        <div>
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
                                    <span><Link to="/sessions" style={{ color: '#B9B9B9' }}>Session</Link></span>
                                    <span><Link to="/session/registrants" style={{ color: '#B9B9B9' }}  >Registants</Link></span>
                                    <span><Link to="/session/setting" >Setting</Link></span>
                                </div>
                            </div>

                            <div className="row mt-5">
                                <div className="col-md-3">
                                    <div className="setting-menu">
                                        <ul>
                                            <li>
                                                <Link to="/session/setting">Main Setting</Link>
                                            </li>
                                            <li><Link to="/session/setting" className='primary-color'>General</Link></li>
                                            <li><Link to="/session/setting">Optional Setting</Link></li>
                                            <li><Link to="/session/setting">Registration</Link></li>
                                            <li><Link to="/session/setting">Emails</Link></li>
                                            <li><Link to="/session/setting">Payment</Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-9">
                                    <div className="setting-details">
                                        <form className='course-edit-form'>
                                            <h3 className='setting-form-title'>Course Name <span className='text-danger required'>*</span></h3>
                                            <div className='form-block'>
                                                <input type="text" name="course-name" placeholder='Type the name here' className='course-name' />
                                                <input type="text" placeholder='Description (optional)' className='course-description' />
                                            </div>

                                            <div className='form-block'>
                                                <h3 className='setting-form-title'>Pre-assessment <span className='text-danger required'>*</span> <span className='fas fa-question-circle'></span></h3>
                                                <select name="" id="pre-assessment">
                                                    <option value="yes">Yes</option>
                                                    <option value="no">No</option>
                                                </select>
                                                <button className='copy-btn'><img src={copyIcon} alt="copy" /></button>
                                            </div>
                                            <div className='form-block'>
                                                <h3 className='setting-form-title'>Evaluation Form <span className='text-danger required'>*</span> <span className='fas fa-question-circle'></span></h3>

                                                <select name="" id="pre-assessment">
                                                    <option value="yes">Yes</option>
                                                    <option value="no">No</option>
                                                </select>
                                                <button className='copy-btn'><img src={copyIcon} alt="copy" /></button>
                                            </div>

                                            <div className='form-block d-flex mb-4'>
                                                <span className="setting-form-title pe-5 align-items-center">Certificate <span className='text-danger required'>*</span></span>
                                                <div class="form-check form-check-inline">
                                                    <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                                                        <label class="form-check-label" for="inlineCheckbox1">No</label>
                                                </div>
                                                <div class="form-check form-check-inline">
                                                    <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" />
                                                        <label class="form-check-label" for="inlineCheckbox2">Yes</label>
                                                </div>
                                            </div>

                                            <div className="update-action d-flex">
                                                <button className='btn-link-danger' style={{marginRight:'40px'}}> Delete Course</button>
                                                <button className='btn btn-primary rounded'>Update</button>
                                            </div>

                                        </form>
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

export default CourseSettingContents;