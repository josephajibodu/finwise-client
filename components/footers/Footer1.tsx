"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useEffect } from "react";
import { recoveryServiceLinks } from "@/data/menu";

export default function Footer1({ parentClass = "footer" }) {
  useEffect(() => {
    const headings = document.querySelectorAll(".title-mobile");

    const toggleOpen = (event: Event) => {
      const target = event.target as HTMLElement | null;
      if (!target) return;
      const parent = target.closest(".footer-col-block") as HTMLElement | null;
      if (!parent) return;
      const content = parent.querySelector(
        ".tf-collapse-content"
      ) as HTMLElement | null;
      if (!content) return;

      if (parent.classList.contains("open")) {
        parent.classList.remove("open");
        content.style.height = "0px";
      } else {
        parent.classList.add("open");
        content.style.height = content.scrollHeight + 10 + "px";
      }
    };

    headings.forEach((heading) => {
      heading.addEventListener("click", toggleOpen);
    });

    return () => {
      headings.forEach((heading) => {
        heading.removeEventListener("click", toggleOpen);
      });
    };
  }, []);

  return (
    <footer className={parentClass} id="footer">
      <div className="tf-container">
        <div className="row">
          <div className="col-12">
            <div className="footer-top">
              <div className="footer-left">
                <div className="logo-footer">
                  <Link href={`/`} className="logo">
                    <Image
                      alt="FOLCO CAPITAL"
                      src="/image/logo/logo-footer.svg"
                      width={169}
                      height={41}
                    />
                  </Link>
                </div>
                <div className="text caption-1">
                  Folco Capital is a global fund recovery firm dedicated
                  to helping scam victims recover their lost assets.
                </div>
              </div>
              <div className="footer-center">
                <div className="footer-content our-services footer-col-block">
                  <div className="title-mobile label text-btn-uppercase">
                    Recovery Services
                    <i className="icon-arrow-51" />
                  </div>
                  <div className="tf-collapse-content">
                    <ul>
                      {recoveryServiceLinks.map((item, index) => (
                        <li
                          className="support-item-footer caption-1"
                          key={index}
                        >
                          <Link href={item.href}>
                            <span style={{ marginRight: "8px" }}>&gt;</span>
                            {item.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="footer-content our-services footer-col-block">
                  <div className="title-mobile label text-btn-uppercase">
                    Useful Links
                    <i className="icon-arrow-51" />
                  </div>
                  <div className="tf-collapse-content">
                    <ul>
                      <li className="support-item-footer caption-1">
                        <Link href="/">
                          <span style={{ marginRight: "8px" }}>&gt;</span>
                          Home
                        </Link>
                      </li>
                      <li className="support-item-footer caption-1">
                        <Link href="/about-us">
                          <span style={{ marginRight: "8px" }}>&gt;</span>
                          About
                        </Link>
                      </li>
                      <li className="support-item-footer caption-1">
                        <Link href="/contact-us">
                          <span style={{ marginRight: "8px" }}>&gt;</span>
                          Contact
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="footer-right">
                <div className="footer-content our-services footer-col-block">
                  <div className="title-mobile label text-btn-uppercase">
                    Contact Us
                    <i className="icon-arrow-51" />
                  </div>
                  <div className="tf-collapse-content">
                    <div className="contact-footer">
                      <div className="contact-footer-content">
                        <p className="caption-1">
                          <i
                            className="icon-PhoneCall"
                            style={{ marginRight: "8px" }}
                          />
                          +14038797826
                        </p>
                      </div>
                      <div className="contact-footer-content">
                        <p className="caption-1">
                          <i className="icon-Mail" style={{ marginRight: "8px" }} />
                          contact@folcocapitals.com
                        </p>
                      </div>
                      <div className="contact-footer-content">
                        <p className="caption-1">
                          <i
                            className="icon-Globe"
                            style={{ marginRight: "8px" }}
                          />
                          www.folcocapitals.com
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
      <div className="footer-bottom">
        <div className="tf-container">
          <div className="row">
            <div className="col-12">
              <div className="footer-bottom-inner">
                <div
                  className="left"
                  style={{ width: "100%", textAlign: "center" }}
                >
                  <div className="text caption-1">
                    © {new Date().getFullYear()} FOLCO CAPITAL. ALL RIGHTS RESERVED.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
