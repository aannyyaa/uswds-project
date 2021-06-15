import React from "react";
import { TextInput, Textarea, Form, FormGroup, Label, Button } from "@trussworks/react-uswds";
import { useTranslation } from "react-i18next";

import ContactForm from "../components/ContactForm";

const Contact = () => {
  const { t, i18n } = useTranslation();
  return (
    <div>
    <ContactForm />
    </div>
  );
};

export default Contact;
