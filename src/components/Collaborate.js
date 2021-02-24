import React from "react";
import imgColab from "../assets/img/client.png";
import OwlCarousel from "react-owl-carousel";

function Collaborate() {
  return (
    <section
      id="client"
      className="overlay bg-fixed"
      style={{ backgroundImage: "url(../assets/img/bg.jpg)" }}
    >
      <div className="container">
        <div className="section-content" data-aos="fade-up">
          <div className="row ">
            <div className="col-md-12">
              {/* <!-- Section Title --> */}
              <div className="title-wrap mb-5">
                <h2>Collaborate</h2>
              </div>
              {/* <!-- End of Section Title --> */}
            </div>
            {/* <!-- Client Holder --> */}
            <div className="col-md-12 client-holder">
              <OwlCarousel
                className="owl-carousel testi-content testi-carousel owl-theme"
                loop={true}
                autoplay={true}
                center={true}
                items={5}
                margin={50}
                autoplayTimeout={1000}
                smartSpeed={500}
                dots={false}
              >
                <div className="client-item">
                  <img className="img-responsive" src={imgColab} alt=" " />
                </div>
                <div className="client-item">
                  <img className="img-responsive" src={imgColab} alt=" " />
                </div>
                <div className="client-item">
                  <img className="img-responsive" src={imgColab} alt=" " />
                </div>
                <div className="client-item">
                  <img className="img-responsive" src={imgColab} alt=" " />
                </div>
                <div className="client-item">
                  <img className="img-responsive" src={imgColab} alt=" " />
                </div>
                <div className="client-item">
                  <img className="img-responsive" src={imgColab} alt=" " />
                </div>
              </OwlCarousel>
              {/* <div className="client-slider owl-carousel">
                                <div className="client-item">
                                    <img className="img-responsive" src="/src/assets/img/client.png" alt=" "/>
                                </div>
                                <div className="client-item">
                                    <img className="img-responsive" src={imgColab} alt=" "/>
                                </div>
                                <div className="client-item">
                                    <img className="img-responsive" src={imgColab} alt=" "/>
                                </div>
                                <div className="client-item">
                                    <img className="img-responsive" src={imgColab} alt=" "/>
                                </div>
                                <div className="client-item">
                                    <img className="img-responsive" src={imgColab} alt=" "/>
                                </div>
                                <div className="client-item">
                                    <img className="img-responsive" src={imgColab} alt=" "/>
                                </div>
                            </div> */}
              {/* <!-- End of Client Holder --> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Collaborate;
