import React from "react";
import { CardGroup, Grid, GridContainer } from "@trussworks/react-uswds";
import { useTranslation } from "react-i18next";

import TeamCard from "../components/TeamCard";

//hard coded data here for now
const DATA = [
  {
    id: "1",
    name: "Britney Johnson",
    info: "Civic Innovation Corps Member (2021)",
    photo: 'https://ca.slack-edge.com/T01UA6VHC7Q-U01UM1AU2V9-4ca04b1b0dee-512'
  },
  {
    id: "2",
    name: "Kara Siegel",
    info: "Civic Innovation Corps Member (2021)",
    photo: 'https://ca.slack-edge.com/T01UA6VHC7Q-U01VAJR5W72-d813fd8f70df-512'
  },
  {
    id: "3",
    name: "Michelle Liu",
    info: "Civic Innovation Corps Member (2021)",
    photo: 'https://ca.slack-edge.com/T01UA6VHC7Q-U01UZD4LNUR-bbe96e1072eb-512'
  },
  {
    id: "4",
    name: "Saiful Islam",
    info: "Civic Innovation Corps Member (2021)",
    photo: 'https://ca.slack-edge.com/T01UA6VHC7Q-U01ULQH5BGS-15f7b717daa2-512'
  },
  {
    id: "5",
    name: "Anya Dunaif",
    info: "Civic Innovation Corps Member (2021)",
    photo: 'https://ca.slack-edge.com/T01UA6VHC7Q-U01UE1PJ3P0-2061361ad9fe-512'
  },
];

const Team = () => {
  const { t, i18n } = useTranslation();
  return (
    <GridContainer>
      <h2>{t("subheadings.team")}</h2>
      <CardGroup>
        {DATA.map((elem) => {
          return <TeamCard key={elem.id} name={elem.name} info={elem.info} photo={elem.photo}/>;
        })}
      </CardGroup>
    </GridContainer>
  );
};

export default Team;
