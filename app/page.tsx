import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import Topbar1 from "@/components/headers/Topbar1";
import About from "@/components/common/About";
import Benefits from "@/components/common/Benefits";
import Contact from "@/components/common/Contact";
import Features from "@/components/common/Features2";
import Hero from "@/components/homes/consulting-agency/Hero";
import Process from "@/components/common/Process";
import Services from "@/components/common/Services2";
import Testimonials from "@/components/common/Testimonials";
import Blogs from "@/components/common/Blogs";
import Cta from "@/components/common/Cta";
import { Metadata } from "next";
export const metadata: Metadata = {
  title:
    "ABC Capital Limited - Expert Fund Recovery & Financial Investigations",
  description:
    "ABC Capital Limited helps scam victims recover lost funds through legal, forensic, and digital solutions. Expert fund recovery services since 2017.",
};
export default function Home() {
  return (
    <>
      <Topbar1 />
      <Header1 />
      <Hero />
      <div className="main-content">
        <Benefits />
        <About />
        <Services />
        <Process />
        <Features />
        <Testimonials />
        <Contact />
        {/* <Blogs /> */}
        <Cta />
      </div>
      <Footer1 />
    </>
  );
}
