"use client";
import React, { useState } from "react";
import DropdownSelect from "../common/DropdownSelect";
import axios from "axios";

export default function FundRecoveryForm() {
  const [success, setSuccess] = useState(true);
  const [showMessage, setShowMessage] = useState(false);

  const handleShowMessage = () => {
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 2000);
  };

  interface SendEmailEvent extends React.FormEvent<HTMLFormElement> {
    target: HTMLFormElement & {
      email: { value: string };
      reset: () => void;
    };
  }

  const sendEmail = async (e: SendEmailEvent): Promise<void> => {
    e.preventDefault();
    const email: string = e.target.email.value;

    try {
      const response = await axios.post(
        "https://express-brevomail.vercel.app/api/contacts",
        {
          email,
        }
      );

      if ([200, 201].includes(response.status)) {
        e.target.reset();
        setSuccess(true);
        handleShowMessage();
      } else {
        setSuccess(false);
        handleShowMessage();
      }
    } catch (error) {
      setSuccess(false);
      handleShowMessage();
      e.target.reset();
    }
  };

  const countries = [
    "Select Country",
    "United States",
    "United Kingdom",
    "Canada",
    "Australia",
    "Germany",
    "France",
    "Other",
  ];

  const scamTypes = [
    "Select Scam Type",
    "BEC Scam",
    "Chargeback Scam",
    "Cryptocurrency Scam",
    "Fake Brokerage Scam",
    "Forex and Binary Scam",
    "Investment Scam",
    "Phishing and Email Scam",
  ];

  const amountLost = [
    "Select Amount Lost",
    "Under $1,000",
    "$1,000 - $5,000",
    "$5,000 - $10,000",
    "$10,000 - $50,000",
    "$50,000 - $100,000",
    "Over $100,000",
  ];

  return (
    <section className="section-contact-home page-contact tf-spacing-2">
      <div className="tf-container position-relative">
        <div className="row">
          <div className="col-12">
            <div className="section-contact-home-inner">
              <div className="section-content text-center mb-40">
                <h3 className="title-section mb-12 wow fadeInUp">
                  Fund Recovery Consultation
                </h3>
                <div className="sub-title body-2 color-on-suface-container wow fadeInUp">
                  Fill out the form below to begin your confidential case review.
                  Our experts will assess your situation and guide you through
                  the recovery process.
                </div>
              </div>

              <form
                onSubmit={sendEmail}
                className="form-contact-home style-border"
              >
                <div className="row rg-20">
                  <div className="col-md-6">
                    <fieldset>
                      <input
                        required
                        type="text"
                        placeholder="Your Name (*)"
                        name="name"
                      />
                    </fieldset>
                  </div>
                  <div className="col-md-6">
                    <fieldset>
                      <input
                        required
                        type="email"
                        name="email"
                        placeholder="Your Email (*)"
                      />
                    </fieldset>
                  </div>
                  <div className="col-md-6">
                    <fieldset>
                      <input
                        type="tel"
                        placeholder="Phone Number"
                        name="phone"
                      />
                    </fieldset>
                  </div>
                  <div className="col-md-6">
                    <fieldset>
                      <DropdownSelect
                        options={countries}
                        defaultOption="Select Country"
                        addtionalParentClass="w-full"
                      />
                    </fieldset>
                  </div>
                  <div className="col-md-6">
                    <fieldset>
                      <DropdownSelect
                        options={scamTypes}
                        defaultOption="Select Scam Type"
                        addtionalParentClass="w-full"
                      />
                    </fieldset>
                  </div>
                  <div className="col-md-6">
                    <fieldset>
                      <DropdownSelect
                        options={amountLost}
                        defaultOption="Select Amount Lost"
                        addtionalParentClass="w-full"
                      />
                    </fieldset>
                  </div>
                  <div className="col-12">
                    <fieldset>
                      <textarea
                        required
                        placeholder="Describe your case in detail..."
                        name="message"
                        rows={6}
                        defaultValue={""}
                      />
                    </fieldset>
                  </div>
                </div>

                <div
                  className={`tfSubscribeMsg footer-sub-element ${
                    showMessage ? "active" : ""
                  }`}
                >
                  {success ? (
                    <p style={{ color: "rgb(52, 168, 83)" }}>
                      Form submitted successfully.
                    </p>
                  ) : (
                    <p style={{ color: "red" }}>Something went wrong</p>
                  )}
                </div>

                <div className="text-center mt-30">
                  <button
                    type="submit"
                    className="tf-btn style-1 bg-on-suface-container w-full text-center"
                  >
                    <span>Submit</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

