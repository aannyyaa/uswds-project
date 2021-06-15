import {
  TextInput,
  Textarea,
  Form,
  Label,
  Button,
} from "@trussworks/react-uswds";
import { useTranslation } from "react-i18next";

const ContactForm = () => {
  const { t, i18n } = useTranslation();
  return (
    <Form onSubmit={() => {}}>
      <Label htmlFor="input-email">{t("Email")}</Label>
      <TextInput id="input-email" name="input-email" type="text" />
      <Label htmlFor="input-subject">{t("Subject")}</Label>
      <TextInput id="input-subject" name="input-subject" type="text" />
      <Label htmlFor="input-message">{t("Message")}</Label>
      <Textarea
        id="input-message"
        name="input-message"
      />
      <Button type="button">{t("Submit")}</Button>
    </Form>
  );
};

export default ContactForm;
