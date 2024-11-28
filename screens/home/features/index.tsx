import styles from "./features.module.css";
import cn from "classnames";
import ImageSearch from "@/components/Icons/ImageSearch";
import PaintAI from "@/components/Icons/PaintAI";
import PC from "@/components/Icons/PC";
import { features } from "@/lib/mock";

const Features = () => {
  return (
    <section className={cn("section")}>
      <div className={cn("container")}>
        <div className={styles.content}>
          <div className={styles.title_container}>
            <h3 className={cn("heading-3", styles.title)}>
              What makes our mockups stand out.
            </h3>
            <p className={cn("paragraph-medium", styles.subtitle)}>
              Featuring a diverse range of devices-including iPhones, iPads,
              MacBooks, Apple Watches, and iMacs-our mockups offer an ideal
              platform for showcasing apps, websites, and digital artwork.
            </p>
          </div>

          <div className={styles.features}>
            {features.map((feature) => (
              <div key={feature.id} className={styles.feature}>
                <div className={styles.feature_icon}>
                  {
                    {
                      "image-search": <ImageSearch />,
                      "paint-ai": <PaintAI />,
                      pc: <PC />,
                    }[feature.icon]
                  }
                </div>

                <div>
                  <div>
                    <p className={cn("paragraph-large", styles.feature_title)}>
                      {feature.title}
                    </p>
                    <p
                      className={cn(
                        "paragraph-medium",
                        styles.feature_subtitle,
                      )}
                    >
                      {feature.subtitle}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
