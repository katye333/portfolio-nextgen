import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Background } from './background';
import '../App.css'
import Footer from './footer';

export const Frame = () => {
    return (
        <React.Fragment>
            <div id="App">
                <header className='navbar'>
                    <div className='nav-item-left'>
                        <Link to='/'><h3>HOME</h3></Link>
                    </div>
                    <div className='nav-item-right'>
                        <Link to='/resume'><h3>EXPERIENCE</h3></Link>
                        <Link to='/projects'><h3>PROJECTS</h3></Link>
                        <Link to='/contact'><h3>CONTACT</h3></Link>
                    </div>
                </header>
                <Outlet />

                <Footer />
            </div>
        </React.Fragment>
    )
}