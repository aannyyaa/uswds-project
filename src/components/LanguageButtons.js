import React from "react";
import { GridContainer, Grid, Button } from "@trussworks/react-uswds";
import { useTranslation } from "react-i18next";

const LanguageButton = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  //the es button is not working, but the zh and en-US ones are. For es, I get the error: "missingKey es translation"

  return (
    <GridContainer>
      <Grid row gap>
        <Grid>
          <Button
            type="button"
            unstyled
            onClick={() => changeLanguage("en-us")}
          >
            English
          </Button>
        </Grid>
        <Grid>
          <Button type="button" unstyled onClick={() => changeLanguage("es")}>
            Spanish
          </Button>
        </Grid>
        <Grid>
          <Button type="button" unstyled onClick={() => changeLanguage("zh")}>
            Chinese
          </Button>
        </Grid>
      </Grid>
    </GridContainer>
  );
};

export default LanguageButton;
