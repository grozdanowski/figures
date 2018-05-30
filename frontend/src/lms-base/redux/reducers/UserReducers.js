import Immutable from 'immutable';

const initialState = Immutable.Map({
  isAuthenticated: true,
  biography: '',
  country: 'US',
  date_joined: '',
  email: 'joanne.west91@example.com',
  gender: '',
  goals: '',
  is_active: '',
  language: '',
  language_proficiencies: '',
  level_of_education: '',
  mailing_address: '',
  name: 'Joanne West',
  profile_image: {
    "image_url_full": "https://randomuser.me/api/portraits/women/24.jpg",
    "image_url_large": "https://randomuser.me/api/portraits/women/24.jpg",
    "image_url_medium": "https://randomuser.me/api/portraits/women/24.jpg",
    "image_url_small": "https://randomuser.me/api/portraits/women/24.jpg",
    "has_image": true
  },
  requires_parental_consent: '',
  social_links: '',
  username: 'jwest',
  year_of_birth: '1974',
  account_privacy: '',
  accomplishments_shared: '',
})

const user = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default user
