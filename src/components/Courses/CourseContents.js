import React, { useEffect } from 'react';
import SingleCourse from '../SignleCourse/SingleCourse';


const CourseContents = () => {

    useEffect(()=>{
        const collapseTrigger = document.getElementById('collapse-trigger');
        collapseTrigger.addEventListener('click',()=>{
            collapseTrigger.classList.toggle('grey-background')
        })
    },[])

    return (
        <div className='container-fluid'>
            <div className="row">
                <div className="col-12">
                    <div className="top-item-container d-flex justify-content-between mb-4">
                        <h2 style={{fontSize:'25px', lineHeight:'25px'}}>Courses</h2>
                        <div className="d-flex">
                            <button className='light-btn'> <span className="fas fa-calendar-alt"></span> Calender</button>
                            <button className='light-btn'> <span className="fas fa-chart-bar"></span> Analytics</button>
                            <button className='light-btn'> <span className="fas fa-file-export"></span> Export</button>
                            <button className='link-btn'><span className="fas fa-filter"></span> Filter</button>
                            <button className='link-btn'><span className="fas fa-cogs"></span>Column Setting</button>
                        </div>
                    </div>
                    <div className="course-container p-4">
                        <div className="d-flex course-table-header align-items-center justify-content-evenly">
                            <span className='course-table-header-item'>Session</span>
                            <span className='course-table-header-item'>Status</span>
                            <span className='course-table-header-item'>Course Name</span>
                            <span className='course-table-header-item'>Begain Date</span>
                            <span className='course-table-header-item'>End Date</span>
                            <span className='course-table-header-item'>Registrants</span>
                            <span className='course-table-header-item'>Trainers</span>
                            <span className='course-table-header-item'>Certificate</span>
                        </div>
                        <SingleCourse collapseId="collapse1" />
                        <SingleCourse collapseId="collapse2" />
                        <SingleCourse collapseId="collapse3" />

                        <div className="course-footer mt-5 d-flex justify-content-end">
                            <p className="text-small pe-5" style={{color:'#B9B9B9'}}>Rows Per Page <span className='ps-3'>6</span> <span className="fas fa-caret-down ps-3"></span> </p> 
                            <p className="text-small" style={{color:'#B9B9B9'}} >1-6 of 150 <span className="fas fa-chevron-left px-3"></span> <span className="fas fa-chevron-right ps-3"></span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseContents;