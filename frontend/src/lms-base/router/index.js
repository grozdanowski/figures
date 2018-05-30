import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { history } from 'redux/store';

import HeaderLayout from 'components/main-layout/header/HeaderLayout';
import FooterLayout from 'components/main-layout/footer/FooterLayout';

import IndexView from 'views/IndexView';
import LoginView from 'views/LoginView';
import RegisterView from 'views/RegisterView';
import CourseAboutView from 'views/courseware/CourseAboutView';
import CourseContentView from 'views/courseware/CourseContentView';
import DashboardView from 'views/DashboardView';

import styles from 'sass-core/app-root-styles.scss';

class RouterRoot extends Component {
  render() {
    return (
      <div className={styles['lms-root']}>
        <Switch location={history.location}>
          <Route path='/course/:urlString' render={({ match }) => {return(<HeaderLayout courseId={match.params.urlString} isCourseware={true} />)} } />
          <Route component={HeaderLayout} />
        </Switch>
        <div className={styles['lms-content']}>
          <Switch location={history.location}>
            <Route exact path='/' component={IndexView} />
            <Route exact path='/login' component={LoginView} />
            <Route exact path='/register' component={RegisterView} />
            <Route exact path='/dashboard' component={DashboardView} />
            <Route path='/course/:urlString' render={({ match }) => {return(<CourseAboutView courseId={match.params.urlString} />)} } />
            <Route path='/courseware/course/:urlString' render={({ match }) => {return(<CourseContentView courseId={match.params.urlString} />)} } />
            <Route path='/:urlString' render={({ match }) => {return(<p>{match.params.urlString}</p>)}} />
          </Switch>
        </div>
        <FooterLayout />
      </div>
    );
  }
}

export default RouterRoot;
