"use client";

import React from "react";
import cn from "classnames";
import styles from "./header.module.css";
import Add from "../Icons/Add";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {ConnectButton} from "@rainbow-me/rainbowkit";

const nav_links = [
  {
    id: 1,
    name: "News",
    slug: "iphones",
    link: "/iphones",
  },
  {
    id: 2,
    name: "Pay",
    slug: "ipads",
    link: "/ipads",
  }
];

const Header = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [dropdownOpen, setDropdownOpen] = React.useState(false);

  const pathname = usePathname();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={cn("container", styles.container)}>
        <Link href="/" className={cn("heading-6", styles.logo_name)}>
          HelixPay.
        </Link>

        <div
          className={cn(styles.nav_links, {
            [styles.nav_links_open]: menuOpen,
          })}
        >
          {nav_links.map((link) => (
            <Link
              key={link.id}
              href={`/products/${link.slug}`}
              className={cn("label-small", styles.nav_link, {
                [styles.active]: pathname.includes(link.link),
              })}
            >
              {link.name}
            </Link>
          ))}

          <ConnectButton />

          {/*<button*/}
          {/*  className={cn("label-small", styles.dropdown_btn, {*/}
          {/*    [styles.dropdown_btn_open]: dropdownOpen,*/}
          {/*  })}*/}
          {/*  onClick={() => setDropdownOpen(!dropdownOpen)}*/}
          {/*>*/}
          {/*  About*/}
          {/*  <span>*/}
          {/*    <Add />*/}
          {/*  </span>*/}
          {/*  {dropdownOpen && (*/}
          {/*    <div*/}
          {/*      className={cn(styles.dropdown_menu, {*/}
          {/*        [styles.dropdown_menu_open]: dropdownOpen,*/}
          {/*      })}*/}
          {/*    >*/}
          {/*      <Link*/}
          {/*        href="/about"*/}
          {/*        className={cn("label-small", styles.dropdown_link)}*/}
          {/*      >*/}
          {/*        About*/}
          {/*      </Link>*/}
          {/*      <Link*/}
          {/*        href="/contact"*/}
          {/*        className={cn("label-small", styles.dropdown_link)}*/}
          {/*      >*/}
          {/*        Contact*/}
          {/*      </Link>*/}
          {/*    </div>*/}
          {/*  )}*/}
          {/*</button>*/}
        </div>

        <button
          className={cn(styles.toggle_btn, {
            [styles.toggle_btn_open]: menuOpen,
          })}
          onClick={toggleMenu}
        >
          <Add />
        </button>
      </div>
    </header>
  );
};

export default Header;
