import React from 'react';
import { connect } from 'react-redux';
import { doLogout } from '../actions';
import { StyledButton } from './';

let Logout = ({ className, doLogout }) => (
  <StyledButton className={className} onClick={doLogout}>Logout</StyledButton>
);

const mapDispatchToProps = {
  doLogout: doLogout,
};

Logout = connect(null, mapDispatchToProps)(Logout);

export default Logout;