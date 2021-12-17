import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import CourseSettingContents from './CourseSettingContents';

const CourseSetting = () => {
    return (
        <section>
            <Sidebar >
                <CourseSettingContents />
            </Sidebar>
        </section>
    );
};

export default CourseSetting;