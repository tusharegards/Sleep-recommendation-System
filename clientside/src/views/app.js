import React, { Component } from 'react'
import {Route, Switch , Redirect , BrowserRouter} from 'react-router-dom'

import Index from "views/Index.js";
import RegisterPage from "views/examples/RegisterPage.js";
import Login from "views/examples/Login.js"
import Presentation from "views/index-sections/Presentation"
import QuickUpdate from "views/QuickUpdate"
import Statistics from "views/Statistics"
import ApiPage from "views/ApiPage"
import Recommendation from "views/Recommendation"

import IndexNavbar from "components/Navbars/IndexNavbar.js";

export class app extends Component {
    render() {
        return (
          
                <BrowserRouter>
                <IndexNavbar/>
    <Switch>
      <Route exact path="/" render={(props) => <Index {...props} />} />
      <Route
        path="/presentation"
        render={(props) => <Presentation {...props} />}
      />
      <Route
      path="/register"
      component={RegisterPage}
      />
      <Route
      path="/login"
      component={Login}
      />
      <Route
        path="/api"
        render={(props) => <ApiPage {...props} />}
      />
      <Route
        path="/quickUpdate"
        render={(props) => <QuickUpdate {...props} />}
      />
      <Route
        path="/recommendation"
        render={(props) => <Recommendation {...props} />}
      />
      <Route
        path="/Statistics"
        render={(props) => <Statistics {...props} />}
      />
      <Redirect to="/" />
    </Switch>
  </BrowserRouter>
        
        )
    }
}

export default app
