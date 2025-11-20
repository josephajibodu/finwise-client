import React from "react";

export default function Faqs() {
  return (
    <>
      <div className="according-item style-arrow style-small">
        <h6>
          <a
            href="#according1"
            data-bs-toggle="collapse"
            className="title-according collapsed"
          >
            How quickly can you respond to a BEC attack?
            <i className="icon-chevron-down" />
          </a>
        </h6>
        <div id="according1" className="collapse" data-bs-parent="#According1">
          <div className="according-content">
            <p>
              Time is critical in BEC recovery. We initiate immediate case review and begin forensic investigation within 24 hours of receiving your case details. Our rapid response protocol is designed to freeze transfers and trace funds before they disappear completely.
            </p>
          </div>
        </div>
      </div>
      <div className="according-item style-arrow style-small">
        <h6>
          <a
            href="#according2"
            data-bs-toggle="collapse"
            className="title-according collapsed"
          >
            What information do you need to start the recovery process?
            <i className="icon-chevron-down" />
          </a>
        </h6>
        <div id="according2" className="collapse" data-bs-parent="#According1">
          <div className="according-content">
            <p>
              We need details of the fraudulent email, compromised transaction, timeline of events, recipient bank information, and any correspondence with the scammer. The more information you can provide, the faster we can begin tracing and recovery efforts.
            </p>
          </div>
        </div>
      </div>
      <div className="according-item style-arrow style-small">
        <h6>
          <a
            href="#according3"
            data-bs-toggle="collapse"
            className="title-according collapsed"
          >
            Can you recover funds that were sent to crypto wallets?{" "}
            <i className="icon-chevron-down" />
          </a>
        </h6>
        <div id="according3" className="collapse" data-bs-parent="#According1">
          <div className="according-content">
            <p>
              Yes, our forensic team specializes in blockchain tracing and cryptocurrency recovery. We use advanced tools like Wallet API analysis and smart contract tracing to track funds through crypto exchanges and wallets. Recovery depends on timing and whether the funds have been moved or converted.
            </p>
          </div>
        </div>
      </div>
      <div className="according-item style-arrow style-small">
        <h6>
          <a
            href="#according4"
            data-bs-toggle="collapse"
            className="title-according collapsed"
          >
            What is your fee structure for BEC recovery?
            <i className="icon-chevron-down" />
          </a>
        </h6>
        <div id="according4" className="collapse" data-bs-parent="#According1">
          <div className="according-content">
            <p>
              We operate on a fully contractual, one-time fee structure. Payment is typically required only upon successful recovery. We provide clear terms and conditions upfront, ensuring you understand all costs before we begin work on your case. No hidden charges.
            </p>
          </div>
        </div>
      </div>
      <div className="according-item style-arrow style-small">
        <h6>
          <a
            href="#according5"
            data-bs-toggle="collapse"
            className="title-according collapsed"
          >
            How long does BEC fund recovery typically take?
            <i className="icon-chevron-down" />
          </a>
        </h6>
        <div id="according5" className="collapse" data-bs-parent="#According1">
          <div className="according-content">
            <p>
              Recovery timelines vary depending on complexity, but we aim for rapid response. Simple cases may see recovery within days, while complex international cases may take several weeks. We keep you informed throughout the process with regular updates.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
