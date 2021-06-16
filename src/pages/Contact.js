import React from "react";
import { useTranslation } from "react-i18next";
import { Grid, GridContainer } from "@trussworks/react-uswds";

import ContactForm from "../components/ContactForm";

const Contact = () => {
  const { t, i18n } = useTranslation();
  return (
    <GridContainer>
      <h2>{t("Contact Us")}</h2>
      <ContactForm />
    </GridContainer>
  );
};

export default Contact;
