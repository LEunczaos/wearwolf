import "../styles/contact.css";

function Contact() {
  return (
    <div className="contact">

      <h1 className="contact__title">CONTACT US</h1>

      <form className="contact__form">

        <input
          type="text"
          placeholder="Name"
        />

        <input
          type="email"
          placeholder="Email"
        />

        <textarea
          placeholder="Message"
          rows="6"
        />

        <button type="submit">
          SEND MESSAGE
        </button>

      </form>

    </div>
  );
}

export default Contact;