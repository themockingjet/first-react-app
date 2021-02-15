import React from 'react';
import bgCta from '../assets/img/photo-9.jpg';

function Cta() {
    return(
        <section id="cta" className="bg-fixed overlay" style={{backgroundImage: `url(${bgCta})`}}>
            <div className="container">
                <div className="section-content" data-aos="fade-up">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h2 className="mb-2">Make a beautiful website, or million of them</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, veritatis qui eligendi delectus quia fuga!</p>
                            <a className="btn btn-outline-primary btn-lg">FEATURES</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Cta