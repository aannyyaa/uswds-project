import React from "react";
import { useTranslation } from "react-i18next";

import ContactForm from "../components/ContactForm";

const Contact = () => {
  const { t, i18n } = useTranslation();
  return (
    <div>
      <h2>{t("Contact Us")}</h2>
    <ContactForm />
    </div>
  );
};

export default Contact;
