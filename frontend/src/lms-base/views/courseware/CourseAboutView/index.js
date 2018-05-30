import React, { Component } from 'react';
import styles from './_CourseAboutView.scss';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import Immutable from 'immutable';
import classNames from 'classnames/bind';
import CTAButton from 'components/ui-elements/CTAButton';

import courseImage from 'static/images/course-test/course-1.jpeg';
import arrowRight from 'static/images/fontawesome-svg/solid/arrow-right.svg';
import aboutIcon from 'static/images/fontawesome-svg/regular/comment-dots.svg';
import metaIcon from 'static/images/fontawesome-svg/regular/check-circle.svg';
import staffIcon from 'static/images/fontawesome-svg/regular/user-circle.svg';

let cx = classNames.bind(styles);

const testCourseData = {
    "effort": null,
    "end": null,
    "enrollment_start": null,
    "enrollment_end": null,
    "id": "course-v1:something+ETHX-FC-02X-1",
    "invitation_only": false,
    "media": {
        "course_image": {
            "uri": courseImage
        },
        "course_video": {
            "uri": "null"
        },
        "image": {
            "raw": courseImage,
            "small": courseImage,
            "large": courseImage
        }
    },
    "name": "Quality of Life: Livability in Future Cities",
    "number": "ETHX-FC-02X-1",
    "org": "ETH Zurich",
    "short_description": 'Learn how urban planning, energy, climate, ecology and mobility impact the livability and quality of life of a “future city.”',
    "start": "2030-01-01T00:00:00Z",
    "start_display": "Oooh",
    "start_type": "empty",
    "pacing": "self-paced",
    "mobile_available": false,
    "course_id": "course-v1:something+ETHX-FC-02X-1",
    "overview": {
      "course_about": "<p>Cities are becoming the predominant living and working environment of humanity, and for this reason, livability or quality of life in the city has become crucial.</p><p>This urban planning course will focus on four areas that directly affect livability in a city: Urban energy, urban climate, urban ecology and urban mobility. The course begins by presenting measurable criteria for the assessment of livability, and how to positively influence the design of cities towards greater livability. We will focus on this basic topic of the human habitat in a holistic way, and introduce possibilities of participatory urban design by citizens, leading towards the development of a citizen design science.</p><p>You will be able to share your experiences with the other participants in the course and also with the experts from the teaching team. In completing this course, you will better understand how to make a city more livable by going beyond the physical appearance and by focusing on different properties and impact factors of the urban system.</p><p>Livability in Future Cities is the second course in a series of MOOCs under the title “Future Cities.” This series aims to bring the latest research on planning, managing and transforming cities to places where this knowledge has the highest benefit for its citizens. “Future Cities” provided an overview, and this course will focus on livability in existing and new cities.</p>",
      "course_instructors": [
        {
          "full_name": "Gerhard Schmitt",
          "description": "Professor of Information Architecture",
          "organisation": "ETH Zurich",
          "organisation_url": "www.google.com",
          "image": "https://www.edx.org/sites/default/files/person/image/gerhard-schmitt-110x110.jpg",
        },
        {
          "full_name": "Peter Edwards",
          "description": "Director of the Singapore-ETH Center",
          "organisation": "ETH Zurich",
          "organisation_url": "www.google.com",
          "image": "https://www.edx.org/sites/default/files/person/image/fc-02x-livable_cities-edwards-110x110.png",
        },
        {
          "full_name": "Jane Jacobs",
          "description": "Professor of Urban Studies",
          "organisation": "ETH Zurich",
          "organisation_url": "www.google.com",
          "image": "https://www.edx.org/sites/default/files/person/image/fc-02x-livable_cities-jacobs-110x110.png",
        },
        {
          "full_name": "Stephen Cairns",
          "description": "Scientific Directory of the ETH Future Cities Laboratory",
          "organisation": "ETH Zurich",
          "organisation_url": "www.google.com",
          "image": "https://www.edx.org/sites/default/files/person/image/fc-02x-livable_cities-cairns-110x110.png",
        },
        {
          "full_name": "Jan Carmeliet",
          "description": "Professor of Building Physics",
          "organisation": "ETH Zurich",
          "organisation_url": "www.google.com",
          "image": "https://www.edx.org/sites/default/files/person/image/fc-02x-livable_cities-carmeliet-110x110.png",
        }
      ]
    }
}

class CourseAboutView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      courseData: Immutable.Map({
        "media": {
          "course_image": "",
          "course_video": "",
          "image": {
            "raw": "",
            "small": "",
            "large": ""
          }
        },
        "overview": ""
      })
    };

    this.fetchCourseData = this.fetchCourseData.bind(this);
  }

  fetchCourseData = () => {
    this.setState({
      courseData: Immutable.Map(testCourseData)
    })
  }

  componentDidMount = () => {
    this.fetchCourseData()
  }

  render() {
    const staffRender = this.state.courseData.get('overview')['course_instructors'] ? (
      this.state.courseData.get('overview')['course_instructors'].map((staffMember, index) => {
        return(
          <li key={staffMember['full_name']} className={styles['staff-member']}>
            {staffMember['image'] && <img src={staffMember['image']} alt={staffMember['full_name']} />}
            <div className={styles['info']}>
              <span className={styles['name']}>{staffMember['full_name']}</span>
              <span className={styles['description']}>{staffMember['description']}</span>
              <span className={styles['organisation']}>{staffMember['organisation']}</span>
            </div>
          </li>
        )
      })
    ) : null;

    return (
      <div className={styles['course-about-container']}>
        <section className={cx(styles['course-about-header-container'], styles['container'])}>
          <div className={styles['course-about-header']} style={{backgroundImage: 'url(' + this.state.courseData.get('media')['image']['large'] + ')'}}>
            <div className={styles['header-content-wrapper']}>
              <div className={styles['header-content']}>
                <h1 className={styles['course-title']}>{this.state.courseData.get('name')}</h1>
                <p>
                  {this.state.courseData.get('short_description')}
                </p>
                {this.state.courseData.get('media')['course_video']['uri'] && (
                  <div className={styles['video-cta-wrapper']}>
                    <CTAButton
                      label = 'Play video'
                      function = {() => console.log('Playing video...')}
                      negative
                      importance = 'secondary'
                      size = 'small'
                    />
                  </div>
                )}
              </div>
              <NavLink to={this.props.userAuthenticated ? '/course/' : '/login'} className={styles['header-button']}>
                <span>{this.props.userAuthenticated ? 'Go to course content' : 'Log in to enroll in this course'}</span>
                <img src={arrowRight} alt="Log in to enroll in this course" role="presentation" />
              </NavLink>
            </div>
          </div>
        </section>
        <section className={cx(styles['course-about-content'], styles['container'])}>
          <div className={styles['course-about']}>
            <div className={styles['visual-section-heading']}>
              <img src={aboutIcon} alt="About this course" role="presentation" />
              <h2>About this course</h2>
            </div>
            <div dangerouslySetInnerHTML={{__html: this.state.courseData.get('overview')['course_about']}} />
          </div>
          <div className={styles['course-meta']}>
            <div className={styles['visual-section-heading']}>
              <img src={metaIcon} alt="Course basic information" role="presentation" />
              <h2>Course info</h2>
            </div>
            <ul className={styles['course-meta-list']}>
              <li className={styles['course-meta-item']}>
                <span className={styles['label']}>Starts:</span>
                <span className={styles['value']}>{this.state.courseData.get('start_display') ? this.state.courseData.get('start_display') : this.state.courseData.get('start')}</span>
              </li>
              {this.state.courseData.get('end') && (
                <li className={styles['course-meta-item']}>
                  <span className={styles['label']}>Ends:</span>
                  <span className={styles['value']}>{this.state.courseData.get('end_display') ? this.state.courseData.get('end_display') : this.state.courseData.get('end')}</span>
                </li>
              )}
              <li className={styles['course-meta-item']}>
                <span className={styles['label']}>Pacing:</span>
                <span className={styles['value']}>{this.state.courseData.get('pacing')}</span>
              </li>
              {this.state.courseData.get('effort') && (
                <li className={styles['course-meta-item']}>
                  <span className={styles['label']}>Effort:</span>
                  <span className={styles['value']}>{this.state.courseData.get('effort')}</span>
                </li>
              )}
              <li className={styles['course-meta-item']}>
                <span className={styles['label']}>Course code:</span>
                <span className={styles['value']}>{this.state.courseData.get('number')}</span>
              </li>
            </ul>
          </div>
        </section>
        <section className={styles['course-staff']}>
          <div className={cx(styles['container'], styles['course-staff-container'])}>
            <div className={styles['visual-section-heading']}>
              <img src={staffIcon} alt="Course staff" role="presentation" />
              <h2>Course staff</h2>
            </div>
            <ul className={styles['staff-list-wrapper']}>
              {staffRender}
            </ul>
          </div>
        </section>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  userAuthenticated: state.user.get('isAuthenticated')
})

export default connect(
  mapStateToProps
)(CourseAboutView)
