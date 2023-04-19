import React from 'react';
// import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg" style={{backgroundColor: '#dfffeb'}}>
            <div className="container-fluid">
                <a className="navbar-brand d-inline-block" href="/">Golf Inventory</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item" role="presentation"><a className="nav-link" href="/">Home</a></li>
                        <li className="nav-item" role="presentation"><a className="nav-link" href="/create">Create Product</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;