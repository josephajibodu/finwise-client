import Link from "next/link";

import DetailsStock from "@/components/services/DetailsStock";
import React from "react";
import { Metadata } from "next";
export const metadata: Metadata = {
  title:
    "Stock Trading Scam Recovery - Cand Capital Limited",
  description:
    "Expert stock trading scam recovery services. Cand Capital Limited helps victims dispute fraudulent credit/debit card transactions to reclaim lost funds.",
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
                Stock Trading Scam Recovery
              </span>
            </div>
            <h2 className="title-page-title">STOCK TRADING SCAM RECOVERY</h2>
          </div>
        </div>
      </div>
      <div className="main-content">
        <DetailsStock />
      </div>
    </>
  );
}

