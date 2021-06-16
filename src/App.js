import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import "@trussworks/react-uswds/lib/uswds.css";
import "@trussworks/react-uswds/lib/index.css";
import {
  Header,
  Title,
  PrimaryNav,
  Footer,
  FooterNav,
  Address,
  Logo,
} from "@trussworks/react-uswds";
import { useTranslation } from "react-i18next";

import "./styles/index.scss";

import Contact from "./pages/Contact";
import Team from "./pages/Team";

const App = () => {
  //will connect to translation file in future (public/locales/en-US/translation.json)
  const { t, i18n } = useTranslation();

  const contactRoute = "/contact";
  const teamRoute = "/";
  const navItems = [
    <Link to={teamRoute}>{t("Team")}</Link>,
    <Link to={contactRoute}>{t("Contact")}</Link>,
  ];
  const footerNavItems = [
    <Link to={teamRoute} className="usa-footer__primary-link">
      {t("Team")}
    </Link>,
    <Link to={contactRoute} className="usa-footer__primary-link">
      {t("Contact")}
    </Link>,
  ];

  return (
    <Router>
      <Header extended={true}>
        <Title>{t("Project Title")}</Title>
        <PrimaryNav items={navItems} />
      </Header>
      <Switch>
        <Route path={contactRoute}>
          <Contact />
        </Route>
        <Route exact path={teamRoute}>
          <Team />
        </Route>
      </Switch>
      <Footer
        size="slim"
        primary={<FooterNav size="slim" links={footerNavItems} />}
        secondary={
          <Logo
            size="slim"
            image={<img className="usa-footer__logo-img" src="" alt="" />}
            heading={<p className="usa-footer__logo-heading">{t("Agency")}</p>}
          />
        }
      />
    </Router>
  );
};

export default App;
