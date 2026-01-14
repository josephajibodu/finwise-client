import Link from "next/link";
import Image from "next/image";
import React from "react";
import { blogThumbnails } from "@/data/blogs";

export default function SideOffcanvas() {
  return (
    <div
      className="offcanvas offcanvas-end offcanvasMegamenu"
      id="canvnasMegamenu"
    >
      <div className="heading">
        <button
          className="btn-close"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        />
      </div>
      <div className="meag-menu-item">
        <h4 className="title-content fw-7">Folco Capital</h4>
        <p>
          Folco Capital is a global fund recovery firm dedicated to helping scam
          victims recover their lost assets through legal, forensic, and digital
          solutions.
        </p>
      </div>
      <div className="contact-mega-menu meag-menu-item">
        <h4 className="title-content fw-7">Contact Us</h4>
        <ul className="contact-list-mega-menu">
          <li>
            <p>
              Address:
              <a href="#" target="_blank">
                138 Ch. Peasley, Magog, QC J1X 7W4, Canada
              </a>
            </p>
          </li>
          <li>
            <p>
              Address:
              <a href="#" target="_blank">
                29th Floor One Canada Square Canary Wharf London E14 5DY United Kingdom
              </a>
            </p>
          </li>
          <li>
            <p>
              Email:
              <a href="mailto:contact@folcocapitals.com"> contact@folcocapitals.com </a>
            </p>
          </li>
          <li>
            <p>
              Call: <a href="tel:+00012345688"> +000 (123) 456 88</a>
            </p>
          </li>
        </ul>
      </div>
      <div className="list-img">
        {blogThumbnails.map((item, index) => (
          <Link
            className="me-2"
            href={`/blog-details-1/${item.id}`}
            key={index}
          >
            <Image
              src={item.imgSrc}
              alt=""
              className="lazyload"
              width={80}
              height={80}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
