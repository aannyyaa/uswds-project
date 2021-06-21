import React from "react";
import { CardGroup, GridContainer, Grid } from "@trussworks/react-uswds";
import { useTranslation } from "react-i18next";
import "../styles/team.scss";

import TeamCard from "../components/TeamCard";

const Team = () => {
  const { t } = useTranslation();
  return (
    <GridContainer>
      <Grid>
        <h1>{t("subheadings.team")}</h1>
        <Grid row gap="lg">
          <Grid mobile={{ col: "fill" }} tablet={{ col: 6 }} desktop={{ col: 4 }}>
            <h2>{t("getToKnowTeam")}</h2>
          </Grid>
          <Grid mobile={{ col: "fill" }} tablet={{ col: 6 }} desktop={{ col: 8 }}>
            <p>{t("lorem")}</p>
          </Grid>
        </Grid>
      </Grid>
      <CardGroup id="cardContainer">
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
