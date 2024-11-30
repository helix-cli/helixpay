"use client";

import React from "react";
import cn from "classnames";
import styles from "./header.module.css";
import Add from "../Icons/Add";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ButtonConnect  from "@/components/ButtonConnect";
import {UserRound} from "lucide-react";

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
        <Link href="/" className={cn("hero", styles.logo)}>
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

          <ButtonConnect />

          <button
            className={cn("label-small", styles.dropdown_btn)}
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            {/*Account*/}
            <span>
              <UserRound className="w-4 h-4"/>
            </span>
            {dropdownOpen && (
              <div
                className={cn(styles.dropdown_menu, {
                  [styles.dropdown_menu_open]: dropdownOpen,
                })}
              >
                <Link
                  href="/about"
                  className={cn("label-small", styles.dropdown_link)}
                >
                  About
                </Link>
                <Link
                  href="/contact"
                  className={cn("label-small", styles.dropdown_link)}
                >
                  Contact
                </Link>
              </div>
            )}
          </button>
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
