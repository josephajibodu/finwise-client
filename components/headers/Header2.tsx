"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import NavOnepage from "./NavOnepage";
import Nav from "./Nav";

export default function Header2({ onepage = false }) {
  const [isFixed, setIsFixed] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 56) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`header style-1 bg-color-white style-fix  ${
        isFixed ? "is-fixed" : ""
      } `}
      id="header"
    >
      <div className="tf-container w-1870">
        <div className="row">
          <div className="col-12">
            <div className="header-content">
              <div className="header-left">
                <div className="logo">
                  <Link href={`/consulting-agency`}>
                    <Image
                      alt=""
                      src="/image/logo/logo-2.svg"
                      width={169}
                      height={40}
                    />
                  </Link>
                </div>
                <nav className="main-menu">
                  <ul
                    className={` menu-primary-menu ${
                      onepage ? "navigation" : ""
                    } `}
                  >
                    {onepage ? <NavOnepage /> : <Nav />}
                  </ul>
                </nav>
              </div>
              <div className="header-right">
                <div className="tf-phone">
                  <a href="#" className="icon">
                    <i className="icon-PhoneCall" />
                  </a>
                  <div className="content">
                    <p className="caption-2">Have any Question?</p>
                    <a href="#">1-555-678-8888</a>
                  </div>
                </div>
                <div className="nav-icon">
                  <div className="canvas-btn">
                    <a href="#canvnasMegamenu" data-bs-toggle="offcanvas">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M4 6H20.5"
                          stroke="white"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M4 12H16"
                          stroke="white"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M4 18L17.9647 18"
                          stroke="white"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </a>
                  </div>
                  <div className="mobile-button">
                    <a href="#canvasMobile" data-bs-toggle="offcanvas">
                      <span />
                      <span />
                      <span />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
