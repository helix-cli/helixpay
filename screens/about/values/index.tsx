import styles from "./values.module.css";
import cn from "classnames";
import Bulb from "@/components/Icons/Bulb";
import Gem from "@/components/Icons/Gem";
import PaintAI from "@/components/Icons/PaintAI";
import Tools from "@/components/Icons/Tools";
import Heart from "@/components/Icons/Heart";
import Clock from "@/components/Icons/Clock";
import { values } from "@/lib/mock";

const Values = () => {
  return (
    <section className={cn("section")}>
      <div className={cn("container")}>
        <div className={cn("heading-3", styles.title)}>Our core values</div>

        <div className={styles.awards}>
          {values.map((award) => (
            <div key={award.id} className={styles.award}>
              <div className={styles.award_icon}>
                {
                  {
                    bulb: <Bulb />,
                    gem: <Gem />,
                    "paint-ai": <PaintAI />,
                    tools: <Tools />,
                    heart: <Heart />,
                    clock: <Clock />,
                  }[award.icon]
                }
              </div>

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

export default Values;
