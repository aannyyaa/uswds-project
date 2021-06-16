import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  GridContainer,
  Grid,
  Header,
  Title,
  PrimaryNav,
  NavMenuButton,
} from "@trussworks/react-uswds";
import { useTranslation } from "react-i18next";

const ProjectHeader = () => {
  const { t, i18n } = useTranslation();

  const [expanded, setExpanded] = useState(false);
  const onClick = () => setExpanded((prvExpanded) => !prvExpanded);

  const contactRoute = "/contact";
  const teamRoute = "/";
  const navItems = [
    <Link to={teamRoute}>{t("Team")}</Link>,
    <Link to={contactRoute}>{t("Contact")}</Link>,
  ];

  return (
    <GridContainer>
      <div className={`usa-overlay ${expanded ? "is-visible" : ""}`}></div>
      <Header basic={true}>
        <Title>{t("Civic Innovation Corps @ NYC MOCTO")}</Title>
        <PrimaryNav
          items={navItems}
          mobileExpanded={expanded}
          onToggleMobileNav={onClick}
        />
        <NavMenuButton label="Menu" onClick={onClick} />
      </Header>
    </GridContainer>
  );
};

export default ProjectHeader;
