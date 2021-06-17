import React from "react";
import { GridContainer, Grid, Button } from "@trussworks/react-uswds";
import { useTranslation } from "react-i18next";

const LanguageButton = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <GridContainer>
      <Grid row gap>
        <Grid >
          <Button
            type="button"
            unstyled
            onClick={() => changeLanguage("en-us")}
          >
            English
          </Button>
        </Grid>
        <Grid >
          <Button type="button" unstyled onClick={() => changeLanguage("es")}>
            Español
          </Button>
        </Grid>
        <Grid>
          <Button type="button" unstyled onClick={() => changeLanguage("zh")}>
            中文
          </Button>
        </Grid>
      </Grid>
    </GridContainer>
  );
};

export default LanguageButton;
