import React from "react";
import { Card, CardHeader, CardBody } from "@trussworks/react-uswds";

const Team = ({ name, info }) => {
  return (
    <Card
      gridLayout={{ desktop: { col: 4 }, tablet: { col: 6 } }}
      containerProps={{ className: "bg-base-lightest border-0" }}
    >
      <CardHeader>
        <h3 className="usa-card__heading">{name}</h3>
      </CardHeader>
      <CardBody>{info}</CardBody>
    </Card>
  );
};

export default Team;
