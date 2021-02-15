import React from 'react';

function Contact() {
    return(
        <section id="reservation" className="bg-white section-content">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-5 offset-lg-1 mb-5 mb-lg-0" data-aos="fade-right">
                        <div className="bg-white p-5 shadow">
                            <div className="heading-section text-center">
                                <h2 className="mb-4">
                                    Contact Us
                                </h2>
                            </div>
                            <form method="post" name="contact-us" action="">
                                <div className="row">
                                    <div className="col-md-12 form-group">
                                        <input type="text" className="form-control" id="name" name="name" placeholder="Name"/>
                                    </div>
                                    <div className="col-md-12 form-group">
                                        <input type="text" className="form-control" id="email" name="email" placeholder="Email"/>
                                    </div>
                                    <div className="col-md-12 form-group">
                                        <input type="number" className="form-control" id="phoneNumber" name="phoneNumber" placeholder="Phone"/>
                                    </div>
                                    <div className="col-md-12 form-group">
                                        <input type="text" className="form-control" id="websiteUrl" name="websiteUrl" placeholder="Website"/>
                                    </div>
                                    <div className="col-md-12 form-group">
                                        <textarea className="form-control" id="message" name="message" rows="6" placeholder="Your Message ..."></textarea>
                                    </div>
                                    <div className="col-md-12 text-center">
                                        <button className="btn btn-primary btn-shadow btn-lg" type="submit" name="submit">Send Message</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-lg-4 offset-lg-1" data-aos="fade-left">
                        <h2 className="mb-4">
                            Best solution to create any website. Pay once.
                        </h2>
                        <p className="mb-4">I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
        
                        <ul className="list-inline py-2">
                            <li className="list-inline-item text-center px-3">
                                <span className="lnr fs-40 lnr-rocket"></span>
                                <p>Minimal</p>
                            </li>
                            <li className="list-inline-item text-center px-3">
                                <span className="lnr fs-40 lnr-magic-wand"></span>
                                <p>Clean</p>
                            </li>
                            <li className="list-inline-item text-center px-3">
                                <span className="lnr fs-40 lnr-cog"></span>
                                <p>Easy</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact