"use client";
import Link from "next/link";
import React from "react";
import {
  recoveryServiceLinks,
} from "@/data/menu";
import { usePathname } from "next/navigation";
import { MenuLink } from "@/types/menuLink";

export default function Nav() {
  const pathname = usePathname();
  const isMenuActive = (link: MenuLink) => {
    const currentPath = pathname?.split("/")[1];
    const hrefPath = link.href?.split("/")[1];

    return hrefPath === currentPath;
  };

  const isMenuParentActive = (menu: MenuLink[]) => {
    return menu.some((elm) => isMenuActive(elm));
  };

  const isAboutActive = pathname === "/about-us";
  const isHomeActive = pathname === "/" || pathname === "/index-one-page" || pathname === "/consulting-agency-one-page";

  return (
    <>
      <li
        className={`menu-item ${isHomeActive ? "current-menu-item" : ""}`}
      >
        <Link href="/" className="item-link">
          Home
        </Link>
      </li>
      <li
        className={`menu-item ${isAboutActive ? "current-menu-item" : ""}`}
      >
        <Link href="/about-us" className="item-link">
          About
        </Link>
      </li>
      <li
        className={`menu-item menu-item-has-children position-relative ${
          isMenuParentActive(recoveryServiceLinks) ? "current-menu-item" : ""
        }`}
      >
        <a href="#" className="item-link">
          Recovery Services
        </a>
        <ul className="sub-menu">
          {recoveryServiceLinks.map((item, index) => (
            <li
              className={`sub-menu-item ${
                isMenuActive(item) ? "current-item" : ""
              }`}
              key={index}
            >
              <Link href={item.href} className="item-link-2">
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </li>
      <li
        className={`menu-item ${
          pathname === "/contact-us" ? "current-menu-item" : ""
        }`}
      >
        <Link href="/contact-us" className="item-link">
          Contact
        </Link>
      </li>
    </>
  );
}
