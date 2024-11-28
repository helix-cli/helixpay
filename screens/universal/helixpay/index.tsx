import Image from "next/image";
import styles from "./helixpay.module.css";
import cn from "classnames";
import Decorations from "@/components/Decorations";

const HelixPay = () => {
  return (
    <section className={cn("section", styles.section)}>
      <div className={cn("container")}>
        <Decorations />

        <div className={styles.content}>
          <div className={styles.image_container}>
            <Image
              src="/images/macbooks.jpg"
              layout="fill"
              objectFit="cover"
              alt="iphones"
            />
          </div>

          <div className={styles.title_container}>
            <h2 className={cn("heading-3", styles.title)}>
              Your digital store, ready to launch.
            </h2>
            <p className={cn("paragraph-medium", styles.subtitle)}>
              If you’re looking to launch your own online store for mockups,
              this UI template is designed to make the process effortless.
              Whether you’re selling design resources, UI kits, or creative
              assets, this template provides everything you need to create a
              beautiful and functional online store.
            </p>
            <a
              href="https://ui8.net/users/capricorn-engineering"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className={cn("button-stroke", styles.button)}>
                ✘&nbsp;&nbsp;&nbsp;Purchase MockOS&nbsp;&nbsp;&nbsp;✘
              </button>
            </a>
          </div>
        </div>

        <Decorations />
      </div>
    </section>
  );
};

export default HelixPay;
