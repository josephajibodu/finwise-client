"use client";
import React from "react";
import Link from "next/link";
import ContactForm from "../common/ContactForm";

export default function Contact() {
  return (
    <>
      {" "}
      <div className="sidebar-details mb-40">
        <ContactForm />
      </div>
      <div className="sidebar-contact sidebar-details">
        <div className="section-content position-relative">
          <div className="heading-section style-color-white">
            <Link
              href={`/contact-us`}
              className="tag label text-btn-uppercase color-white mb-16"
            >
              Contact Us
            </Link>
            <h4 className="title-section mb-1">
              <i className="icon-PhoneCall" /> Contact Us
            </h4>
            <div className="sub-title caption-1 mb-28">
              If you have any query about our service please contact with us
            </div>
          </div>
          <div className="list-box-contact style-column mb-28">
            <div className="box-contact-item">
              <div className="icon">
                <i className="icon-PhoneCall" />
              </div>
              <div className="content">
                <div className="caption-1 title-section-contact">
                  Phone
                </div>
                <a href="tel:+00012345688" className="caption-1 text">
                  +000 (123) 456 88
                </a>
              </div>
            </div>
            <div className="box-contact-item">
              <div className="icon">
                <i className="icon-MapPin" />
              </div>
              <div className="content">
                <div className="caption-1 title-section-contact">
                  Address
                </div>
                <a href="#" className="caption-1 text">
                  138 Ch. Peasley, Magog, QC J1X 7W4, Canada
                </a>
              </div>
            </div>
            <div className="box-contact-item">
              <div className="icon">
                <i className="icon-MapPin" />
              </div>
              <div className="content">
                <div className="caption-1 title-section-contact">
                  Address
                </div>
                <a href="#" className="caption-1 text">
                  29th Floor One Canada Square Canary Wharf London E14 5DY United Kingdom
                </a>
              </div>
            </div>
            <div className="box-contact-item">
              <div className="icon">
                <i className="icon-Mail" />
              </div>
              <div className="content">
                <div className="caption-1 title-section-contact">
                  Email
                </div>
                <a href="mailto:contact@folcocapitals.com" className="caption-1 text">
                  contact@folcocapitals.com
                </a>
              </div>
            </div>
          </div>
          <Link
            href={`/contact-us`}
            className="tf-btn style-1 bg-white bg-white-style-2 w-full text-center"
          >
            <span> CALL NOW </span>
          </Link>
        </div>
      </div>
    </>
  );
}
