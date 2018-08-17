import React from 'react';
import './Header.css';

const header = () => {

    return (
        <header className='Header' >
            <a className="header-brand" href="">React Dash SPA</a>
            <div className='right-wrapper'>            
                <nav className="navbar">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="">FAQ</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="">Help</a>
                        </li>
                    </ul>
                </nav>
                <form className="form-inline header-form">
                    <button className="btn" type="submit"></button>
                    <input className="form-control" type="search" placeholder="" aria-label="Search" />
                </form>
            </div>
        </header>
    );

} 


export default header;