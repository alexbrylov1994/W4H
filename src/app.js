import React from 'react';
import ReactDOM from 'react-dom';
import { IndexRoute, Route } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import ReactStormpath, { Router, HomeRoute, LoginRoute, AuthenticatedRoute } from 'react-stormpath';
import { LoginPage, RegisterPage, ResetPasswordPage, VerifyEmailPage, ProfilePage, ClientProfile } from './components/authentication';
import { MasterPage, IndexPage, aboutPage, myBookmarks,myGarage, carList, carDetailes, rentalHistory } from './components/initialPages';

ReactStormpath.init();

ReactDOM.render(
  <Router history={createBrowserHistory()}>
      <HomeRoute path='/' component={MasterPage}>
      <IndexRoute component={IndexPage} />
      <LoginRoute path='/login' component={LoginPage} />
      <Route path='/verify' component={VerifyEmailPage} />
      <Route path='/register' component={RegisterPage} />
      <Route path='/forgot' component={ResetPasswordPage} />
      <Route path='/about' component={aboutPage} />

      <Route path='/bookmarks' component={myBookmarks} />
      <Route path='/garage' component={myGarage} />
      <Route path='/clientprofile' component={ClientProfile} />
      <Route path='/carlist' component={carList} />
      <Route path='/cardetailes' component={carDetailes} />
      <Route path='/rental' component={rentalHistory} />



      <AuthenticatedRoute>
        <HomeRoute path='/profile' component={ProfilePage} />
      </AuthenticatedRoute>
    </HomeRoute>
  </Router>,
  document.getElementById('app-container')
);
