import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CTAButton from 'components/ui-elements/CTAButton';
import styles from './_CoursesListItem.scss';
import classNames from 'classnames/bind';

import facebookIcon from 'static/images/fontawesome-svg/brands/facebook-f.svg';
import twitterIcon from 'static/images/fontawesome-svg/brands/twitter.svg';

let cx = classNames.bind(styles);


class CoursesListItem extends Component {

  render() {

    return (
      <div className={styles['course-container']}>
        <span
          className={styles['course-image-container']}
          style={{backgroundImage: 'url(' + this.props.courseData['media']['course_image']['uri'] + ')'}}
        />
        <div className={styles['course-info-container']}>
          <div className={styles['course-info-upper']}>
            <h2 className={styles['title']}>{this.props.courseData['name']}</h2>
            <span className={styles['code']}>{this.props.courseData['number']}</span>
            <div className={styles['course-dates']}>
              {this.props.courseData['start'] && (
                <span className={styles['course-date']}>
                  Starts: <b>{this.props.courseData['start']}</b>
                </span>
              )}
              {this.props.courseData['end'] && (
                <span className={styles['course-date']}>
                  Ends: <b>{this.props.courseData['end']}</b>
                </span>
              )}
            </div>
          </div>
          <div className={styles['course-info-bottom']}>
            <button className={styles['footer-control']} onClick={() => console.log('Email settings')}>Email settings</button>
            <button className={styles['footer-control']} onClick={() => console.log('Unenroll')}>Unenroll</button>
            <div className={styles['course-share-container']}>
              <span>Share on:</span>
              <button className={cx(styles['share-button'], styles['facebook'])} onClick={() => console.log('share-fb')}><img src={facebookIcon} alt='Share on Facebook' /></button>
              <button className={cx(styles['share-button'], styles['twitter'])} onClick={() => console.log('share-tw')}><img src={twitterIcon} alt='Share on Twitter' /></button>
            </div>
          </div>
        </div>
        <div className={styles['course-cta-container']}>
          <CTAButton
            label = 'Go to the course'
            target = '/courseware/course/test'
            size = 'small'
          />
        </div>
      </div>
    );
  }
}


CoursesListItem.propTypes = {
  courseData: PropTypes.object
}

export default CoursesListItem
