import React from "react";
import { CardGroup, GridContainer } from "@trussworks/react-uswds";
import { useTranslation } from "react-i18next";

import TeamCard from "../components/TeamCard";

const Team = () => {
  const { t } = useTranslation();
  return (
    <GridContainer>
      <h1>{t("subheadings.team")}</h1>
      <CardGroup>
        {t("teamMembers", { returnObjects: true }).map((elem) => {
          return (
            <TeamCard
              key={elem.id}
              name={elem.name}
              info={elem.info}
              photo={elem.photo}
              role={elem.role}
              year={elem.year}
            />
          );
        })}
      </CardGroup>
    </GridContainer>
  );
};

export default Team;
