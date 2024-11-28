import styles from "./footer.module.css";
import cn from "classnames";

const social_links = [
  {
    id: 1,
    title: "Instagram",
    link: "https://www.instagram.com/",
  },
  {
    id: 2,
    title: "Facebook",
    link: "https://www.facebook.com/",
  },
  {
    id: 3,
    title: "Youtube",
    link: "https://www.youtube.com/",
  },
  {
    id: 4,
    title: "Contra",
    link: "https://www.contra.com/",
  },
];

const Footer = () => {
  return (
    <footer className={cn("section", styles.section)}>
      <div className={cn("container", styles.container)}>
        <div className={cn("hero", styles.title)}>Helix Pay.</div>

        <div className={styles.links}>
          {social_links.map((link, index) => (
            <div key={link.id}>
              <a
                href={link.link}
                target="_blank"
                rel="noreferrer"
                className={cn("paragraph-small", styles.link)}
              >
                {link.title}
              </a>

              {index !== social_links.length - 1 && (
                <span className={styles.divider} />
              )}
            </div>
          ))}
        </div>

        <div className={styles.separator} />

        <div className={styles.terms}>
          <p className={cn("paragraph-small", styles.copy)}>
            © 2024 Helix - MienPV. All rights reserved.
          </p>

          <div className={styles.links}>
            <a
              href="#"
              target="_blank"
              rel="noreferrer"
              className={cn("paragraph-small", styles.link)}
            >
              Privacy Policy
            </a>

            <span className={styles.divider} />

            <a
              href="#"
              target="_blank"
              rel="noreferrer"
              className={cn("paragraph-small", styles.link)}
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
