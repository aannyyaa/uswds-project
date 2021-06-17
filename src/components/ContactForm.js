import {
  TextInput,
  Textarea,
  Form,
  Label,
  Button,
} from "@trussworks/react-uswds";
import { useTranslation } from "react-i18next";

const ContactForm = () => {
  const { t } = useTranslation();
  return (
    <Form onSubmit={() => {console.log("Submit!")}}>
      <Label htmlFor="input-email">{t("form.email")}</Label>
      <TextInput id="input-email" name="input-email" type="text" />
      <Label htmlFor="input-subject">{t("form.subject")}</Label>
      <TextInput id="input-subject" name="input-subject" type="text" />
      <Label htmlFor="input-message">{t("form.message")}</Label>
      <Textarea
        id="input-message"
        name="input-message"
      />
      <Button type="submit">{t("form.submit")}</Button>
    </Form>
  );
};

export default ContactForm;
