import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import AdminDashboardForm from './views/admin-dashboard-form'
import AdminReadingBooks from './views/admin-reading-books'
import AdminMostReadableBooks from './views/admin-most-readable-books'
import AdminBookManagement from './views/admin-book-management'
import AdminUserManagementForm from './views/admin-user-management-form'
import AdminBookRequest from './views/admin-book-request'
import Bookborrowreq from './views/bookborrowreq'
import AdminReview from './views/admin-review'
import AdminBookmanagement from './views/admin-bookmanagement'
import NotFound from './views/not-found'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={AdminDashboardForm} exact path="/" />
        <Route
          component={AdminReadingBooks}
          exact
          path="/admin-reading-books"
        />
        <Route
          component={AdminMostReadableBooks}
          exact
          path="/admin-most-readable-books"
        />
        <Route
          component={AdminBookManagement}
          exact
          path="/admin-book-management"
        />
        <Route
          component={AdminUserManagementForm}
          exact
          path="/admin-user-management-form"
        />
        <Route component={AdminBookRequest} exact path="/admin-book-request" />
        <Route component={Bookborrowreq} exact path="/bookborrowreq" />
        <Route component={AdminReview} exact path="/admin-review" />
        <Route
          component={AdminBookmanagement}
          exact
          path="/admin-bookmanagement"
        />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
