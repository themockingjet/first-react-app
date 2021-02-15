import React from 'react';

function NavHeader() {
    return (
        <nav id="header-navbar" className="navbar navbar-expand-lg py-4">
            <div className="container">
                <a className="navbar-brand d-flex align-items-center text-white" href="/">
                    <h3 className="font-weight-bolder mb-0"><i className="fas fa-star-and-crescent"></i></h3>
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-nav-header" aria-controls="navbar-nav-header" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="lnr lnr-menu"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbar-nav-header">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="#features">Features</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#portfolio">Images</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#client">Collaborate</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#reservation">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavHeader
