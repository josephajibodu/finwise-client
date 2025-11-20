"use client";
import React from "react";
import OdometerComponent from "@/components/common/OdometerComponent";
import { counters } from "@/data/cta";

export default function Statistics() {
  return (
    <section
      className="section-statistics h-1 tf-spacing-2 bg-on-suface-container section-one-page"
      id="statistics"
    >
      <div className="tf-container">
        <div className="row">
          <div className="col-12">
            <div className="heading-section style-color-white text-center mb-40">
              <div className="text-anime-wave-1">
                <a href="#" className="tag label text-btn-uppercase color-white">
                  Global Fund Recovery
                </a>
              </div>
              <h3 className="title-section text-anime-wave-1 mb-12">
                Trusted Results, Proven Impact
              </h3>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="wg-counter justify-content-between">
              {counters.map((counter, index) => (
                <React.Fragment key={index}>
                  <div className="counter-item style-2">
                    <div className="counter">
                      <div className="number-counter">
                        <h3 className="number odometer color-white">
                          <OdometerComponent max={counter.value} />
                        </h3>
                      </div>
                      <p className="text text-btn-uppercase label color-white">
                        {counter.label}
                      </p>
                    </div>
                  </div>
                  {index !== counters.length - 1 && (
                    <div className="line" style={{ borderColor: "rgba(255,255,255,0.2)" }} />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

