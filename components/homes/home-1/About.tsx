import Link from "next/link";

import React from "react";
import OdometerComponent from "@/components/common/OdometerComponent";

export default function About() {
  return (
    <section
      className="section-about h-1 tf-spacing-2 section-one-page"
      id="about"
    >
      <div className="tf-container">
        <div className="row">
          <div className="col-lg-8">
            <div className="heading-section about-content-left">
              <div className="text-anime-wave">
                <a href="#" className="tag label text-btn-uppercase">
                  About Us
                </a>
              </div>
              <h3 className="text-color-change mb-40">
                We are a team of experts specialized in recovering funds for scam victims.
              </h3>
              <p className="text mb-20">
                Cand Capital Limited is a global fund recovery and financial investigations firm established in 2017. We provide tailored solutions for individuals and businesses impacted by scams, fraudulent investment platforms, crypto theft, and unauthorized financial transactions. Our mission is to recover what's rightfully yours.
              </p>
              <div className="mb-28">
                <h6 className="mb-16">What We Offer:</h6>
                <ul className="list-style-check mb-20">
                  <li>Deep forensic expertise and blockchain tracing</li>
                  <li>Collaboration with financial institutions and law firms</li>
                  <li>Confidential, client-first recovery process</li>
                  <li>Fully contractual and transparent fees</li>
                </ul>
              </div>
              <Link
                href={`/contact-us`}
                className="tf-btn style-1 bg-on-suface-container"
              >
                <span> GET STARTED </span>
              </Link>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="about-content-right">
              <div className="counter-item">
                <div className="counter">
                  <div className="number-counter mb--3">
                    <h2 className="number odometer color-primary mb-2">
                      <OdometerComponent max={35} />
                    </h2>
                    <h2 className="plus color-primary">+</h2>
                  </div>
                  <p className="text text-btn-uppercase label">
                    Years of Experiences
                  </p>
                </div>
              </div>
              <div className="flat-animate-tab">
                <div className="wg-tab style-small">
                  <ul className="tab-product min-w-366" role="tablist">
                    <li className="nav-tab-item" role="presentation">
                      <h6>
                        <a
                          href="#forensics"
                          data-bs-toggle="tab"
                          role="tab"
                          className="active"
                        >
                          Forensics
                        </a>
                      </h6>
                    </li>
                    <li className="nav-tab-item" role="presentation">
                      <h6>
                        <a href="#legal" data-bs-toggle="tab" role="tab">
                          Legal
                        </a>
                      </h6>
                    </li>
                    <li className="nav-tab-item" role="presentation">
                      <h6>
                        <a href="#recovery" data-bs-toggle="tab" role="tab">
                          Recovery
                        </a>
                      </h6>
                    </li>
                  </ul>
                </div>
                <div className="tab-content">
                  <div
                    className="tab-pane active show"
                    id="forensics"
                    role="tabpanel"
                  >
                    <p className="text">
                      Our forensic team uses advanced tools like Wallet API analysis, smart contract tracing, and blockchain forensics to trace and recover stolen funds.
                    </p>
                  </div>
                  <div className="tab-pane" id="legal" role="tabpanel">
                    <p className="text">
                      We coordinate with licensed recovery attorneys across borders to enforce legal actions and recover your funds through proper legal channels.
                    </p>
                  </div>
                  <div className="tab-pane" id="recovery" role="tabpanel">
                    <p className="text">
                      With a proven reputation in the global fund recovery space since 2017, we have successfully recovered funds for thousands of scam victims worldwide.
                    </p>
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
