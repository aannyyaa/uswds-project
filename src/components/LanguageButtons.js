import React from "react";
import { GridContainer, Grid, Button } from "@trussworks/react-uswds";

const LanguageButton = ({ changeLanguage }) => {
  return (
    <GridContainer>
      <Grid row gap>
        <Button type="button" onClick={() => changeLanguage("en")}>
          English
        </Button>
        <Button type="button" onClick={() => changeLanguage("es")}>
          Español
        </Button>
        <Button type="button" onClick={() => changeLanguage("zh")}>
          中文
        </Button>
      </Grid>
    </GridContainer>
  );
};

export default LanguageButton;
