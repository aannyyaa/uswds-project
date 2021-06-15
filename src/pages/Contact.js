import React from "react";
import { TextInput, Textarea, Button } from "@trussworks/react-uswds";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t, i18n } = useTranslation();
  return (
    <div>
      <TextInput
        id="input-type-text"
        name="input-type-text"
        type="text"
        placeholder={t("Email")}
      />
      <TextInput
        id="input-type-text"
        name="input-type-text"
        type="text"
        placeholder={t("Subject")}
      />
      <Textarea
        id="input-type-text"
        name="input-type-text"
        placeholder={t("Message")}
      />
      <Button type="button">{t("Submit")}</Button>
    </div>
  );
};

export default Contact;
