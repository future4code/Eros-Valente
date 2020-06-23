import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import HomePage from '../HomePage/HomePage.js'
import AppBar from '../AppBar/AppBar.js'
import LoginPage from '../LoginPage/LoginPage.js'
import ListTripsPage from '../ListTripsPage/ListTripsPage.js'
import CreateTripPage from '../CreateTripPage/CreateTripPage.js'
import TripDetailsPage from '../TripDetailsPage/TripDetailsPage.js'
import ApplicationFormPage from '../ApplicationFormPage/ApplicationFormPage.js'

function Router() {
  return (
      <BrowserRouter>
        <AppBar />
        <Switch>
            <Route exact path="/">
                <HomePage />
            </Route>
            <Route exact path="/login">
                <LoginPage />
            </Route>
            <Route  exact path="/application-form">
                <ApplicationFormPage />
            </Route>
            <Route exact path="/trips/list">
                <ListTripsPage />
            </Route>
            <Route exact path="/trips/details">
                <TripDetailsPage />

            </Route>
        </Switch>
      </BrowserRouter>
  );
}

export default Router;