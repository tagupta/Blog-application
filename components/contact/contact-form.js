import { useRef } from "react";
import classes from "./contact-form.module.css";

const ContactForm = ({ onAddMessage }) => {
  const enteredEmail = useRef();
  const enteredName = useRef();
  const enteredMessage = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const email = enteredEmail.current.value;
    const name = enteredName.current.value;
    const message = enteredMessage.current.value;

    onAddMessage({
      email,
      name,
      message,
    });
  };

  return (
    <section className={classes.contact}>
      <h1>How can I help you?</h1>
      <form className={classes.form} onClick={submitHandler}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor="email">Your Email</label>
            <input type="email" id="email" required ref={enteredEmail} />
          </div>
          <div className={classes.control}>
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" required ref={enteredName} />
          </div>
        </div>
        <div className={classes.control}>
          <label htmlFor="message">Your Message</label>
          <textarea id="message" rows={5} ref={enteredMessage}></textarea>
        </div>
        <div className={classes.action}>
          <button>Send Message</button>
        </div>
      </form>
    </section>
  );
};

export default ContactForm;
