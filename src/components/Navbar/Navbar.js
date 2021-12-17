import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light" id="top-nav">
            <div className="container-fluid">
                <form className="d-flex align-items-center" id="top-form">
                   <span className="fas fa-search"></span> 
                   <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                   <span className="fas fa-filter"></span>
                </form>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0" id="right-nav">
                        <li className="nav-item">
                            <button className="default-btn rounded-circle" id='light-btn' aria-current="page" to='/' style={{height:'40px', width:'40px', padding:"0px"}}><span className="fas fa-lightbulb" style={{fontSize:'22px'}}></span></button>
                        </li>
                        <li className="nav-item">
                            <button className="default-btn" id="e-learning"><span className="fas fa-graduation-cap pe-3"></span> E-Learning</button>
                        </li>
                        <li className="nav-item">
                            <button className="default-btn"> <span className="fas fa-plus pe-3"></span> Add Courses</button>
                        </li>
                        
                    </ul>

                </div>
            </div>
        </nav>
    );
};

export default Navbar;