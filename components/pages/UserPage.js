import React, { Fragment, useCallback } from "react";
import { connect } from "react-redux";
import PropTypes from 'prop-types';

function UserPage({userInfo}) {

  return (
    <Fragment>
      {
        userInfo ? 
        <ul>
          <li>ID: {userInfo.id}</li>
          <li>Name: {userInfo.name}</li>
          <li>Gender: {userInfo.gender}</li>
          <li>
              Status: <span className={userInfo.status}>{userInfo.status}</span>
          </li>
          <li>Email: {userInfo.email}</li>
        </ul>: ''
      }
    </Fragment>
  );
}

UserPage.propTypes = {
  userInfo: PropTypes.object
}

const mapStateToProps = (state) => {
  return {
    userInfo: state.userReducer.user
  }
}

export default connect(mapStateToProps)(UserPage);