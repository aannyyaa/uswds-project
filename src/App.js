import React, { useEffect } from "react";
import { Redirect, Route, Switch, useHistory, useLocation } from "react-router-dom";
import "@trussworks/react-uswds/lib/uswds.css";
import "@trussworks/react-uswds/lib/index.css";
import { useTranslation } from "react-i18next";
import { Grid } from "@trussworks/react-uswds";

import "./styles/index.scss";

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
    history.push(`/${lng}/${location.pathname.split("/")[2]}`);
  };

  let currentLanguage = i18n.language; //can use language detector

  useEffect(() => {
    document.title = `${t("docTitle")}`;
    document.documentElement.lang = currentLanguage
  }, [currentLanguage, t]);



  return (
    <Grid>
      <ProjectHeader
        currentLanguage={currentLanguage}
        changeLanguage={changeLanguage}
      />
      <main>
        <Switch>
          <Route exact path='/'>
            <Redirect to={`/${currentLanguage}${t("links.teamRoute")}`}/>
          </Route>
          {/* check if lang is in my defined languages */}
          <Route path={`/:lang${t("links.contactRoute")}`}>
            <Contact />
          </Route>
          <Route exact path={`/:lang${t("links.teamRoute")}`}>
            <Team />
          </Route>
          {/* unfound routes - if lang not found*/}
        </Switch>
      </main>
      <ProjectFooter currentLanguage={currentLanguage} id="footer" />
    </Grid>
  );
};

export default App;
