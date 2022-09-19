import { Fragment, useContext, useRef, useState } from "react";
import NotificationContext from "../../store/notification-context";
import Notification from "../ui/notification";
import classes from "./contact-form.module.css";

async function sendContactData(contactDetails) {
  const response = await fetch("/api/contact", {
    method: "POST",
    body: JSON.stringify(contactDetails),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || "Something went wrong");
  }
}

const ContactForm = () => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredName, setEnteredName] = useState("");
  const [enteredMessage, setEnteredMessage] = useState("");

  const notificationCtx = useContext(NotificationContext);
  const activeNotification = notificationCtx.notification;

  const submitHandler = async (event) => {
    event.preventDefault();

    notificationCtx.showNotification({
      status: "pending",
      title: "Sending...",
      message: "Sending your message.",
    });

    try {
      await sendContactData({
        email: enteredEmail,
        name: enteredName,
        message: enteredMessage,
      });

      notificationCtx.showNotification({
        status: "success",
        title: "Success!!",
        message: "Message Sent.",
      });

      setEnteredEmail("");
      setEnteredName("");
      setEnteredMessage("");
    } catch (error) {
      notificationCtx.showNotification({
        status: "error",
        title: "Error occured",
        message: error.message || "Unable to send message",
      });
    }
  };

  return (
    <Fragment>
      <section className={classes.contact}>
        <h1>How can I help you?</h1>
        <form className={classes.form} onSubmit={submitHandler}>
          <div className={classes.controls}>
            <div className={classes.control}>
              <label htmlFor="email">Your Email</label>
              <input
                type="email"
                id="email"
                required
                value={enteredEmail}
                onChange={(event) => setEnteredEmail(event.target.value)}
              />
            </div>
            <div className={classes.control}>
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                required
                value={enteredName}
                onChange={(event) => setEnteredName(event.target.value)}
              />
            </div>
          </div>
          <div className={classes.control}>
            <label htmlFor="message">Your Message</label>
            <textarea
              id="message"
              required
              rows={5}
              value={enteredMessage}
              onChange={(event) => setEnteredMessage(event.target.value)}
            ></textarea>
          </div>
          <div className={classes.action}>
            <button>Send Message</button>
          </div>
        </form>
      </section>
      {activeNotification && (
        <Notification
          status={activeNotification.status}
          title={activeNotification.title}
          message={activeNotification.message}
        />
      )}
    </Fragment>
  );
};

export default ContactForm;
