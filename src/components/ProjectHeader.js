import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Header,
  Title,
  PrimaryNav,
  NavMenuButton,
  Grid,
} from "@trussworks/react-uswds";
import { useTranslation } from "react-i18next";

import LanguageButtons from "./LanguageButtons";

const ProjectHeader = ({ currentLanguage, changeLanguage }) => {
  const { t } = useTranslation();

  const [expanded, setExpanded] = useState(false);
  const onClick = () => setExpanded((prvExpanded) => !prvExpanded);

  const navItems = [
    <Link to={`/${currentLanguage}${t("links.teamRoute")}`}>
      {t("links.team")}
    </Link>,
    <Link to={`/${currentLanguage}${t("links.contactRoute")}`}>
      {t("links.contact")}
    </Link>,
  ];

  return (
    <Header extended={true}>
      <Grid row id="languageContainer">
        <Grid >
          <LanguageButtons changeLanguage={changeLanguage} />
        </Grid>
      </Grid>

      <Grid row>
        <Grid tablet={{ col: 6 }} desktop={{ col: 12 }}>
          <Title>{t("projectTitle")}</Title>
        </Grid>
        <Grid tablet={{ col: 6 }} id="NavMenuButtonContainer">
          <NavMenuButton label="Menu" onClick={onClick} />
        </Grid>
      </Grid>
      <PrimaryNav
        items={navItems}
        mobileExpanded={expanded}
        onToggleMobileNav={onClick}
      />
    </Header>
  );
};

export default ProjectHeader;
