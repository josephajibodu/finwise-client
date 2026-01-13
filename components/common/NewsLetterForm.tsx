"use client";

import axios from "axios";
import { useState } from "react";

export default function NewsLetterForm({
  placeholder = "Enter your email address",
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
  interface NewsLetterFormProps {
    placeholder?: string;
  }

  interface SendEmailEvent extends React.FormEvent<HTMLFormElement> {
    target: HTMLFormElement & {
      email: { value: string };
      reset: () => void;
    };
  }

  const sendEmail = async (e: SendEmailEvent): Promise<void> => {
    e.preventDefault(); // Prevent default form submission behavior
    
    if (loading) return; // Prevent double submission

    setLoading(true);
    const email = e.target.email.value;

    try {
      const response = await axios.post('/api/newsletter', {
        email,
      });

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
    <form onSubmit={sendEmail}>
      <fieldset>
        <input name="email" type="email" placeholder={placeholder} required />
        <button type="submit" className="tf-btn style-1 bg-on-suface-container" style={{ marginTop: "12px", width: "100%" }} disabled={loading}>
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
              "SUBMIT NOW"
            )}
          </span>
        </button>
      </fieldset>
      <div
        className={`tfSubscribeMsg  footer-sub-element ${
          showMessage ? "active" : ""
        }`}
      >
        {success ? (
          <p style={{ color: "rgb(52, 168, 83)" }}>
            You have successfully subscribed.
          </p>
        ) : (
          <p style={{ color: "red" }}>Something went wrong</p>
        )}
      </div>
    </form>
  );
}
