import React from "react";
import { Link } from "react-router-dom";
import { Footer, FooterNav, Title } from "@trussworks/react-uswds";
import { useTranslation } from "react-i18next";

const ProjectFooter = ({ currentLanguage}) => {
  const { t } = useTranslation();

  const footerNavItems = [
    <Link to={`/${currentLanguage}${t("links.teamRoute")}`} className="usa-footer__primary-link">
      {t("links.team")}
    </Link>,
    <Link to={`/${currentLanguage}${t("links.contactRoute")}`} className="usa-footer__primary-link">
      {t("links.contact")}
    </Link>,
  ];

  return (
    <Footer
      size="slim"
      primary={<FooterNav size="slim" links={footerNavItems} />}
      secondary={<Title>{t("agency")}</Title>}
    />
  );
};

export default ProjectFooter;
