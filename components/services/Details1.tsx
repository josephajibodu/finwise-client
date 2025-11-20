import Link from "next/link";
import Image from "next/image";
import React from "react";
import Steps from "./Steps";
import Faqs from "./Faqs";
import Contact from "./Contact";

export default function Details1() {
  return (
    <div className="tf-container tf-spacing-2">
      <div className="row rg-60">
        <div className="col-lg-8">
          <div className="service-details-content">
            <div className="image-details image mb-60">
              <Image
                src="/image/section/img-details-service-1.jpg"
                alt="Business Email Compromise Investigation"
                className="lazyload"
                width={850}
                height={512}
              />
            </div>
            <div className="detalis-content mb-60">
              <h2 className="title-content mb-20">Business Email Compromise (BEC) Fund Recovery</h2>
              <p className="text mb-20">
                Business Email Compromise (BEC) is one of the most financially damaging types of cybercrime. Scammers infiltrate or impersonate company email accounts to redirect payments, issue fake invoices, or instruct staff to wire funds to criminal-controlled bank accounts or crypto wallets. These attacks are precise, professional, and often devastating to both individuals and organizations.
              </p>
              <p className="text mb-40">
                At <strong>Cand Capital Limited</strong>, we help victims of BEC attacks trace stolen funds and pursue recovery. Using forensic investigation, institutional collaboration, and legal escalation, we move fast to freeze, recall, or reclaim misdirected payments.
              </p>
            </div>
            <div className="detalis-content mb-60">
              <h3 className="title-content mb-20">What Is a Business Email Compromise (BEC) Scam?</h3>
              <p className="text mb-20">
                A Business Email Compromise (BEC) is a type of cyber fraud where scammers impersonate or gain access to a legitimate business email account—usually of a CEO, finance director, or vendor—to trick employees into authorizing fraudulent wire transfers.
              </p>
              <h5 className="mb-16">Here's how it usually works:</h5>
              <div className="benefit-lists mb-20">
                <div className="benefit-items">
                  <div className="icon">
                    <i className="icon-checkbox" />
                  </div>
                  <div className="title">
                    <strong>Email Spoofing or Hacking:</strong> The scammer either hacks into a business account or spoofs the email domain (e.g., changing john@yourcompany.com to john@yourcornpany.com).
                  </div>
                </div>
                <div className="benefit-items">
                  <div className="icon">
                    <i className="icon-checkbox" />
                  </div>
                  <div className="title">
                    <strong>Payment Diversion Requests:</strong> The fraudster instructs the finance team or vendor manager to urgently change the payment instructions for an invoice or payroll.
                  </div>
                </div>
                <div className="benefit-items">
                  <div className="icon">
                    <i className="icon-checkbox" />
                  </div>
                  <div className="title">
                    <strong>Vendor Impersonation:</strong> Scammers pose as regular vendors asking for invoice payments to be sent to 'new' accounts.
                  </div>
                </div>
                <div className="benefit-items">
                  <div className="icon">
                    <i className="icon-checkbox" />
                  </div>
                  <div className="title">
                    <strong>Internal Role Impersonation:</strong> They may impersonate the CEO or CFO, demanding urgent fund transfers for confidential projects or emergencies.
                  </div>
                </div>
                <div className="benefit-items">
                  <div className="icon">
                    <i className="icon-checkbox" />
                  </div>
                  <div className="title">
                    <strong>Funds Sent to Criminal Accounts:</strong> Once the payment is made, funds are redirected through a network of banks, crypto exchanges, or payment processors—often offshore.
                  </div>
                </div>
              </div>
              <p className="text">
                These attacks exploit trust and familiarity. Victims often realize too late that the request was fake—and the funds are already gone.
              </p>
            </div>
            <div className="detalis-content mb-60" id="menu-sidebar-3">
              <Steps />
            </div>
            <div className="detalis-content mb-60">
              <h3 className="title-content mb-20">How Cand Capital Limited Helps Recover Funds from BEC Scams</h3>
              <p className="text mb-32">
                BEC recovery requires speed, precision, and institutional leverage. Here's how we support you:
              </p>
              <div className="benefit-lists mb-32">
                <div className="benefit-items mb-32">
                  <div className="icon">
                    <i className="icon-checkbox" />
                  </div>
                  <div className="title">
                    <strong>✓ Technical Email and Network Investigation</strong>
                    <p className="text mt-12 mb-8">We uncover:</p>
                    <ul style={{ marginLeft: '20px', marginTop: '8px', marginBottom: '0', listStyle: 'disc' }}>
                      <li>Whether an account was hacked or spoofed</li>
                      <li>Email traffic anomalies and origin metadata</li>
                      <li>IP logs and SMTP relay paths</li>
                      <li>Associated phishing vectors</li>
                    </ul>
                  </div>
                </div>
                <div className="benefit-items mb-32">
                  <div className="icon">
                    <i className="icon-checkbox" />
                  </div>
                  <div className="title">
                    <strong>✓ Financial Path Reconstruction</strong>
                    <p className="text mt-12 mb-8">We trace the fund's journey through:</p>
                    <ul style={{ marginLeft: '20px', marginTop: '8px', marginBottom: '0', listStyle: 'disc' }}>
                      <li>SWIFT/SEPA/ACH transactions</li>
                      <li>Cryptocurrency wallets and exchanges</li>
                      <li>Payment gateways (Stripe, Payoneer, etc.)</li>
                      <li>Third-party accounts and shell companies</li>
                    </ul>
                  </div>
                </div>
                <div className="benefit-items mb-32">
                  <div className="icon">
                    <i className="icon-checkbox" />
                  </div>
                  <div className="title">
                    <strong>✓ Banking and Exchange Collaboration</strong>
                    <p className="text mt-12 mb-8">We work with:</p>
                    <ul style={{ marginLeft: '20px', marginTop: '8px', marginBottom: '8px', listStyle: 'disc' }}>
                      <li>Receiving and intermediary banks</li>
                      <li>Cryptocurrency exchanges</li>
                      <li>Payment service providers</li>
                      <li>Fraud and AML departments</li>
                    </ul>
                    <p className="text">Our goal is to trigger account freezes, submit fraud declarations, and initiate chargeback or recall procedures.</p>
                  </div>
                </div>
                <div className="benefit-items">
                  <div className="icon">
                    <i className="icon-checkbox" />
                  </div>
                  <div className="title">
                    <strong>✓ Legal Coordination</strong>
                    <p className="text mt-12 mb-8">We assist in:</p>
                    <ul style={{ marginLeft: '20px', marginTop: '8px', marginBottom: '0', listStyle: 'disc' }}>
                      <li>Drafting and issuing formal recovery demands</li>
                      <li>Coordinating with corporate legal teams</li>
                      <li>Filing law enforcement reports and recovery affidavits</li>
                      <li>Pursuing restitution where feasible</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="detalis-content mb-60">
              <h3 className="title-content mb-20">Why Choose Cand Capital Limited for BEC Scam Recovery?</h3>
              <div className="benefit-lists mb-20">
                <div className="benefit-items">
                  <div className="icon">
                    <i className="icon-checkbox" />
                  </div>
                  <div className="title">
                    <strong>Fast-Track Protocols:</strong> We act quickly to preserve evidence and freeze transfers before it's too late.
                  </div>
                </div>
                <div className="benefit-items">
                  <div className="icon">
                    <i className="icon-checkbox" />
                  </div>
                  <div className="title">
                    <strong>Business-Grade Investigation:</strong> Our specialists understand B2B payments, internal protocols, and finance operations.
                  </div>
                </div>
                <div className="benefit-items">
                  <div className="icon">
                    <i className="icon-checkbox" />
                  </div>
                  <div className="title">
                    <strong>Global Financial Network:</strong> We collaborate with banks and platforms in over 40 jurisdictions.
                  </div>
                </div>
                <div className="benefit-items">
                  <div className="icon">
                    <i className="icon-checkbox" />
                  </div>
                  <div className="title">
                    <strong>Proven Success:</strong> We've recovered lost corporate payments for SMEs, NGOs, and multinational clients.
                  </div>
                </div>
                <div className="benefit-items">
                  <div className="icon">
                    <i className="icon-checkbox" />
                  </div>
                  <div className="title">
                    <strong>Secure & Confidential:</strong> We handle your business details with the utmost privacy and discretion.
                  </div>
                </div>
              </div>
            </div>
            <div className="detalis-content mb-60">
              <h3 className="title-content mb-20">Signs You've Been Targeted by a BEC Scam</h3>
              <div className="benefit-lists mb-20">
                <div className="benefit-items">
                  <div className="icon">
                    <i className="icon-checkbox" />
                  </div>
                  <div className="title">
                    A vendor suddenly changes payment instructions without prior notice
                  </div>
                </div>
                <div className="benefit-items">
                  <div className="icon">
                    <i className="icon-checkbox" />
                  </div>
                  <div className="title">
                    An executive sends an urgent fund transfer request from an unusual or slightly altered email address
                  </div>
                </div>
                <div className="benefit-items">
                  <div className="icon">
                    <i className="icon-checkbox" />
                  </div>
                  <div className="title">
                    You're asked to "keep this confidential" or bypass standard verification procedures
                  </div>
                </div>
                <div className="benefit-items">
                  <div className="icon">
                    <i className="icon-checkbox" />
                  </div>
                  <div className="title">
                    The email tone or signature seems slightly different
                  </div>
                </div>
                <div className="benefit-items">
                  <div className="icon">
                    <i className="icon-checkbox" />
                  </div>
                  <div className="title">
                    There's urgency or pressure to act before confirming details
                  </div>
                </div>
              </div>
              <p className="text">
                If any of these happened during a fund transfer, your business may have been compromised.
              </p>
            </div>
            <div className="detalis-content mb-60">
              <h3 className="title-content mb-20">Act Now with Cand Capital Limited - Time Is Critical</h3>
              <p className="text mb-32">
                BEC attacks are time-sensitive. The longer you wait, the harder recovery becomes. If you've authorized a payment to a scam account—even if it seemed legitimate—<strong>Cand Capital Limited</strong> can act fast to trace and recover your funds.
              </p>
              <Link
                href={`/contact-us`}
                className="tf-btn style-1 bg-on-suface-container"
              >
                <span> GET STARTED </span>
              </Link>
            </div>
            <div className="detalis-content" id="menu-sidebar-4">
              <h4 className="title-content mb-20">FAQs</h4>
              <div className="wg-according" id="According1">
                <Faqs />
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="tf-sidebar ml-50">
            <div className="sidebar-details mb-40">
              <div className="section-content position-relative">
                <div className="heading-section mb-28">
                  <h4 className="title-section mb-12">
                    <i className="icon-Briefcase" /> Cand Capital Limited
                  </h4>
                  <p className="text mb-20">Company number: 10699502</p>
                  <Link
                    href={`/about-us`}
                    className="tf-btn style-1 bg-on-suface-container w-full text-center"
                  >
                    <span>INCORPORATION</span>
                  </Link>
                </div>
              </div>
            </div>
            <Contact />
          </div>
        </div>
      </div>
    </div>
  );
}
