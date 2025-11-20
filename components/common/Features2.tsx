import Link from "next/link";
import Image from "next/image";
import React from "react";

export default function Features({
  parentClass = "section-why-choose h-2 tf-spacing-31",
  hasBorder = false,
}) {
  return (
    <>
      <section className={parentClass}>
        <div className="tf-container position-relative">
          <div
            className={` ${
              hasBorder
                ? "row rg-60 border-bottom tf-spacing-31"
                : "row rg-60 align-items-center"
            } `}
          >
            <div className="col-lg-6">
              <div className="image mr-15 tf-animate-1">
                <Image
                  src="/image/section/img-section-why-choose-h2.jpg"
                  alt=""
                  className="lazyload"
                  width={615}
                  height={615}
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="section-content ml-15">
                <div className="heading-section">
                  <div className="wow fadeInUp">
                    <a href="#" className="tag label text-btn-uppercase">
                      Why Choose Us
                    </a>
                  </div>
                  <h3 className="title-section wow fadeInUp mb-12">
                    Established. Ethical. Effective.
                  </h3>
                  <div className="sub-title body-2 wow fadeInUp">
                    Since 2017, we've built a proven reputation in the global fund recovery space. Our team combines deep forensic expertise, advanced technological tools, and extensive legal reach through our network of licensed recovery attorneys worldwide.
                  </div>
                </div>
                <div className="benefit-lists">
                  <div className="benefit-items">
                    <div className="icon wow fadeInUp">
                      <i className="icon-checkbox" />
                    </div>
                    <div className="title wow fadeInUp" data-wow-delay=".1s">
                      Deep forensic expertise and blockchain tracing.
                    </div>
                  </div>
                  <div className="benefit-items">
                    <div className="icon wow fadeInUp">
                      <i className="icon-checkbox" />
                    </div>
                    <div className="title wow fadeInUp" data-wow-delay=".1s">
                      Collaboration with financial institutions and law firms.
                    </div>
                  </div>
                  <div className="benefit-items">
                    <div className="icon wow fadeInUp">
                      <i className="icon-checkbox" />
                    </div>
                    <div className="title wow fadeInUp" data-wow-delay=".1">
                      Confidential, client-first recovery process.
                    </div>
                  </div>
                  <div className="benefit-items">
                    <div className="icon wow fadeInUp">
                      <i className="icon-checkbox" />
                    </div>
                    <div className="title wow fadeInUp" data-wow-delay=".1s">
                      Fully contractual and transparent fees.
                    </div>
                  </div>
                </div>
                <Link
                  href={`/contact-us`}
                  className="tf-btn style-1 bg-on-suface-container wow fadeInUp"
                >
                  <span> GET STARTED </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-mission h-2 tf-spacing-2">
        <div className="tf-container">
          <div className="row">
            <div className="col-12">
              <div className="heading-section text-center">
                <div className="wow fadeInUp">
                  <a href="#" className="tag label text-btn-uppercase">
                    Our Mission
                  </a>
                </div>
                <h3 className="title-section wow fadeInUp mb-12">
                  Our mission is simple:
                </h3>
                <p className="text wow fadeInUp mb-12" style={{ fontSize: "18px", maxWidth: "800px", margin: "0 auto 12px" }}>
                  To restore trust and financial stability to individuals and businesses affected by fraud.
                </p>
                <p className="text wow fadeInUp" style={{ maxWidth: "800px", margin: "0 auto" }}>
                  We understand the emotional and financial distress caused by scams. That's why we take a personalized approach to every case, combining technology, legal insight, and relentless determination to pursue justice on your behalf.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
