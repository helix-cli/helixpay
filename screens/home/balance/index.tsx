"use client";

import Image from "next/image";
import styles from "./balance.module.css";
import cn from "classnames";
import ArrowRight from "@/components/Icons/ArrowRight";
import Decorations from "@/components/Decorations";
import CurrencyFormat from "@/components/CurrencyFormat";
import Link from "next/link";
import {ChevronDown} from "lucide-react";
import React from "react";

const userInfo = {
    name: "Mien PV",
    address: '0xbbe69b0b0ab8614672bf2a847747d1a43703ad39',
    balance: 27012,
    rate: '+0.95% ($0.04)'
}

const Balance = () => {
    const [dropdownOpen, setDropdownOpen] = React.useState(false);

    const formatCurrency = (amount: number): string => {
        return new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
        }).format(amount);
    };

    const truncateAddress = (address: string): string => {
        if (address.length <= 10) return address;
        return `${address.slice(0, 6)}...${address.slice(-4)}`;
    };
  return (
    <section className={cn("section", styles.section)}>
      <div className={cn("container")}>
        <div className={styles.content}>
            <div className={styles.balance_container}>
                <div className={styles.account_img}>
                    <Image
                        src={"/images/avatar.png"}
                        layout="fill"
                        objectFit="cover"
                        alt="Featured Product"
                        className={styles.img}
                    />
                </div>
                <div>
                    <div className={styles.address_container}>
                        <h1 className={cn("label-medium", styles.title)}>
                            {truncateAddress(userInfo.address)}
                        </h1>
                        <button
                            className={cn("label-small", styles.share_btn)}
                            onClick={() => setDropdownOpen(!dropdownOpen)}
                        >
                            <span>
                                <ChevronDown className="w-4 h-4"/>
                            </span>
                            {/*{dropdownOpen && (*/}
                            {/*    <div*/}
                            {/*        className={cn(styles.dropdown_menu, {*/}
                            {/*            [styles.dropdown_menu_open]: dropdownOpen,*/}
                            {/*        })}*/}
                            {/*    >*/}
                            {/*        <Link*/}
                            {/*            href="/about"*/}
                            {/*            className={cn("label-small", styles.dropdown_link)}*/}
                            {/*        >*/}
                            {/*            About*/}
                            {/*        </Link>*/}
                            {/*        <Link*/}
                            {/*            href="/contact"*/}
                            {/*            className={cn("label-small", styles.dropdown_link)}*/}
                            {/*        >*/}
                            {/*            Contact*/}
                            {/*        </Link>*/}
                            {/*    </div>*/}
                            {/*)}*/}
                        </button>
                    </div>
                    <h1 className={cn("heading-3", styles.title)}>
                        <span>{formatCurrency(userInfo.balance)}</span>
                    </h1>
                    <h1 className={cn("label-small", styles.rate)}>
                        <span>{userInfo.rate}</span>
                    </h1>
                </div>

            </div>
            <div className={styles.balance_container}>
                <div>
                    <h1 className={cn("label-medium", styles.title)}>
                        {truncateAddress(userInfo.address)}
                    </h1>
                </div>

            </div>

        </div>

      </div>
    </section>
  );
};

export default Balance;
