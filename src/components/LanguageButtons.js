import React from "react";
import { GridContainer, Grid, Button } from "@trussworks/react-uswds";

const LanguageButton = ({ changeLanguage }) => {
  return (
    <GridContainer>
      <Grid row gap>
        <Button type="button" unstyled onClick={() => changeLanguage("en")}>
          English
        </Button>
        <Button type="button" unstyled onClick={() => changeLanguage("es")}>
          Español
        </Button>
        <Button type="button" unstyled onClick={() => changeLanguage("zh")}>
          中文
        </Button>
      </Grid>
    </GridContainer>
  );
};

export default LanguageButton;
