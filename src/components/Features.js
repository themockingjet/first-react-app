import React from 'react';

function Features() {
    return (
        <section id="features" className="bg-white">
            <div className="container">
                <div className="section-content">
                    {/* <!-- Section Title --> */}
                    <div className="title-wrap mb-5" data-aos="fade-up">
                        <h2 className="section-title">
                            A template built by <a href="https://www.twitter.com/themockingshit" target="_blank">Jet</a>
                        </h2>
                        <p className="section-sub-title">Praesent commodo cursus magna, vel scelerisque nisl consectetur et. <br/> pharetra augue. Donec id elit non mi.</p>
                    </div>
                    {/* <!-- End of Section Title --> */}
                    <div className="row">
                        {/* <!-- Features Holder--> */}
                        <div className="col-md-10 offset-md-1 features-holder">
                            <div className="row">
                                {/* <!-- Features Item --> */}
                                <div className="col-md-4 col-sm-12 text-center mt-4">
                                    <div className="shadow rounded feature-item p-4 mb-4" data-aos="fade-up">
                                        <div className="my-4">
                                            <i className="lnr lnr-cog fs-40"></i>
                                        </div>
                                        <h4>Easy to Customize</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</p>
                                    </div>
                                </div>
                                {/* <!-- End of Feature Item -->
                                <!-- Features Item --> */}
                                <div className="col-md-4 col-sm-12 text-center">
                                    <div className="shadow rounded feature-item p-4 mb-4" data-aos="fade-up">
                                        <div className="my-4">
                                            <i className="lnr lnr-magic-wand fs-40"></i>
                                        </div>
                                        <h4>Clean Design</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</p>
                                    </div>
                                </div>
                                {/* <!-- End of Feature Item -->
                                <!-- Features Item --> */}
                                <div className="col-md-4 col-sm-12 text-center mt-4">
                                    <div className="shadow rounded feature-item p-4 mb-4" data-aos="fade-up">
                                        <div className="my-4">
                                            <i className="lnr lnr-frame-contract fs-40"></i>
                                        </div>
                                        <h4>Pixel Perfect</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</p>
                                    </div>
                                </div>
                                {/* <!-- End of Feature Item --> */}
                            </div>
                        </div>
                        {/* <!-- End of Features Holder--> */}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Features