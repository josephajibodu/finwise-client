"use client";
import React from "react";
import DropdownSelect from "./DropdownSelect";
import axios from "axios";
import { useState } from "react";

export default function ContactForm({
  parentClass = "form-contact-home style-border",
  btnClass = "tf-btn style-2 bg-on-suface-container w-full text-center",
  isTitleCenter = true,
  title = "Get A Free Quote",
}) {
  const [success, setSuccess] = useState(true);
  const [showMessage, setShowMessage] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleShowMessage = () => {
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 2000);
  };
  interface ContactFormProps {
    parentClass?: string;
    btnClass?: string;
    isTitleCenter?: boolean;
    title?: string;
  }

  interface SendEmailEvent extends React.FormEvent<HTMLFormElement> {
    target: HTMLFormElement & {
      name?: { value: string };
      email: { value: string };
      phone?: { value: string };
      message?: { value: string };
      reset: () => void;
    };
  }

  const sendEmail = async (e: SendEmailEvent): Promise<void> => {
    e.preventDefault(); // Prevent default form submission behavior

    if (loading) return; // Prevent double submission

    setLoading(true);
    const formData = {
      name: e.target.name?.value || "",
      email: e.target.email.value,
      phone: e.target.phone?.value || "",
      message: e.target.message?.value || "",
    };

    try {
      const response = await axios.post("/api/contact", formData);

      if (response.status === 200) {
        e.target.reset(); // Reset the form
        setSuccess(true); // Set success state
        handleShowMessage();
      } else {
        setSuccess(false); // Handle unexpected responses
        handleShowMessage();
      }
    } catch (error) {
      setSuccess(false); // Set error state
      handleShowMessage();
      e.target.reset(); // Reset the form
    } finally {
      setLoading(false);
    }
  };
  return (
    <form onSubmit={sendEmail} className={parentClass}>
      <h5 className={`title-form ${isTitleCenter ? "text-center" : ""}`}>
        {title}
      </h5>
      <fieldset>
        <input required type="text" name="name" placeholder="Full name" />
      </fieldset>
      <fieldset>
        <input required type="number" name="phone" placeholder="Phone number" />
      </fieldset>
      <fieldset>
        <input required type="email" name="email" placeholder="Email address" />
      </fieldset>
      {/* 
      <DropdownSelect
        options={["How can we help you?", "Option 1", "Option 2", "Option 3"]}
      /> */}
      <fieldset>
        <textarea
          required
          name="message"
          placeholder="Your mesages"
          defaultValue={""}
        />
      </fieldset>
      <div
        className={`tfSubscribeMsg  footer-sub-element ${
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
      <button type="submit" className={btnClass} disabled={loading}>
        <span>
          {loading ? (
            <>
              <span
                className="spinner-border spinner-border-sm me-2"
                role="status"
                aria-hidden="true"
              ></span>
              Submitting...
            </>
          ) : (
            " Submit Request "
          )}
        </span>
      </button>
    </form>
  );
}
