import React from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import PopupBg from './styled/popupBg';

function Loading({loading}) {

  const inner = loading ? <>
    <PopupBg></PopupBg> 
    <div className="lds-facebook"><div></div><div></div><div></div></div>
  </>: ''
  return ReactDOM.createPortal(inner, document.body);
}

Loading.propTypes = {
  loading: PropTypes.bool
}

const mapStateToProps = (state) => {
  return {
    loading: state.userReducer.loading
  }
}

export default connect(mapStateToProps)(Loading);