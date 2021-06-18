import React from "react";
import {
  Route,
  Switch,
  useHistory,
} from "react-router-dom";
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
  let history = useHistory();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    history.push(`/${lng}/`)
  };

  let currentLanguage = i18n.language;

  return (
    <div>
      <LanguageButtons changeLanguage={changeLanguage} />
      <ProjectHeader currentLanguage={currentLanguage} />
      <main>
        <Switch>
          <Route path={`/:lang${t("links.contactRoute")}`}>
            <Contact />
          </Route>
            <Route exact path={`/:lang${t("links.teamRoute")}`} >
            <Team />
          </Route>
        </Switch>
      </main>
      <ProjectFooter currentLanguage={currentLanguage} id="footer" />
    </div>
  );
};

export default App;
