"use client";

import React from "react";
import styles from "./faq.module.css";
import cn from "classnames";
import { faqs } from "@/lib/mock";
import Add from "@/components/Icons/Add";

const Faq = () => {
  const [activeFaq, setActiveFaq] = React.useState<number | null>(null);

  return (
    <section className={cn("section")}>
      <div className={cn("container")}>
        <h3 className={cn("heading-3", styles.title)}>
          Frequently asked questions
        </h3>

        <div className={styles.faqs}>
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className={cn(styles.faq, {
                [styles.active]: activeFaq === faq.id,
              })}
              onClick={() => setActiveFaq(faq.id)}
            >
              <div className={styles.faq_header}>
                <h4 className={cn("paragraph-large", styles.faq_question)}>
                  {faq.question}
                </h4>

                <Add />
              </div>

              {faq.id === activeFaq && (
                <div className={styles.faq_answer}>
                  <p className={cn("paragraph-medium")}>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
