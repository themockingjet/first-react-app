import React from 'react';
import bgTesti from '../assets/img/bg-white.jpg';
import OwlCarousel from "react-owl-carousel";

function Testimonies() {
    
    return(
        <section id="testimonial" className="section-padding bg-fixed bg-white overlay" style={{backgroundImage: `url(${bgTesti})`}}>
            <div className="container">
                <div className="section-content" data-aos="fade-up">
                    <div className="heading-section text-center">
                        <h2>
                            User Testimonials
                        </h2>
                    </div>
                    <div className="row">
                        <OwlCarousel className="owl-carousel testi-content testi-carousel owl-theme"
                        loop={true} autoplay={true} center={true} items={1} autoplayTimeout={2500}
                        smartSpeed={1000}>
                            <div className="testi-item text-center">
                                <i className="testi-icon fa fa-3x fa-quote-left"></i>
                                <h4 className="testi-text"> Hello!</h4>
                                <div className="testi-meta-inner d-flex justify-content-center align-items-center">
                                    
                                </div>
                            </div>
                            <div className="testi-item text-center">
                                <i className="testi-icon fa fa-3x fa-quote-left"></i>
                                <h4 className="testi-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci <br/> non doloribus ut, alias doloremque perspiciatis.</h4>
                                <div className="testi-meta-inner d-flex justify-content-center align-items-center">
                                    
                                </div>
                            </div>
                            <div className="testi-item text-center">
                                <i className="testi-icon fa fa-3x fa-quote-left"></i>
                                <h4 className="testi-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci <br/> non doloribus ut, alias doloremque perspiciatis.</h4>
                                <div className="testi-meta-inner d-flex justify-content-center align-items-center">
                                    
                                </div>
                            </div>
                            <div className="testi-item text-center">
                                <i className="testi-icon fa fa-3x fa-quote-left"></i>
                                <h4 className="testi-text"> Hi!</h4>
                                <div className="testi-meta-inner d-flex justify-content-center align-items-center">
                                    
                                </div>
                            </div>
                            <div className="testi-item text-center">
                                <i className="testi-icon fa fa-3x fa-quote-left"></i>
                                <h4 className="testi-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci <br/> non doloribus ut, alias doloremque perspiciatis.</h4>
                                <div className="testi-meta-inner d-flex justify-content-center align-items-center">
                                    
                                </div>
                            </div>
                            <div className="testi-item text-center">
                                <i className="testi-icon fa fa-3x fa-quote-left"></i>
                                <h4 className="testi-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci <br/> non doloribus ut, alias doloremque perspiciatis.</h4>
                                <div className="testi-meta-inner d-flex justify-content-center align-items-center">
                                    
                                </div>
                            </div>
                        </OwlCarousel>
                    </div>
                    {/* <div className="row">
                        <div className="testi-content testi-carousel owl-carousel">
                            <div className="testi-item text-center">
                                <i className="testi-icon fa fa-3x fa-quote-left"></i>
                                <h4 className="testi-text"> Hello!</h4>
                                <div className="testi-meta-inner d-flex justify-content-center align-items-center">
                                    
                                </div>
                            </div>
                            <div className="testi-item text-center">
                                <i className="testi-icon fa fa-3x fa-quote-left"></i>
                                <h4 className="testi-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci <br/> non doloribus ut, alias doloremque perspiciatis.</h4>
                                <div className="testi-meta-inner d-flex justify-content-center align-items-center">
                                    
                                </div>
                            </div>
                             <div className="testi-item text-center">
                                <i className="testi-icon fa fa-3x fa-quote-left"></i>
                                <h4 className="testi-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci <br/> non doloribus ut, alias doloremque perspiciatis.</h4>
                                <div className="testi-meta-inner d-flex justify-content-center align-items-center">
                                    
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </section>
    );
}

export default Testimonies