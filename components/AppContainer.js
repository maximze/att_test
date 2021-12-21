import React, { useCallback } from 'react';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import '../app/index.css';
import TopBar from '../components/styled/topBar';
import Button from '../components/styled/button';
import {getUsers, getUser} from '../services/services';
import * as actions from '../actions/actions';
import UsersListPage from './pages/UsersListPage';
import UserPage from './pages/UserPage';
import Loading from './Loading';





function AppContainer({ getUsers, user, onBackClick }) {
  const onButtonClick = useCallback(() => {
    getUsers();
  });
  return (
    <React.Fragment>
      <Loading></Loading>
      <div>
        <Router>
          <TopBar>
            
            {
              user ?
               <Link className='backButtton' to="/">Back</Link> : 
               <Button onClick={onButtonClick}>Get Users</Button>
            }
          </TopBar>
          <div className="container">
            <Switch>
              <Route exact path="/" component={UsersListPage} />
              <Route path="/user" component={UserPage} />
            </Switch>
          </div>
        </Router>
      </div>
    </React.Fragment>
  )
}

AppContainer.propTypes = {
  getUsers: PropTypes.func,
  user: PropTypes.object
}

const mapStateToProps = (state) => {
  return {
    user: state.userReducer.user
  };
}

const mapStateToDispatch = (dispatch) => {
  return {
    getUsers: () => {
      dispatch(actions.setLoading(true));
      getUsers()
      .then(data => {
        dispatch(actions.setUsers(data.data));
        dispatch(actions.setLoading(false));
      });
    },
    onBackClick: () => {
      dispatch(actions.setUser(null))
      history.replaceState('/');
    }
  }
}

export default connect(mapStateToProps, mapStateToDispatch)(AppContainer);