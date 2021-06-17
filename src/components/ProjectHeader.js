import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Header,
  Title,
  PrimaryNav,
  NavMenuButton,
} from "@trussworks/react-uswds";
import { useTranslation } from "react-i18next";

const ProjectHeader = ({ contactRoute, teamRoute }) => {
  const { t } = useTranslation();

  const [expanded, setExpanded] = useState(false);
  const onClick = () => setExpanded((prvExpanded) => !prvExpanded);

  const navItems = [
    <Link to={teamRoute}>{t("links.team")}</Link>,
    <Link to={contactRoute}>{t("links.contact")}</Link>,
  ];

  return (
    <Header extended={true}>
      <Title>{t("projectTitle")}</Title>
      <NavMenuButton label="Menu" onClick={onClick} />
      <PrimaryNav
        items={navItems}
        mobileExpanded={expanded}
        onToggleMobileNav={onClick}
      />
    </Header>
  );
};

export default ProjectHeader;
