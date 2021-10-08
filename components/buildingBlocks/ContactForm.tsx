const ContactForm = () => {
  return (
    <>
      <div className="formContainer">
        <form
          action="https://formspree.io/f/xdoybgnk"
          method="POST"
          className="contactForm"
        >
          <h3 className="mb-6">GET IN TOUCH</h3>
          <article className="formGroup">
            <div>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="name"
                required
                autoComplete="off"
                className="formControl formName"
              />
            </div>
            <div>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="email"
                required
                autoComplete="off"
                className="formControl formEmail"
              />
            </div>
            <div>
              <textarea
                id="textarea"
                name="textarea"
                placeholder="message"
                required
                autoComplete="off"
                className="formControl"
              ></textarea>
            </div>
          </article>

          <button type="submit" className="submitBtn">
            submit
          </button>
        </form>
      </div>
    </>
  );
};

export default ContactForm;
