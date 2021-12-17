import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import RegistrantsContents from './RegistrantsContents';

const Registrans = () => {
    return (
        <section>
            <Sidebar>
                <RegistrantsContents/>
            </Sidebar>
        </section>
    );
};

export default Registrans;