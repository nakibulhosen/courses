import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import HomePageContents from "../HomePage/HomePageContents";

const HomePage = () => {
    return (
        <section>
            <Sidebar>
                <HomePageContents/>
            </Sidebar>
            
        </section>
    );
};

export default HomePage;