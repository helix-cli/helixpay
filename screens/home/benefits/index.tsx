import styles from "./benefits.module.css";
import cn from "classnames";
import Lamp from "@/components/Icons/Lamp";
import Plugin from "@/components/Icons/Plugin";
import Effect from "@/components/Icons/Effect";
import Flash from "@/components/Icons/Flash";
import { benefits } from "@/lib/mock";

const Benefits = () => {
  return (
    <section className={cn("section")}>
      <div className={cn("container")}>
        <p className={cn("subheading-medium", styles.text)}>Benefits</p>
        <h2 className={cn("heading-3", styles.title)}>
          Why you’ll love our mockups.
        </h2>

        <div className={styles.benefits}>
          {benefits.map((benefit) => (
            <div key={benefit.id} className={styles.benefit}>
              <div className={styles.benefit_title_container}>
                <div className={styles.benefit_icon}>
                  {
                    {
                      lamp: <Lamp />,
                      plugin: <Plugin />,
                      effect: <Effect />,
                      flash: <Flash />,
                    }[benefit.icon]
                  }
                </div>

                <div className={styles.divider} />

                <p className={cn("paragraph-large", styles.benefit_title)}>
                  {benefit.title}
                </p>
              </div>

              <p className={cn("paragraph-small", styles.benefit_description)}>
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
