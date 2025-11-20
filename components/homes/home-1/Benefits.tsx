import React from "react";

export default function Benefits() {
  return (
    <section
      className="section-benefit h-1 tf-spacing-3 section-one-page"
      id="benefit"
    >
      <div className="tf-container">
        <div className="row">
          <div className="col-12">
            <div className="box-icon-list">
              <div className="box-icon">
                <div className="icon wow fadeInUp">
                  <i className="icon-tailored" />
                </div>
                <div className="box-content">
                  <h5 className="wow fadeInUp">
                    <a href="#" className="title-box">
                      {" "}
                      Since 2017{" "}
                    </a>
                  </h5>
                  <div className="sub-title wow fadeInUp">
                    A proven reputation in the global fund recovery space.
                  </div>
                </div>
              </div>
              <div className="box-icon">
                <div className="icon wow fadeInUp" data-wow-delay=".1s">
                  <i className="icon-investment" />
                </div>
                <div className="box-content">
                  <h5 className="wow fadeInUp" data-wow-delay=".1s">
                    <a href="#" className="title-box">
                      {" "}
                      Technological Edge{" "}
                    </a>
                  </h5>
                  <div className="sub-title wow fadeInUp" data-wow-delay=".1s">
                    Advanced tools like Wallet API analysis, smart contract tracing, and blockchain forensics.
                  </div>
                </div>
              </div>
              <div className="box-icon">
                <div className="icon wow fadeInUp" data-wow-delay=".2s">
                  <i className="icon-financial" />
                </div>
                <div className="box-content">
                  <h5 className="wow fadeInUp" data-wow-delay=".2s">
                    <a href="#" className="title-box">
                      {" "}
                      Legal Reach{" "}
                    </a>
                  </h5>
                  <div className="sub-title wow fadeInUp" data-wow-delay=".2s">
                    Cross-border coordination with licensed recovery attorneys.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
