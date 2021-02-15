import { getDefaultNormalizer } from '@testing-library/react'
import React from 'react'

function Footer() {
    return(
        <footer className="mastfoot my-3">
            <div className="inner container">
                <div className="row">
                    <div className="col-lg-4 col-md-12 d-flex align-items-center">
                        
                    </div>
                    <div className="col-lg-4 col-md-12 d-flex align-items-center">
                        <p className="mx-auto text-center mb-0">&copy; 2021 Jet. Design by <a href="https://www.twitter.com/themockingshit" target="_blank">Jet</a>.</p>
                    </div>
                
                    <div className="col-lg-4 col-md-12">
                        <nav className="nav nav-mastfoot justify-content-center">
                            <a className="nav-link" href="https://www.facebook.com/themockingjet" target="_blank">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a className="nav-link" href="https://www.twitter.com/themockingshit" target="_blank">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a className="nav-link" href="https://www.instagram.com/themockingjet" target="_blank">
                                <i className="fab fa-instagram"></i>
                            </a>
                        </nav>
                    </div>
                    
                </div>
            </div>
        </footer>
    );
}

export default Footer