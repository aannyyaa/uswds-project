import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "@trussworks/react-uswds/lib/uswds.css";
import "@trussworks/react-uswds/lib/index.css";
import { useTranslation } from "react-i18next";

import "./styles/index.scss";
import "./styles/app.scss";

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
  
  return (
    <Router>
        <LanguageButtons changeLanguage={changeLanguage} />
        <ProjectHeader />
      <main>
        <Switch>
          <Route path={t("links.contactRoute")}>
            <Contact />
          </Route>
          <Route exact path={t("links.teamRoute")}>
            <Team />
          </Route>
        </Switch>
      </main>
        <ProjectFooter id="footer" />
    </Router>
  );
};

export default App;
