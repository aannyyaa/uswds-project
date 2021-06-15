import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import "@trussworks/react-uswds/lib/uswds.css";
import "@trussworks/react-uswds/lib/index.css";
import { Header, Title, PrimaryNav } from "@trussworks/react-uswds";
import { useTranslation } from "react-i18next";

import Contact from "./pages/Contact";
import Team from "./pages/Team";

const App = () => {
  const { t, i18n } = useTranslation();

  const contactRoute = "/contact";
  const teamRoute = "/team";
  const navItems = [
    <Link to={contactRoute}>{t("Contact")}</Link>,
    <Link to={teamRoute}>{t("Team")}</Link>,
  ];

  return (
    <Suspense fallback="loading">
      <Router>
        <Header extended={true}>
          <Title>{t("Project Title")}</Title>
          <PrimaryNav items={navItems} />
        </Header>
        <Switch>
          <Route path={contactRoute}>
            <Contact />
          </Route>
          <Route path={teamRoute}>
            <Team />
          </Route>
        </Switch>
        {/* footer */}
      </Router>
    </Suspense>
  );
};

export default App;
