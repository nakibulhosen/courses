import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import SessionsContent from './SessionsContent';

const Sessions = () => {
    return (
        <section>
            <Sidebar>
                <SessionsContent/>
            </Sidebar>
        </section>
    );
};

export default Sessions;