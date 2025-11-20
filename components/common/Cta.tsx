import Link from "next/link";
import React from "react";

export default function Cta() {
  return (
    <section className="section-cta h-2 section-one-page" id="cta">
      <div className="tf-container">
        <div className="row">
          <div className="col-12">
            <div className="cta-inner style-2">
              <div className="cta-content">
                <h4 className="title-content">
                  Expert Fund Recovery You Can Trust.
                  <br />
                  Scammed online? We help victims recover lost funds through legal and forensic solutions.
                </h4>
                <Link
                  href={`/contact-us`}
                  className="tf-btn style-1 bg-white text-center"
                >
                  <span> RECOVER NOW </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
