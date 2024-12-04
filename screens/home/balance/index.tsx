import Image from "next/image";
import styles from "./balance.module.css";
import cn from "classnames";
import ArrowRight from "@/components/Icons/ArrowRight";
import Decorations from "@/components/Decorations";
import CurrencyFormat from "@/components/CurrencyFormat";

const Balance = () => {
  return (
    <section className={cn("section", styles.section)}>
      <div className={cn("container")}>

        <div className={styles.content}>
            <CurrencyFormat
                className="text-h1 md:text-h3"
                value={3200.8}
                currency="$"
            />
        </div>

      </div>
    </section>
  );
};

export default Balance;
