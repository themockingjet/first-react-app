import React from 'react';
import photo1 from '../assets/img/photo-1.jpg';
import photo2 from '../assets/img/photo-2.jpg';
import photo4 from '../assets/img/photo-4.jpg';
import photo6 from '../assets/img/photo-6.jpg';
import photo7 from '../assets/img/photo-7.jpg';
import photo9 from '../assets/img/photo-9.jpg';

function Portfolio() {
    return(
        <section id="portfolio" className="bg-white">
            <div className="container">
                <div className="section-content">
                    <div className="title-wrap">
                        <h2 className="section-title"><b>Sample</b> images</h2>
                        <p className="section-sub-title">Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/> Impedit fugit, magni blanditiis inventore vitae repellat</p>
                    </div>
                    <div className="row">
                        <div className="col-md-12 portfolio-holder mt-3">
                            {/* <!-- Btn Filter --> */}
                            <div className="filter-button-group btn-filter d-flex justify-content-center">
                                <a tabIndex="0" className="is-checked" data-filter="*">Show All</a>
                                <a tabIndex="0" data-filter=".minimalism">Minimalism</a>
                                <a tabIndex="0" data-filter=".vintage">Vintage</a>
                                <a tabIndex="0" data-filter=".creative">Creative</a>
                            </div>
                            {/* <!-- End of Btn Filter -->
                            <!-- Portfolio Content --> */}
                            <div className="grid-portfolio">
                                <div className="grid-sizer"></div>
                                <div className="gutter-sizer"></div>
                                {/* <!-- Portfolio Item --> */}
                                <div className="grid-item minimalism" data-aos="fade-up">
                                    <div className="grid-item-wrapper">
                                        <img src={photo1} alt="portfolio-img" className="portfolio-item"/>
                                        <div className="grid-info">
                                            <div className="grid-link d-flex justify-content-center">
                                                <a className="img-pop" data-rel="lightcase" href="img/photo-1.jpg" title="Photo-1">
                                                    <span className="lnr lnr-move"></span>
                                                </a>
                                                <a className="ext-link" href="https://unsplash.com/" target="_blank">
                                                    <span className="lnr lnr-link"></span>
                                                </a>
                                            </div>
                                            <div className="grid-title">
                                                <h4>Camera</h4>
                                            </div>
                                        </div>
        
                                    </div>
                                </div>
                                {/* <!-- End of Portfolio Item -->
                                <!-- Portfolio Item --> */}
                                <div className="grid-item vintage" data-aos="fade-up">
                                    <div className="grid-item-wrapper">
                                        <img src={photo6} alt="portfolio-img" className="portfolio-item"/>
                                        <div className="grid-info">
                                            <div className="grid-link d-flex justify-content-center">
                                                <a className="img-pop" data-rel="lightcase" href="img/photo-6.jpg" title="Ship">
                                                    <span className="lnr lnr-move"></span>
                                                </a>
                                                <a className="ext-link" href="https://unsplash.com/" target="_blank">
                                                    <span className="lnr lnr-link"></span>
                                                </a>
                                            </div>
                                            <div className="grid-title">
                                                <h4>Flower</h4>
                                            </div>
                                        </div>
        
                                    </div>
                                </div>
                                {/* <!-- End of Portfolio Item -->
                                <!-- Portfolio Item --> */}
                                <div className="grid-item creative grid-item-height" data-aos="fade-up">
                                    <div className="grid-item-wrapper">
                                        <img src={photo2} alt="portfolio-img" className="portfolio-item"/>
                                        <div className="grid-info">
                                            <div className="grid-link d-flex justify-content-center">
                                                <a className="img-pop" data-rel="lightcase" href="img/photo-2.jpg" title="Tracy Portrait">
                                                    <span className="lnr lnr-move"></span>
                                                </a>
                                                <a className="ext-link" href="https://unsplash.com/" target="_blank">
                                                    <span className="lnr lnr-link"></span>
                                                </a>
                                            </div>
                                            <div className="grid-title">
                                                <h4>Breakfast</h4>
                                            </div>
                                        </div>
        
                                    </div>
                                </div>
                                {/* <!-- End of Portfolio Item -->
                                <!-- Portfolio Item --> */}
                                <div className="grid-item creative" data-aos="fade-up">
                                    <div className="grid-item-wrapper">
                                        <img src={photo7} alt="portfolio-img" className="portfolio-item"/>
                                        <div className="grid-info">
                                            <div className="grid-link d-flex justify-content-center">
                                                <a className="img-pop" data-rel="lightcase" href="img/photo-7.jpg" title="Guitar">
                                                    <span className="lnr lnr-move"></span>
                                                </a>
                                                <a className="ext-link" href="https://unsplash.com/" target="_blank">
                                                    <span className="lnr lnr-link"></span>
                                                </a>
                                            </div>
                                            <div className="grid-title">
                                                <h4>Chair</h4>
                                            </div>
                                        </div>
        
                                    </div>
                                </div>
                                {/* <!-- End of Portfolio Item --> */}
                                {/* <!-- Portfolio Item --> */}
                                <div className="grid-item vintage" data-aos="fade-up">
                                    <div className="grid-item-wrapper">
                                        <img src={photo4} alt="portfolio-img" className="portfolio-item" />
                                        <div className="grid-info">
                                            <div className="grid-link d-flex justify-content-center">
                                                <a className="img-pop" data-rel="lightcase" href="img/photo-4.jpg" title="Bookself">
                                                    <span className="lnr lnr-move"></span>
                                                </a>
                                                <a className="ext-link" href="https://unsplash.com/" target="_blank">
                                                    <span className="lnr lnr-link"></span>
                                                </a>
                                            </div>
                                            <div className="grid-title">
                                                <h4>Hidden Book</h4>
                                            </div>
                                        </div>
        
                                    </div>
                                </div>
                                {/* <!-- End of Portfolio Item --> */}
                                {/* <!-- Portfolio Item --> */}
                                <div className="grid-item creative" data-aos="fade-up">
                                    <div className="grid-item-wrapper">
                                        <img src={photo9} alt="portfolio-img" className="portfolio-item" />
                                        <div className="grid-info">
                                            <div className="grid-link d-flex justify-content-center">
                                                <a className="img-pop" data-rel="lightcase" href="img/photo-9.jpg" title="Guitar">
                                                    <span className="lnr lnr-move"></span>
                                                </a>
                                                <a className="ext-link" href="https://unsplash.com/" target="_blank">
                                                    <span className="lnr lnr-link"></span>
                                                </a>
                                            </div>
                                            <div className="grid-title">
                                                <h4>Red</h4>
                                            </div>
                                        </div>
        
                                    </div>
                                </div>
                                {/* <!-- End of Portfolio Item --> */}
                            </div>
                            {/* <!-- End of Portfolio Content --> */}
                        </div>
                        {/* <!-- End of Portfolio Holder --> */}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Portfolio