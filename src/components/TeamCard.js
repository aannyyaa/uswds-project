import React from "react";
import { Card, CardHeader, CardBody, CardMedia, CardFooter, Tag } from "@trussworks/react-uswds";
import { useTranslation } from "react-i18next";

const Team = ({ name, info, photo, role, year }) => {  
  const { t } = useTranslation();

  return (
    <Card
      gridLayout={{ desktop: { col: 4 }, tablet: { col: 6 } }}
      containerProps={{ className: "border-0" }}
    >
      <CardMedia>
        <img src={photo} alt={t("images.teamMemberPhoto")} />
      </CardMedia>
      <CardHeader>
        <h3>{name}</h3>
      </CardHeader>
      <CardBody>{info}</CardBody>
      <CardFooter>
        <Tag>
          {role}
        </Tag>
        <Tag>
          {year}
        </Tag>
      </CardFooter>
    </Card>
  );
};

export default Team;
