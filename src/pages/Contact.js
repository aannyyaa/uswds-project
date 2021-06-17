import React from "react";
import { useTranslation } from "react-i18next";
import { GridContainer } from "@trussworks/react-uswds";
import "../styles/contact.scss";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  const { t } = useTranslation();
  return (
    <GridContainer id="contact">
      <h2>{t("subheadings.contact")}</h2>
      <ContactForm />
    </GridContainer>
  );
};

export default Contact;
