import ContactProps from "./ContactProps";

const Contact = ({ page }) => {
  return (
    <section>
      {page === 9 && <ContactProps animationName={"fadeIn"} />}
      {page === 10 && <ContactProps animationName={"fadeOut"} />}
    </section>
  );
};

export default Contact;
