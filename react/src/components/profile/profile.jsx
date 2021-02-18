import React from 'react'
import PropTypes from 'prop-types'

const Profile = ({ user }) => {
  return (
    <React.Fragment>
      <h2>Profile</h2>
      <p>User Name: {user.name}</p>
    </React.Fragment>
  )
}

Profile.proptypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
}

export default Profile
