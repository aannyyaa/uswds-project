import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "@trussworks/react-uswds/lib/uswds.css";
import "@trussworks/react-uswds/lib/index.css";
import { useTranslation } from "react-i18next";

import "./styles/index.scss";

import ProjectHeader from "./components/ProjectHeader";
import ProjectFooter from "./components/ProjectFooter";
import Contact from "./pages/Contact";
import Team from "./pages/Team";
import LanguageButtons from "./components/LanguageButtons";

const App = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const contactRoute = t("links.contactRoute");
  const teamRoute = t("links.teamRoute");

  return (
    <Router basename={`/${i18n.language}`}>
      <LanguageButtons changeLanguage={changeLanguage} />
      <ProjectHeader />
      <Switch>
        <Route path={contactRoute}>
          <Contact />
        </Route>
        <Route exact path={teamRoute}>
          <Team />
        </Route>
      </Switch>
      <ProjectFooter />
    </Router>
  );
};

export default App;
