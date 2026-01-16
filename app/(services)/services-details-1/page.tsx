import Link from "next/link";

import Details1 from "@/components/services/Details1";
import React from "react";
import { Metadata } from "next";
export const metadata: Metadata = {
  title:
    "Business Email Compromise (BEC) Fund Recovery - Folco Capitals Limited",
  description:
    "Expert BEC scam recovery services. Folco Capitals Limited helps victims of business email compromise attacks trace and recover lost funds through legal and forensic solutions.",
};
export default function page() {
  return (
    <>
      <div className="page-title style-1 bg-img-6">
        <div className="tf-container">
          <div className="page-title-content">
            <div className="breadkcum">
              <Link href={`/`} className="caption-1 home">
                Home
              </Link>{" "}
              <span className="arrow-svg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <g clipPath="url(#clip0_9360_28061)">
                    <path
                      d="M3.125 10H16.875"
                      stroke="#A2A3AB"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M11.25 4.375L16.875 10L11.25 15.625"
                      stroke="#A2A3AB"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath>
                      <rect width={20} height={20} fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </span>{" "}
              <span className="caption-1 page-breadkcum">
                Business Email Compromise (BEC) Fund Recovery
              </span>
            </div>
            <h2 className="title-page-title">BUSINESS EMAIL COMPROMISE (BEC) FUND RECOVERY</h2>
          </div>
        </div>
      </div>
      <div className="main-content">
        <Details1 />
      </div>
    </>
  );
}
