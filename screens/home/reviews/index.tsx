import styles from "./reviews.module.css";
import cn from "classnames";
import Star from "@/components/Icons/Star";

const reviews = [
  {
    id: 1,
    comment:
      "“The apple device mockups are crisp, modern, and make my app look amazing in presentations.”",
    reviewer: "Morgan H.",
    rating: 5,
  },
  {
    id: 2,
    comment:
      "“I was able to drop in my designs effortlessly, and the results look so polished.”",
    reviewer: "Austin N.",
    rating: 5,
  },
  {
    id: 3,
    comment:
      "“I’ve been searching for a good Apple mockup kit for ages, and this one finally delivers.”",
    reviewer: "Natalie G.",
    rating: 4,
  },
  {
    id: 4,
    comment:
      "“As a UI designer, having a professional mockup template is essential.”",
    reviewer: "David M.",
    rating: 5,
  },
];

const Reviews = () => {
  return (
    <section className={cn("section")}>
      <div className={cn("container")}>
        <div className={styles.reviews}>
          {reviews.map((review) => (
            <div key={review.id} className={styles.review}>
              <div className={styles.ratings}>
                {[1, 2, 3, 4, 5].map((star) => (
                  <span
                    key={star}
                    className={cn(styles.rating, {
                      [styles.active]: star <= review.rating,
                    })}
                  >
                    <Star />
                  </span>
                ))}
              </div>
              <p className={cn("paragraph-medium", styles.comment)}>
                {review.comment}
              </p>
              <p className={cn("paragraph-small", styles.reviewer)}>
                {review.reviewer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
