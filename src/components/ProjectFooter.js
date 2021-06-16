import React from "react";
import { Link } from "react-router-dom";
import {
  Footer,
  FooterNav,
  Logo,
} from "@trussworks/react-uswds";
import { useTranslation } from "react-i18next";

const ProjectFooter = () => {
  const { t, i18n } = useTranslation();

  const contactRoute = "/contact";
  const teamRoute = "/";

  const footerNavItems = [
    <Link to={teamRoute} className="usa-footer__primary-link">
      {t("Team")}
    </Link>,
    <Link to={contactRoute} className="usa-footer__primary-link">
      {t("Contact")}
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
            heading={
              <p className="usa-footer__logo-heading">{t("NYC MOCTO")}</p>
            }
          />
        }
      />
  );
};

export default ProjectFooter;