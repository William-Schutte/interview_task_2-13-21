import React from 'react'
import { Switch, Route } from 'react-router-dom'
import PrivateRoute from '../../containers/private-route/private-route.jsx'
import LoginContainer from '../../containers/login-container/login-container'
import LinkButton from '../link-button/link-button.jsx'
import WelcomeScreen from '../welcome-screen/welcome-screen.jsx'
import ProfileContainer from '../../containers/profile-container/profile-container.jsx'
import NotFound from '../not-found/not-found.jsx'


const App = () => (
    <div>
      <header className="header">
        <div className="top-menu">
          <LinkButton to="/" label={'Home'} />
          <LinkButton to="/profile" label={'Profile'} />
          <LinkButton to="/login" label={'Login'} />
          <LinkButton to="/kvazavr" label={'Not Found'} />
        </div>
      </header>
      <div className="content">
        <Switch>
          <Route exact path="/" component={WelcomeScreen} />
          <Route path="/login" component={LoginContainer} />
          <PrivateRoute path="/profile" component={ProfileContainer} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </div>
)

export default App
