import Link from "next/link";
import React from "react";

export default function Faqs() {
  return (
    <section
      className="section-faqs h-1 tf-spacing-2 section-one-page"
      id="faqs"
    >
      <div className="tf-container">
        <div className="row">
          <div className="col-12">
            <div className="section-faqs-inner">
              <div className="left">
                <div className="heading-section">
                  <div className="text-anime-wave">
                    <a
                      href="#"
                      className="tag label text-btn-uppercase bg-white"
                    >
                      FAQs
                    </a>
                  </div>
                  <h3 className="title-section mb-12 text-anime-wave">
                    Frequently Asked Questions
                  </h3>
                  <div className="sub-title body-2 text-anime-wave mb-40">
                    Get clear, concise information about how our recovery services work, what to expect, and why clients trust us worldwide.
                  </div>
                  <div className="text-anime-wave">
                    <Link
                      href={`/contact-us`}
                      className="tf-btn style-1 bg-on-suface-container"
                    >
                      <span> Request A Call Back </span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="right">
                <div className="wg-according" id="According">
                  <div className="according-item">
                    <h5>
                      <a
                        href="#according-1"
                        data-bs-toggle="collapse"
                        className="title-according"
                      >
                        What types of scams can Folco Capitals Limited help with? <span />
                      </a>
                    </h5>
                    <div
                      id="according-1"
                      className="collapse show"
                      data-bs-parent="#According"
                    >
                      <div className="according-content">
                        <p>
                          Folco Capitals Limited specializes in recovering funds lost to a wide range of scams including cryptocurrency fraud, unregulated forex and trading platforms, romance scams, fake investment schemes, and online financial deception. Our team uses legal, forensic, and digital tools to trace and reclaim lost assets.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="according-item">
                    <h5>
                      <a
                        href="#according-2"
                        data-bs-toggle="collapse"
                        className="title-according collapsed"
                      >
                        How does the recovery process work?
                        <span />
                      </a>
                    </h5>
                    <div
                      id="according-2"
                      className="collapse"
                      data-bs-parent="#According"
                    >
                      <div className="according-content">
                        <p>
                          Our recovery process begins with a confidential case review where we assess your situation and gather evidence. We then use advanced forensic tools to trace your funds, collaborate with financial institutions and law enforcement, and pursue legal actions when necessary. Throughout the process, we maintain transparency and keep you informed of progress.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="according-item">
                    <h5>
                      <a
                        href="#according-3"
                        data-bs-toggle="collapse"
                        className="title-according collapsed"
                      >
                        Is there an upfront payment required?
                        <span />
                      </a>
                    </h5>
                    <div
                      id="according-3"
                      className="collapse"
                      data-bs-parent="#According"
                    >
                      <div className="according-content">
                        <p>
                          We operate on a fully contractual and transparent fee structure. Payment is typically required only upon successful recovery of your funds. We provide clear terms and conditions upfront, ensuring you understand all costs before we begin work on your case.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="according-item">
                    <h5>
                      <a
                        href="#according-4"
                        data-bs-toggle="collapse"
                        className="title-according collapsed"
                      >
                        How secure is my personal and financial information?
                        <span />
                      </a>
                    </h5>
                    <div
                      id="according-4"
                      className="collapse"
                      data-bs-parent="#According"
                    >
                      <div className="according-content">
                        <p>
                          We take confidentiality and data security seriously. All personal and financial information is handled with strict confidentiality protocols. We use encrypted channels for communication and storage, and we only share information with authorized parties involved in your recovery case. Your privacy is our priority.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="according-item">
                    <h5>
                      <a
                        href="#according-5"
                        data-bs-toggle="collapse"
                        className="title-according collapsed"
                      >
                        What makes Folco Capitals Limited different from other recovery companies? <span />
                      </a>
                    </h5>
                    <div
                      id="according-5"
                      className="collapse"
                      data-bs-parent="#According"
                    >
                      <div className="according-content">
                        <p>
                          Since 2017, we've built a proven reputation in the global fund recovery space. Our team combines deep forensic expertise, advanced technological tools like blockchain forensics, and extensive legal reach through our network of licensed recovery attorneys worldwide. We offer a client-first approach with fully transparent, contractual fees and maintain regular communication throughout the recovery process.
                        </p>
                      </div>
                    </div>
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
