import Link from "next/link";
import { services } from "@/data/services";
import React from "react";

export default function Services() {
  return (
    <section
      className="section-services h-2 tf-spacing-31 section-one-page"
      id="services"
    >
      <div className="tf-container">
        <div className="row">
          <div className="col-12">
            <div className="content-section">
              <div className="heading-section text-center">
                <div className="text-anime-wave-1">
                  <a href="#" className="tag label text-btn-uppercase">
                    Our Services
                  </a>
                </div>
                <h3 className="title-section text-anime-wave-1 mb-12">
                  Comprehensive Solutions for Financial Recovery
                </h3>
                <div className="sub-title body-2 text-anime-wave-1">
                  Expert fund recovery services to help you reclaim what's rightfully yours.
                </div>
              </div>
            </div>
            <div className="row rg-30 mt-40">
              {services.map((service, index) => (
                <div
                  className="col-lg-4 col-md-6 col-sm-12"
                  key={index}
                >
                  <div className="services-item">
                    <div className="icon color-primary mb-12">
                      <i className={service.iconClass} />
                    </div>
                    <div className="services-content">
                      <h5>
                        <Link
                          href={`/services-details-1`}
                          className="title-services"
                        >
                          {service.title}
                        </Link>
                      </h5>
                      <div className="sub-title">{service.description}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
