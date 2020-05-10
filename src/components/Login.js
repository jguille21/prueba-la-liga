import React from 'react';
import { Redirect } from "react-router-dom";
import { connect } from 'react-redux';
import styled from 'styled-components';
import { getLogin, persistLogin } from '../actions';
import { StyledButton } from './';

const VerticalCenteredFlexDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledInput = styled.input`
  margin-bottom:5px;
`;

class LoginTemplate extends React.Component {
  render() {
    return (
      <VerticalCenteredFlexDiv>
        <p>Mail example: george.bluth@reqres.in</p>
        <StyledInput type="text" id="mail" placeholder="User name"></StyledInput>
        <StyledInput type="password" id="pass" placeholder="Password"></StyledInput>
        <StyledButton onClick={this.sendLogin}>Login</StyledButton>
      </VerticalCenteredFlexDiv>
    )
  }

  sendLogin = () => {
    const mail = document.querySelector('#mail').value;
    const pass = document.querySelector('#pass').value;
    this.props.getLogin({ mail, pass });
  }

  componentDidMount() {
    const userToken = sessionStorage.getItem('userToken');
    if (userToken) this.props.persistLogin(userToken);
  }
}

let Login = ({ loggedIn, getLogin, persistLogin }) => (
  loggedIn ? <Redirect to="/userlist" /> : <LoginTemplate getLogin={getLogin} persistLogin={persistLogin} />
);

const mapDispatchToProps = {
  getLogin: getLogin,
  persistLogin: persistLogin
};

const mapStateToProps = (state) => ({
  loggedIn: state.loggedIn,
})

Login = connect(mapStateToProps, mapDispatchToProps)(Login);
export default Login;