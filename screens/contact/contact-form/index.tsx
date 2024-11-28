import styles from "./contact-form.module.css";
import cn from "classnames";

const ContactForm = () => {
  return (
    <section className={cn("section")}>
      <div className={cn("container")}>
        <h3 className={cn("heading-3", styles.title)}>Get In Touch</h3>

        <form className={cn(styles.form)}>
          <div className={cn(styles.form_group)}>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              className={cn("paragraph-medium", styles.input)}
            />

            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              className={cn("paragraph-medium", styles.input)}
            />
          </div>

          <input
            type="phone"
            id="phone"
            name="phone"
            placeholder="Phone Number"
            className={cn("paragraph-medium", styles.input)}
          />

          <textarea
            id="message"
            name="message"
            placeholder="Message"
            className={cn("paragraph-medium", styles.textarea)}
          ></textarea>

          <button type="submit" className={cn("button", styles.button)}>
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
