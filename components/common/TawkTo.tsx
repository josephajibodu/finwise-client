"use client";

import { useEffect } from "react";

export default function TawkTo() {
  useEffect(() => {
    // Only run on client side
    if (typeof window === "undefined") return;

    // Check if script already exists to prevent duplicates
    if (document.getElementById("tawk-to-script")) return;

    // Initialize Tawk_API exactly as in the original script
    (window as any).Tawk_API = (window as any).Tawk_API || {};
    (window as any).Tawk_LoadStart = new Date();

    // Use IIFE pattern matching the original script
    (function () {
      const s1 = document.createElement("script");
      const s0 = document.getElementsByTagName("script")[0];
      s1.id = "tawk-to-script";
      s1.async = true;
      s1.src = "https://embed.tawk.to/696a8848eded4f198040629e/1jf428mv3";
      s1.charset = "UTF-8";
      s1.setAttribute("crossorigin", "*");
      s0.parentNode?.insertBefore(s1, s0);
    })();
  }, []);

  return null;
}
