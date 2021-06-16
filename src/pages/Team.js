import React from "react";
import { CardGroup } from "@trussworks/react-uswds";
import { useTranslation } from "react-i18next";

import TeamCard from "../components/TeamCard";

//hard coded data here for now
const DATA = [
  {
    id: "1",
    name: "Name 1",
    info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: "2",
    name: "Name 2",
    info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: "3",
    name: "Name 3",
    info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: "4",
    name: "Name 4",
    info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: "5",
    name: "Name 5",
    info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
];

const Team = () => {
  const { t, i18n } = useTranslation();
  return (
    <div>
      <h2>{t("Meet Our Team")}</h2>
      <CardGroup>
        {DATA.map((elem) => {
          return <TeamCard key={elem.id} name={elem.name} info={elem.info} />;
        })}
      </CardGroup>
    </div>
  );
};

export default Team;
