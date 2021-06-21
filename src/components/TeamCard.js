import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardMedia,
  CardFooter,
  Tag,
} from "@trussworks/react-uswds";

const Team = ({ name, info, photo, role, year }) => {
  return (
    <Card
      gridLayout={{ desktop: { col: 4 }, tablet: { col: 6 } }}
      containerProps={{ className: "border-0" }}
    >
      <CardMedia>
        <img src={photo} alt={name} />
      </CardMedia>
      <CardHeader>
        <h2>{name}</h2>
      </CardHeader>
      <CardBody>{info}</CardBody>
      <CardFooter>
        <Tag>{role}</Tag>
        <Tag>{year}</Tag>
      </CardFooter>
    </Card>
  );
};

export default Team;
