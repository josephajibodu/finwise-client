import "../public/scss/main.scss";
import "rc-slider/assets/index.css";

import GlobalEffectsProvider from "@/components/common/GlobalEffectsProvider";
import ScrollTop from "@/components/common/ScrollTop";
import MobileMenu from "@/components/modals/MobileMenu";
import Quickview from "@/components/modals/Quickview";
import Search from "@/components/modals/Search";
import SideOffcanvas from "@/components/modals/SideOffcanvas";
import Context from "@/context/Context";
import TeamModal from "@/components/modals/TeamModal";
import { rtlInitScript } from "@/lib/rtl-init";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Folco Capital - Expert Fund Recovery & Financial Investigations",
};
import { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: rtlInitScript }} />
        <link
          href="https://fonts.googleapis.com/css2?family=Archivo:ital,wght@0,100..900;1,100..900&family=Geologica:wght@100..900&family=Inter+Tight:ital,wght@0,100..900;1,100..900&family=Kumbh+Sans:wght@100..900&family=Nunito:ital,wght@0,200..1000;1,200..1000&family=Oxygen:wght@300;400;700&family=Rethink+Sans:ital,wght@0,400..800;1,400..800&family=SUSE:wght@100..800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`counter-scroll popup-loader`}>
        <div className="wrapper">
          <Context>
            {children}
            <MobileMenu />
            <Quickview />
            <Search />
            <TeamModal />
            <SideOffcanvas />
            <ScrollTop />{" "}
          </Context>
          <GlobalEffectsProvider />
        </div>
        {/*Start of Tawk.to Script*/}
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/696a8848eded4f198040629e/1jf428mv3';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();
            `,
          }}
        />
        {/*End of Tawk.to Script*/}
      </body>
    </html>
  );
}
