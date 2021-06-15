import React from "react";
import { CardGroup } from "@trussworks/react-uswds";

import TeamCard from "../components/TeamCard";

const DATA = [
  { id: "1", name: "name1", info: "info1" },
  { id: "2", name: "name2", info: "info2" },
  { id: "3", name: "name3", info: "info3" },
  { id: "4", name: "name4", info: "info4" },
  { id: "5", name: "name5", info: "info5" },
];

const Team = () => {
  return (
    <div>
      <CardGroup>
        {DATA.map((elem) => {
          return <TeamCard key={elem.id} name={elem.name} info={elem.info} />;
        })}
      </CardGroup>
    </div>
  );
};

export default Team;
