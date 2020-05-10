import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Logout } from './'

const HeaderDiv = styled.div`
    width: 100%;
    height: 40px;
    background-color: #408cffb5;
`;

const StyledLogout = styled(props => <Logout {...props} />)`
    float: right;
`;

let Header = ({ loggedIn }) => (
  <HeaderDiv>
    {loggedIn ? <StyledLogout /> : null}
  </HeaderDiv>
);

const mapStateToProps = (state) => ({
  loggedIn: state.loggedIn,
})

Header = connect(mapStateToProps, null)(Header);
export default Header;