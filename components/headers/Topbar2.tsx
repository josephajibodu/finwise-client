import React from "react";

export default function Topbar2() {
  return (
    <div className="top-bar">
      <div className="tf-container">
        <div className="row">
          <div className="col-12">
            <div className="top-bar-inner">
              <div className="tf-tb-left">
                <div className="top-bar-content">
                  <i className="icon-MapPin" />
                  <p className="caption-1 hidden">
                    138 Ch. Peasley, Magog, QC J1X 7W4, Canada
                  </p>
                </div>
                <div className="top-bar-content">
                  <i className="icon-MapPin" />
                  <p className="caption-1 hidden">
                    29th Floor One Canada Square Canary Wharf London E14 5DY
                    United Kingdom
                  </p>
                </div>
                <div className="top-bar-content">
                  <i className="icon-Envelope" />
                  <a href="#" className="caption-1 color-white">
                    contact@folcocapitals.com
                  </a>
                </div>
              </div>
              <div className="tf-tb-right">
                <div className="top-bar-content tf-phone">
                  <div className="icon">
                    <i className="icon-PhoneCall" />
                  </div>
                  <div className="content">
                    <p>+000 (123) 456 88</p>
                  </div>
                </div>
                <div className="tf-tb-social d-none">
                  <ul className="tf-social">
                    <li className="item">
                      <a href="#">
                        <div className="icon">
                          <i className="icon-messenger" />
                        </div>
                      </a>
                    </li>
                    <li className="item">
                      <a href="#">
                        <div className="icon">
                          <i className="icon-x" />
                        </div>
                      </a>
                    </li>
                    <li className="item">
                      <a href="#">
                        <div className="icon">
                          <i className="icon-ig1" />
                        </div>
                      </a>
                    </li>
                    <li className="item">
                      <a href="#">
                        <div className="icon">
                          <i className="icon-skype" />
                        </div>
                      </a>
                    </li>
                    <li className="item">
                      <a href="#">
                        <div className="icon">
                          <i className="icon-telegram" />
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
