"use client";

import Image from "next/image";
import styles from "./dashboard.module.css";
import cn from "classnames";
import {ChevronDown, Share, ArrowDown, ArrowUpRight} from "lucide-react";
import React from "react";

const transactions = [
    {
        type: "receive",
        time: "12:00",
        amount: 0.15,
        currency: "ETH",
        from: '0xbbe69b0b0ab8614672bf2a847747d1a43703ad39',
    },
    {
        type: "send",
        time: "13:00",
        amount: 0.05,
        currency: "ETH",
        to: '0xaae69b0b0ab8614672bf2a847747d1a4ff03ad43',
    }
]

const Dashboard = () => {
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

    const convertEthToUsd = (ethAmount: number, ethToUsdRate: number): string => {
        const usdAmount = ethAmount * ethToUsdRate;
        return new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        }).format(usdAmount);
    };

  return (
    <section className={cn("section", styles.section)}>
      <div className={cn("container")}>
          <h1 className={cn("heading-6", styles.big_title)}>
              Transactions
          </h1>
          <h1 className={cn("label-small", styles.history)}>
                December 06, 2024
          </h1>
          <div>
              <div className={styles.divider}></div>
              <table className={styles.transactionTable}>
                  <tbody>
                  {transactions.map((transaction, index) => (
                      <tr key={index} >
                          <td className={styles.transactionType}>
                              <button
                                  className={`${transaction.type === 'send' ? styles.btn_send : styles.btn_receive}`}
                                  // onClick={() => setDropdownOpen(!dropdownOpen)}
                              >
                                <span>
                                    {transaction.type === 'send' ? <ArrowUpRight color={'#0891b2'}/> : <ArrowDown color={'#16a34a'}/>}
                                </span>
                              </button>
                              <div>
                                  <h1 className={cn("label-small", styles.text)}>
                                      {transaction.type === "send" ? "Sent" : "Received"}
                                  </h1>
                                  <h1 className={cn("label-small-regular", styles.text)}>
                                      {transaction.time}
                                  </h1>
                              </div>

                          </td>
                          <td>
                              <div className={styles.rowContainer}>
                                  <div className={styles.img}>
                                      <Image
                                          src={"/images/eth.png"}
                                          layout="fill"
                                          objectFit="cover"
                                          alt="Featured Product"
                                          className={styles.img}
                                      />
                                  </div>
                                  <div>
                                      <h1 className={cn("label-small", `${transaction.type === 'send' ? styles.text_send: styles.text_receive}`)}>
                                          {`${transaction.type === 'send' ? "-" : "+"}${transaction.amount} ${transaction.currency}`}
                                      </h1>
                                      <h1 className={cn("label-small-regular", styles.text)}>
                                          {convertEthToUsd(transaction.amount, 4000)}
                                      </h1>
                                  </div>
                              </div>
                          </td>
                          <td className={styles.transactionAddress}>
                              {transaction.type === "send" ? "To" : "From"}:{" "}
                              {truncateAddress(
                                  transaction[transaction.type === "send" ? "to" : "from"] ?? "N/A"
                              )}
                          </td>
                      </tr>
                  ))}
                  </tbody>
              </table>
          </div>
      </div>
    </section>
  );
};

export default Dashboard;
