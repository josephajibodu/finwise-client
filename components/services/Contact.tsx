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
                <a href="tel:+441214683548" className="caption-1 text">
                  +44 121 468 3548
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
                  27a Barker Road, B74 2NY<br />
                  Sutton Coldfield, United Kingdom
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
                <a href="mailto:contact@abccapitalltd.com" className="caption-1 text">
                  contact@abccapitalltd.com
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
