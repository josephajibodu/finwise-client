"use client";
import Link from "next/link";

import React from "react";
import OdometerComponent from "./OdometerComponent";
import { counters } from "@/data/cta";

export default function About() {
  return (
    <>
      <section className="section-about h-2 section-one-page" id="about">
        <div className="about-inner">
          <div className="section-about-left">
            <div className="about-top">
              <div className="tf-container">
                <div className="row">
                  <div className="col-12">
                    <div className="about-content">
                      <div className="heading-section">
                        <div className="text-anime-wave">
                          <a href="#" className="tag label text-btn-uppercase">
                            About ABC Capital Limited
                          </a>
                        </div>
                        <h3 className="title-section mb-28 text-anime-wave">
                          Your Global Partner in{" "}
                          <span className="color-primary">Scam Recovery</span>{" "}
                          and{" "}
                          <span className="color-primary">
                            Financial Justice
                          </span>
                        </h3>
                        <div className="sub-title mb-32 text-anime-wave">
                          Founded in 2017, ABC Capital Limited is a leading
                          fund recovery and financial investigation firm
                          committed to helping victims of online scams reclaim
                          what's rightfully theirs.
                        </div>
                        <p className="text mb-32 text-anime-wave">
                          From fraudulent crypto platforms to unauthorized
                          brokers and deceitful investment schemes, we provide
                          structured, legal, and tech-powered solutions to trace
                          and recover lost funds worldwide.
                        </p>
                        <div className="benefit-lists mb-32 text-anime-wave">
                          <div className="benefit-items">
                            <div className="icon">
                              <i className="icon-checkbox" />
                            </div>
                            <div className="title">
                              <strong>Proven Track Record:</strong> Hundreds of
                              successful recoveries across more than 30
                              countries.
                            </div>
                          </div>
                          <div className="benefit-items">
                            <div className="icon">
                              <i className="icon-checkbox" />
                            </div>
                            <div className="title">
                              <strong>Experienced Team:</strong> Legal advisors,
                              forensic investigators, and financial analysts
                              working together.
                            </div>
                          </div>
                          <div className="benefit-items">
                            <div className="icon">
                              <i className="icon-checkbox" />
                            </div>
                            <div className="title">
                              <strong>One-Time Fee Structure:</strong> No hidden
                              charges. Just a clear, contractual fee to initiate
                              recovery.
                            </div>
                          </div>
                          <div className="benefit-items">
                            <div className="icon">
                              <i className="icon-checkbox" />
                            </div>
                            <div className="title">
                              <strong>Advanced Tools:</strong> We use digital
                              forensics, blockchain analytics, wallet APIs, and
                              institutional coordination to trace and recover
                              assets.
                            </div>
                          </div>
                        </div>
                        <div className="text-anime-wave">
                          <Link
                            href={`/contact-us`}
                            className="tf-btn style-1 bg-on-suface-container"
                          >
                            <span> GET STARTED </span>
                          </Link>
                        </div>
                      </div>
                      <div className="wg-counter style-column g-40">
                        {counters.map((counter, index) => (
                          <div className="counter-item" key={index}>
                            <div className="counter">
                              <div className="number-counter">
                                <h4 className="number odometer color-primary">
                                  <OdometerComponent max={counter.value} />
                                </h4>
                                <h4 className="plus color-primary">+</h4>
                              </div>
                              <p className="text text-btn-uppercase label">
                                {counter.label}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="about-bottom">
              <div className="tf-container">
                <div className="row">
                  <div className="col-12">
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
                              <a
                                href="#recovery"
                                data-bs-toggle="tab"
                                role="tab"
                              >
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
                            Our forensic team uses advanced tools like Wallet
                            API analysis, smart contract tracing, and blockchain
                            forensics to trace and recover stolen funds.
                          </p>
                        </div>
                        <div className="tab-pane" id="legal" role="tabpanel">
                          <p className="text">
                            We coordinate with licensed recovery attorneys
                            across borders to enforce legal actions and recover
                            your funds through proper legal channels.
                          </p>
                        </div>
                        <div className="tab-pane" id="recovery" role="tabpanel">
                          <p className="text">
                            With a proven reputation in the global fund recovery
                            space since 2017, we have successfully recovered
                            funds for thousands of scam victims worldwide.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="section-about-right tf-animate-4 hidden!">
            <div className="wg-video"></div>
          </div>
        </div>
      </section>
    </>
  );
}
