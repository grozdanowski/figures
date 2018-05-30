import React, { Component } from 'react';
import styles from './_IndexView.scss';
import classNames from 'classnames/bind';
import CTAButton from 'components/ui-elements/CTAButton';
import ResponsiveImgLazyLoad from 'components/ui-elements/ResponsiveImgLazyLoad';
import CardCarousel from 'components/ui-elements/CardCarousel';
import SearchBox from 'components/ui-elements/SearchBox';

import heroBackground from 'static/images/defaults/default-hero-bg.jpg';
import cataloguePromoGraphic from 'static/images/defaults/course-catalogue-promo-graphic.png';
import instructorsPromoPhoto from 'static/images/defaults/instructors-default.png';

import courseImage1 from 'static/images/course-test/course-1.jpeg';
import courseImage2 from 'static/images/course-test/course-2.jpeg';
import courseImage3 from 'static/images/course-test/course-3.jpeg';

let cx = classNames.bind(styles);

const cardData = [
  {
    courseTitle: 'Quality of Life: Livability in Future Cities',
    courseCode: 'ethx-fc-02x-1',
    startDate: 'Jan 3rd, 2019',
    courseImage: courseImage1
  },
  {
    courseTitle: 'Planning out a perfect workspace for developers',
    courseCode: 'A212',
    startDate: 'Already started',
    courseImage: courseImage2
  },
  {
    courseTitle: 'Developing in JAVA',
    courseCode: 'A241',
    startDate: 'Self-paced',
    courseImage: courseImage3
  },
  {
    courseTitle: 'Quality of Life: Livability in Future Cities',
    courseCode: 'ethx-fc-02x-1',
    startDate: 'Jan 3rd, 2019',
    courseImage: courseImage1
  },
  {
    courseTitle: 'Planning out a perfect workspace for developers',
    courseCode: 'A212',
    startDate: 'Already started',
    courseImage: courseImage2
  },
  {
    courseTitle: 'Developing in JAVA',
    courseCode: 'A241',
    startDate: 'Self-paced',
    courseImage: courseImage3
  }
]

const searchTags = ['Open EdX', 'LMS', 'Open source', 'Python development']

class IndexView extends Component {

  render() {

    return (
      <div className={styles['index-container']}>
        <section className={cx(styles['index-hero'], styles['container'])} style={{backgroundImage: 'url(' + heroBackground + ')'}}>
          <div className={styles['hero-content']}>
            <h1>Welcome to our LMS index page!</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec varius odio eget lacus elementum, vel scelerisque tellus mollis. Quisque egestas mi ullamcorper quam semper euismod sed in est. Vivamus mollis massa sit amet lacinia laoreet. Fusce iaculis dolor neque, quis porttitor purus congue vel.</p>
            <CTAButton
              label = 'Sign up for free!'
              target = '/register'
              size = 'large'
            />
          </div>
        </section>
        <section className={cx(styles['index-courses'], styles['container'])}>
          <div className={styles['course-search-box']}>
            <h2>Featured courses</h2>
            <p>Scroll through some of the featured courses or use the search field to search for topics that may interest you.</p>
            <SearchBox
              inputPlaceholder = 'What sparks your interest?'
              tags = {searchTags}
            />
          </div>
          <div className={styles['courses-cards-container']}>
            <CardCarousel
              cardData = {cardData}
            />
          </div>
        </section>
        <section className={cx(styles['index-catalogue-promo'], styles['container'])}>
          <img src={cataloguePromoGraphic} alt='View our entire course catalogue' role='presentation' />
          <h2>View our entire course catalogue</h2>
          <p>Donec consequat ex gravida dignissim convallis. Donec sit amet egestas lectus, ac lacinia tellus. In a enim ornare, sollicitudin ex vel, lacinia arcu. Proin ante nibh, aliquet eu ipsum suscipit, aliquam accumsan felis. Cras iaculis ac metus sit amet rutrum. Cras dignissim varius erat, sit amet posuere tortor efficitur in. Fusce bibendum ultrices magna, quis imperdiet purus ullamcorper vitae.</p>
          <CTAButton
            label = 'Go to the course catalogue'
            target = '/courses'
          />
        </section>
        <section className={styles['index-instructors']}>
          <div className={cx(styles['container'], styles['index-instructors__inner'])}>
            <div className={styles['index-instructors__image-container']}>
              <ResponsiveImgLazyLoad
                src={instructorsPromoPhoto}
                alt='Our instructors are awesome!'
              />
            </div>
            <div className={styles['index-instructors__content']}>
              <h2>A dream team of instructors</h2>
              <p>Nullam volutpat felis ante. Proin malesuada massa vitae nunc elementum scelerisque. Morbi pellentesque sem leo. Aliquam pretium erat neque, non faucibus tellus laoreet in. Vivamus ac turpis cursus, vulputate dui fringilla, sodales nisi. Nullam eu fringilla diam. Etiam sodales a diam nec mollis.</p>
              <p>Phasellus ultrices ante ac blandit semper. Duis faucibus lectus quam, vel dictum tellus sodales eget. Donec nec dictum urna. Nunc blandit ornare varius. Integer imperdiet mauris eget dui porta rhoncus. Vestibulum aliquet, erat ac dapibus dictum, turpis nisl pharetra augue, ut auctor magna est nec tortor.</p>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

IndexView.defaultProps = {

}

export default IndexView
