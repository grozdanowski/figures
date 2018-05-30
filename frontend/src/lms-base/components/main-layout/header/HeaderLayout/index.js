import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './_HeaderLayout.scss';

import fullLogoPositive from 'static/images/branding/logo-full-horizontal--positive.svg';
import logoSymbolPositive from 'static/images/branding/logo-symbol--positive.svg';

import Navigation from 'components/main-layout/header/Navigation';
import DropdownNav from 'components/ui-elements/DropdownNav';

import { HeaderLinksNonAuth, HeaderLinksAuth, UserDropdownMenu, LanguagesDropdownMenu } from 'config/HeaderConfig';

let cx = classNames.bind(styles);

class HeaderLayout extends Component {

  render() {
    const headerLogo = this.props.inCourseware ? logoSymbolPositive : fullLogoPositive;

    return (
      <header className={cx(styles['header-wrapper'])}>
        <div className={cx(styles['container'], styles['header-container'])}>
          <div className={styles['logo-contaner']}>
            <NavLink
              to='/'
            >
              <img
                src={headerLogo}
                className={styles['logo-image']}
                alt={this.props.platformName}
              />
            </NavLink>
          </div>
          {(this.props.isCourseware && this.props.userAuthenticated) && (
            <div className={styles['course-name']}>
              <span className={styles['course-code']}>{this.props.course.get('courseCode')}</span>
              <span>{this.props.course.get('courseName')}</span>
            </div>
          )}
          {(this.props.isCourseware && this.props.userAuthenticated) ? (
            <div>WOAH</div>
          ) : (
            <Navigation
              mainItems = {this.props.userAuthenticated ? HeaderLinksAuth : HeaderLinksNonAuth}
            />
          )}
          {this.props.userAuthenticated && (
            <div className={styles['user-container']}>
              <span className={styles['nav-separator']} />
              <img
                src={this.props.user.get('profile_image')['image_url_medium']}
                alt={this.props.user.get('name')}
                role='presentation'
                className={styles['user-avatar']}
              />
              <DropdownNav
                dropdownItems={UserDropdownMenu}
                label={this.props.user.get('name')}
              />
            </div>
          )}
          {(!this.props.userAuthenticated && this.props.languageDropdownEnabled) && (
            <div className={styles['language-dropdown-container']}>
              <span className={styles['nav-separator']} />
              <DropdownNav
                dropdownItems={LanguagesDropdownMenu}
                label='En'
              />
            </div>
          )}
        </div>
      </header>
    );
  }
}

HeaderLayout.defaultProps = {
  languageDropdownEnabled: true,
  inCourseware: false,
}

const mapStateToProps = (state, ownProps) => ({
  userAuthenticated: state.user.get('isAuthenticated'),
  user: state.user,
  platformName: state.platform.platformName,
  course: state.course
})

export default connect(
  mapStateToProps
)(HeaderLayout)
