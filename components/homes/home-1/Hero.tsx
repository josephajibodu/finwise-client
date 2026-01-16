"use client";
import Link from "next/link";
const slides = [
  {
    title: "Expert Fund Recovery<br />Services You Can Trust",
    subtitle:
      "Folco Capitals Limited specializes in tracing and recovering stolen funds from cryptocurrency scams, investment fraud, and online financial crimes. Our proven track record speaks for itself.",
    buttonText: "GET STARTED",
    buttonText2: "RECOVER FUNDS",
  },
  {
    title: "Your Money Deserves<br />To Come Home",
    subtitle:
      "Time is critical when recovering stolen funds. Folco Capitals Limited combines cutting-edge forensic technology with legal expertise to maximize your chances of full recovery.",
    buttonText: "GET STARTED",
    buttonText2: "RECOVER FUNDS",
  },
  {
    title: "Professional Recovery<br />Tailored to Your Case",
    subtitle:
      "Every scam is unique. Folco Capitals Limited provides personalized recovery strategies backed by years of experience helping victims reclaim what's rightfully theirs.",
    buttonText: "GET STARTED",
    buttonText2: "RECOVER FUNDS",
  },
];
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";
export default function Hero() {
  return (
    <div className="page-title-home img-1 style-absolute">
      <Swiper
        dir="ltr"
        className="swiper sw-auto style-absolute"
        modules={[EffectFade, Autoplay, Navigation]}
        autoplay={{
          delay: 2000,
        }}
        speed={1000}
        effect="fade"
        navigation={{
          prevEl: ".snbp3",
          nextEl: ".snbn3",
        }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide className="swiper-slide" key={index}>
            <div className={`page-title-inner img-h1-${index + 1}`}>
              <div className="tf-container">
                <div className="row">
                  <div className="col-12">
                    <div className="page-title-content">
                      <h1
                        className="tf-fade-top fade-item-1"
                        dangerouslySetInnerHTML={{ __html: slide.title }}
                      />
                      <div
                        dangerouslySetInnerHTML={{ __html: slide.subtitle }}
                        className="sub-title body-2 tf-fade-top fade-item-2"
                      ></div>
                      <div className="tf-btn-group g-16 tf-fade-top fade-item-3">
                        <Link
                          href="/contact-us"
                          className="tf-btn style-1 bg-white"
                        >
                          <span>{slide.buttonText}</span>
                        </Link>
                        <Link
                          href="/contact-us"
                          className="tf-btn style-1 border-white bg-transparent"
                        >
                          <span>{slide.buttonText2}</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div
          role="button"
          className="tf-btn-arrow arrow-left sw-auto-next snbp3"
        >
          <i className="icon-arrow-left" />
        </div>
        <div
          role="button"
          className="tf-btn-arrow arrow-right sw-auto-prev snbn3"
        >
          <i className="icon-arrow-right1" />
        </div>
      </Swiper>
    </div>
  );
}
