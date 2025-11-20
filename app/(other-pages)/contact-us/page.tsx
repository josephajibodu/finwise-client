import React from "react";
import Breadcumb from "@/components/common/Breadcumb";
import { Metadata } from "next";
import Contact from "@/components/otherPages/Contact";

export const metadata: Metadata = {
  title:
    "Contact Us || FinWice - Business & Finance Consulting - React Nextjs Template",
  description:
    "FinWice - Business & Finance Consulting - React Nextjs Template",
};

export default function page() {
  return (
    <>
      <div className="page-title style-1 bg-img-13">
        <div className="tf-container position-relative">
          <div className="page-title-content">
            <Breadcumb pageName="Contact Us" />
            <h2 className="title-page-title">Contact Us</h2>
          </div>
        </div>
      </div>
      <div className="main-content">
        <Contact />
      </div>
    </>
  );
}
