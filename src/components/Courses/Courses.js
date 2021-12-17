import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import CourseContents from './CourseContents';
import './Courses.css';

const Courses = () => {
    return (
        <section>
            <Sidebar>
                <CourseContents/>
            </Sidebar>
        </section>
    );
};

export default Courses;