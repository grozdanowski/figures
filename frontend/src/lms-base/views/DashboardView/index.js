import React, { Component } from 'react';
import styles from './_DashboardView.scss';
import { connect } from 'react-redux';
import classNames from 'classnames/bind';
import UserHello from 'components/dashboard/UserHello';
import CoursesListItem from 'components/dashboard/CoursesListItem';

import courseImage from 'static/images/course-test/course-1.jpeg';

let cx = classNames.bind(styles);

const testCourseData = [
  {
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
  },
  {
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
  },
  {
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
]

class DashboardView extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    const coursesRender = testCourseData.map((course, index) => {
      return(
        <CoursesListItem courseData = {course} key = {course['number']} />
      )
    })

    return (
      <div className={styles['dashboard-container']}>
        <section className={cx(styles['dashboard-header-container'], styles['container'])}>
          <UserHello />
        </section>
        <section className={styles['dashboard-courses']}>
          <div className={cx(styles['dashboard-courses-container'], styles['container'])}>
            {coursesRender}
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
)(DashboardView)
