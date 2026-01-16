import About from "@/components/common/About";
import React from "react";
import Features from "@/components/common/Features2";
import Process from "@/components/common/Process";
import Cta from "@/components/common/Cta2";
import Breadcumb from "@/components/common/Breadcumb";
import { Metadata } from "next";
export const metadata: Metadata = {
  title:
    "About Us - Folco Capitals Limited - Expert Fund Recovery & Financial Investigations",
  description:
    "Learn about Folco Capitals Limited, a leading fund recovery and financial investigation firm committed to helping victims of online scams reclaim what's rightfully theirs.",
};
export default function page() {
  return (
    <>
      <div className="page-title style-1 bg-img-4">
        <div className="tf-container">
          <div className="page-title-content">
            <Breadcumb pageName="About Us" />
            <h2 className="title-page-title">About Us</h2>
            <div className="sub-title body-2">
              Your Global Partner in Scam Recovery and Financial Justice
            </div>
          </div>
        </div>
      </div>
      <div className="main-content">
        <About />
        <Features hasBorder parentClass="section-why-choose h-2 page-about" />
        <Process />
        <Cta />
      </div>
    </>
  );
}
