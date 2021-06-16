import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "@trussworks/react-uswds/lib/uswds.css";
import "@trussworks/react-uswds/lib/index.css";
import { useTranslation } from "react-i18next";

import "./styles/index.scss";

import ProjectHeader  from "./components/ProjectHeader";
import ProjectFooter from "./components/ProjectFooter";
import Contact from "./pages/Contact";
import Team from "./pages/Team";

const App = () => {
  //will connect to translation file in future (public/locales/en-US/translation.json)
  const { t, i18n } = useTranslation();

  const contactRoute = "/contact";
  const teamRoute = "/";

  return (
    <Router>
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
