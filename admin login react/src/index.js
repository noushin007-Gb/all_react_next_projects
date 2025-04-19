import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import AdminLoginForm from './views/admin-login-form'
import AdminForgotPasswordForm from './views/admin-forgot-password-form'
import CheckMailBox from './views/check-mail-box'
import ResetPassword from './views/reset-password'
import AdminLogin from './views/admin-login'
import NotFound from './views/not-found'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={AdminLoginForm} exact path="/" />
        <Route
          component={AdminForgotPasswordForm}
          exact
          path="/admin-forgot-password-form"
        />
        <Route component={CheckMailBox} exact path="/check-mail-box" />
        <Route component={ResetPassword} exact path="/reset-password" />
        <Route component={AdminLogin} exact path="/admin-login" />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
