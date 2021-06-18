import React from "react";
import { useTranslation } from "react-i18next";
import { GridContainer } from "@trussworks/react-uswds";
import "../styles/contact.scss";
import ContactForm from "../components/ContactForm";
import brooklynBridge from "../images/brooklynBridge.jpg";

const Contact = () => {
  const { t } = useTranslation();
  return (
    <div>
      <div id="imgContainer">
        <img src={brooklynBridge} alt="" />
      </div>
      <GridContainer id="contact">
        <h1>{t("subheadings.contact")}</h1>
        <ContactForm />
      </GridContainer>
    </div>
  );
};

export default Contact;
