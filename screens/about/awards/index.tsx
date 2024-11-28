import { awards } from "@/lib/mock";
import styles from "./awards.module.css";
import cn from "classnames";

const Awards = () => {
  return (
    <section className={cn("section")}>
      <div className={cn("container")}>
        <div className={cn("heading-3", styles.title)}>Our awards</div>

        <div className={styles.awards}>
          {awards.map((award) => (
            <div key={award.id} className={styles.award}>
              <p className={cn("paragraph-large", styles.award_title)}>
                {award.title}
              </p>
              <p className={cn("paragraph-medium", styles.award_description)}>
                {award.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;
