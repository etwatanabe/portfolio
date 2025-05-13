import React, { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";
import "./contact.css";

const Contact = () => {
  const { t } = useTranslation();
  const form = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");


  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatusMessage("");

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatusMessage("success");
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          setStatusMessage("error");
        }
      )
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <section className="contact section" id="contact">
      <h2 className="section__title">{t("contact.title")}</h2>
      <span className="section__subtitle">{t("contact.subtitle")}</span>

      <div className="contact__container container grid">
        <div className="contact__content">
          <h3 className="contact__title">{t("contact.cards.title")}</h3>

          <div className="contact__info">

            <a href="mailto:eduardotwatanabe@gmail.com" target="_blank" className="contact__card">
              <i className="bx bx-mail-send contact__card-icon"></i>

              <h3 className="contact__card-title">Email</h3>
              <span className="contact__card-data">eduardotwatanabe@gmail.com</span>

              <div className="contact__arrow">
                {t("contact.cards.send")}{" "}
                <i className="bx bx-right-arrow-alt contact__arrow-icon"></i>
              </div>
            </a>
            <a href="https://wa.me/+5573999713191" target="_blank" className="contact__card">
              <i className="bx bxl-whatsapp contact__card-icon"></i>

              <h3 className="contact__card-title">WhatsApp</h3>
              <span className="contact__card-data">+55 (73) 99971-3191</span>

              <div className="contact__arrow">
                {t("contact.cards.send")}{" "}
                <i className="bx bx-right-arrow-alt contact__arrow-icon"></i>
              </div>
            </a>
          </div>
        </div>

        <div className="contact__content">
          <h3 className="contact__title">{t("contact.form.title")}</h3>

          <form ref={form} onSubmit={sendEmail} className="contact__form">
            <div className="contact__form-div">
              <label htmlFor="form_name" className="contact__form-tag">{t("contact.form.nameLabel")}</label>
              <input
                id="form_name"
                type="text"
                name="name"
                required
                autoComplete="name"
                placeholder={t("contact.form.namePlaceholder")}
                className="contact__form-input"
              />
            </div>
            <div className="contact__form-div">
              <label htmlFor="form_email" className="contact__form-tag">{t("contact.form.emailLabel")}</label>
              <input
                id="form_email"
                type="email"
                name="email"
                required
                autoComplete="email"
                placeholder={t("contact.form.emailPlaceholder")}
                className="contact__form-input"
              />
            </div>
            <div className="contact__form-div contact__form-area">
              <label htmlFor="form_message" className="contact__form-tag">{t("contact.form.messageLabel")}</label>
              <textarea
                id="form_message"
                name="message"
                cols="30"
                rows="10"
                required
                className="contact__form-input"
                placeholder={t("contact.form.messagePlaceholder")}
              ></textarea>
            </div>

            {statusMessage && (
              <div className={`contact__message ${statusMessage === "success" ? "success" : "error"}`}>
                {t(`contact.${statusMessage}Message`)}
              </div>
            )}

            <button 
              type="submit" 
              className="button button--flex" 
              disabled={isLoading}
            >
              {isLoading ? 'Sending...' : t("contact.form.submit")}
              {isLoading && <i className='bx bx-loader-alt bx-spin'></i>}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
