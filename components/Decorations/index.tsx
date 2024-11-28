import styles from "./decorations.module.css";
import cn from "classnames";

const Decorations = () => {
  return (
    <div className={styles.decorations}>
      <h4 className={cn("heading-4", styles.decorations_title)}>⊹</h4>
      <h4 className={cn("heading-4", styles.decorations_title)}>⊹</h4>
      <h4 className={cn("heading-4", styles.decorations_title)}>⊹</h4>
    </div>
  );
};

export default Decorations;
