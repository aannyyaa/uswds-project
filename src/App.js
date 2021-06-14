import React from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import '@trussworks/react-uswds/lib/uswds.css'
import '@trussworks/react-uswds/lib/index.css'
import {
  Header,
  Title,
  PrimaryNav,
} from '@trussworks/react-uswds'

import Contact from './pages/Contact'
import Team from './pages/Team'

const App = () => {

  const contactRoute = '/contact' 
  const teamRoute = '/team'
  const navItems = [
    <Link to={contactRoute}>Contact</Link>,
    <Link to={teamRoute}>Team</Link>
  ]

  return (
    <Router >
      <Header extended={true}>
          <Title>Project Title</Title>
          <PrimaryNav items={navItems} />
      </Header>
    <div>
      <Switch>
        <Route path={contactRoute}>
          <Contact />
        </Route>
        <Route path={teamRoute}>
          <Team />
        </Route>
      </Switch>
    </div>
    </Router>

  );
}

export default App;
