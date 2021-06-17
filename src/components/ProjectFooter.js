import React from "react";
import { Link } from "react-router-dom";
import { Footer, FooterNav, Logo } from "@trussworks/react-uswds";
import { useTranslation } from "react-i18next";

const ProjectFooter = () => {
  const { t } = useTranslation();

  const contactRoute = t("links.contactRoute");
  const teamRoute = t("links.teamRoute");

  const footerNavItems = [
    <Link to={teamRoute} className="usa-footer__primary-link">
      {t("links.team")}
    </Link>,
    <Link to={contactRoute} className="usa-footer__primary-link">
      {t("links.contact")}
    </Link>,
  ];

  return (
    <Footer
      size="slim"
      primary={<FooterNav size="slim" links={footerNavItems} />}
      secondary={
        <Logo
          size="slim"
          image={<img className="usa-footer__logo-img" src="" alt="" />}
          heading={<p className="usa-footer__logo-heading">{t("agency")}</p>}
        />
      }
    />
  );
};

export default ProjectFooter;
