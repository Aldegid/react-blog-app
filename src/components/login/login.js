import React from 'react';
import { connect } from 'react-redux';
import { performLogin } from '../../redux/login';

import './login.css';

const Login = ({ loginButtonValue, performLog }) => {
  return (
    <div className='login'>
      <h2>Please log in to be able to delete posts.</h2>
      <button type='button' className='login__button' onClick={performLog}>
        {loginButtonValue}
      </button>
    </div>
  );
};

const mapStateToProps = ({ login: { loginButtonValue } }) => {
  return {
    loginButtonValue
  };
};

const mapDispatchToProps = dispatch => {
  return {
    performLog: () => dispatch(performLogin())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
