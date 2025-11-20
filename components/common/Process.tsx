import Link from "next/link";
import React from "react";

export default function Process() {
  return (
    <section className="section-process h-2 tf-spacing-31 hover-active-step">
      <div className="tf-container position-relative">
        <div className="row">
          <div className="col-12">
            <div className="heading-section style-2 style-color-white">
              <div className="left">
                <div className="text-anime-wave">
                  <a
                    href="#"
                    className="tag label text-btn-uppercase color-white"
                  >
                    Operation
                  </a>
                </div>
                <h3 className="title-section mb-12 text-anime-wave">
                  How We Work
                </h3>
              </div>
              <div className="text-anime-wave-2">
                <Link href={`/contact-us`} className="tf-btn style-1 bg-white">
                  <span> GET STARTED </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="tf-container position-relative">
        <div className="row rg-30">
          <div className="col-lg-3 col-md-6">
            <div className="process-item bg-1 step-hover">
              <div className="process-top">
                <div className="icon">
                  <i className="icon-Briefcase" />
                </div>
                <span className="label text-btn-uppercase">Step 1</span>
              </div>
              <div className="process-content">
                <h5>
                  <a href="#" className="name-process">
                    Free Case Review
                  </a>
                </h5>
                <div className="desc">
                  We assess your case at no charge.
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="process-item bg-1 step-hover">
              <div className="process-top">
                <div className="icon">
                  <i className="icon-Briefcase" />
                </div>
                <span className="label text-btn-uppercase">Step 2</span>
              </div>
              <div className="process-content">
                <h5>
                  <a href="#" className="name-process">
                    Contractual Agreement
                  </a>
                </h5>
                <div className="desc">
                  A one-time fee is issued only if recovery is viable.
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="process-item bg-1 step-hover">
              <div className="process-top">
                <div className="icon">
                  <i className="icon-Briefcase" />
                </div>
                <span className="label text-btn-uppercase">Step 3</span>
              </div>
              <div className="process-content">
                <h5>
                  <a href="#" className="name-process">
                    Investigation Begins
                  </a>
                </h5>
                <div className="desc">
                  We trace the scam source using forensic tools and legal pathways.
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="process-item bg-1 step-hover">
              <div className="process-top">
                <div className="icon">
                  <i className="icon-Briefcase" />
                </div>
                <span className="label text-btn-uppercase">Step 4</span>
              </div>
              <div className="process-content">
                <h5>
                  <a href="#" className="name-process">
                    Recovery Completion
                  </a>
                </h5>
                <div className="desc">
                  Funds are returned through secure financial channels.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
