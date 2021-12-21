import React, { Fragment, useCallback } from "react";
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import { getUserById } from '../../services/services';
import { setUser, setLoading } from '../../actions/actions';

function UsersListPage({history, usersList, getUserInfo}) {
  const femaleUsers = usersList.filter(item => item.gender === 'female');
  const onMoreInfoClick = useCallback((e) => {
    const userId = e.target.dataset.id;
    getUserInfo(userId, history);
  });
  return (
    <Fragment>
      <ul>
        {
          femaleUsers.map(user => {
            return <li key={user.id}>
              {user.name}: <span className={user.status}>{user.status}</span>
              <a className="link" data-id={user.id} onClick={onMoreInfoClick}>Get more information</a>
              </li>
          })
        }
      </ul>
    </Fragment>
  );
}

UsersListPage.propTypes = {
  usersList: PropTypes.arrayOf(PropTypes.object)
}

const mapStateToProps = (state) => {
  return {
    usersList: state.userReducer.usersList
  }
}

const mapStateToDispatch = (dispatch) => {
  return {
    getUserInfo: (id, history) => {
      dispatch(setLoading(true));
      getUserById(id).then(data => {
        if(data){
          dispatch(setUser(data.data));
          history.push('/user');
          dispatch(setLoading(false));
        }
      });
      
    }
  }
}

export default connect(mapStateToProps, mapStateToDispatch)(UsersListPage);