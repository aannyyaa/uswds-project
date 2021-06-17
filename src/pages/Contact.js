import React from "react";
import { useTranslation } from "react-i18next";
import { GridContainer } from "@trussworks/react-uswds";

import ContactForm from "../components/ContactForm";

const Contact = () => {
  const { t } = useTranslation();
  return (
    <GridContainer>
      <h2>{t("subheadings.contact")}</h2>
      <ContactForm />
    </GridContainer>
  );
};

export default Contact;
