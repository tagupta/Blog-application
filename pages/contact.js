import ContactForm from "../components/contact/contct-form";

const ContactPage = () => {
  const messageHandler = (details) => {
    fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(details),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };
  return <ContactForm onAddMessage={messageHandler} />;
};

export default ContactPage;
