import React from "react";

export default function Steps() {
  return (
    <>
      <h3 className="title-content mb-20">Our BEC Scam Recovery Process</h3>
      <p className="text mb-32">
        At <strong>Cand Capital Limited</strong>, we deploy a rapid response protocol to trace, halt, and recover compromised payments:
      </p>
      <div className="process-list style-column">
        <div className="process-item style-3 style-3-2">
          <div className="icon">
            <i className="icon-ChartPieSlice" />
          </div>
          <div className="circle" />
          <div className="process-content">
            <h5>
              <a href="#" className="name-process">
                Immediate Case Review
              </a>
            </h5>
            <div className="desc body-2 color-on-suface-variant-1">
              We gather details of the fraudulent email, compromised transaction, and timeline to assess how and where the fraud occurred.
            </div>
          </div>
        </div>
        <div className="process-item style-3 style-3-2">
          <div className="icon">
            <i className="icon-Crosshair1" />
          </div>
          <div className="circle" />
          <div className="process-content">
            <h5>
              <a href="#" className="name-process">
                Email and Domain Forensics
              </a>
            </h5>
            <div className="desc body-2 color-on-suface-variant-1">
              Our experts examine email headers, domain registration, and message metadata to trace the origin and determine if it was spoofed or hacked.
            </div>
          </div>
        </div>
        <div className="process-item style-3 style-3-2">
          <div className="icon">
            <i className="icon-ChartLineUp" />
          </div>
          <div className="circle" />
          <div className="process-content">
            <h5>
              <a href="#" className="name-process">
                Transaction Tracing
              </a>
            </h5>
            <div className="desc body-2 color-on-suface-variant-1">
              We follow the stolen funds through banking networks or blockchain if crypto was used, identifying final destinations and intermediaries.
            </div>
          </div>
        </div>
        <div className="process-item style-3 style-3-2">
          <div className="icon">
            <i className="icon-CheckCircle" />
          </div>
          <div className="circle" />
          <div className="process-content">
            <h5>
              <a href="#" className="name-process">
                Evidence Compilation
              </a>
            </h5>
            <div className="desc body-2 color-on-suface-variant-1">
              All emails, transaction logs, payment instructions, and correspondence are documented to support recovery claims.
            </div>
          </div>
        </div>
        <div className="process-item style-3 style-3-2">
          <div className="icon">
            <i className="icon-Briefcase" />
          </div>
          <div className="circle" />
          <div className="process-content">
            <h5>
              <a href="#" className="name-process">
                Institutional Engagement
              </a>
            </h5>
            <div className="desc body-2 color-on-suface-variant-1">
              We contact the recipient bank, intermediary banks, and payment processors to file official recall and fraud claims.
            </div>
          </div>
        </div>
        <div className="process-item style-3 style-3-2">
          <div className="icon">
            <i className="icon-Scale" />
          </div>
          <div className="process-content">
            <h5>
              <a href="#" className="name-process">
                Legal and Regulatory Action
              </a>
            </h5>
            <div className="desc body-2 color-on-suface-variant-1">
              If needed, our legal partners initiate emergency court orders, issue demand letters, or escalate with financial regulators.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
