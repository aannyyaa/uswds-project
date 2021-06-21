import React from "react";
import { Route, Switch, useHistory, useLocation } from "react-router-dom";
import "@trussworks/react-uswds/lib/uswds.css";
import "@trussworks/react-uswds/lib/index.css";
import { useTranslation } from "react-i18next";
import { Grid } from "@trussworks/react-uswds";

import "./styles/index.scss";
import "./styles/app.scss";

import ProjectHeader from "./components/ProjectHeader";
import ProjectFooter from "./components/ProjectFooter";
import Contact from "./pages/Contact";
import Team from "./pages/Team";

const App = () => {
  const { t, i18n } = useTranslation();
  let history = useHistory();
  let location = useLocation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    history.push(`/${lng}/${location.pathname.split('/')[2]}`);
    // console.log("PATH", location.pathname.split('/')[2])
  };

  let currentLanguage = i18n.language;

  return (
    <Grid>
      <ProjectHeader
        currentLanguage={currentLanguage}
        changeLanguage={changeLanguage}
      />
      <main>
        <Switch>
          <Route path={`/:lang${t("links.contactRoute")}`}>
            <Contact />
          </Route>
          <Route exact path={`/:lang${t("links.teamRoute")}`}>
            <Team />
          </Route>
        </Switch>
      </main>
      <ProjectFooter currentLanguage={currentLanguage} id="footer" />
    </Grid>
  );
};

export default App;
