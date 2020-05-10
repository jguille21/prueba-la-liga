import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Link, useParams } from "react-router-dom";
import { StyledButton } from './';
import styled from 'styled-components';
import { putUpdate, putDelete } from '../actions';

const FlexDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
`;

const StyledInput = styled.input`
    margin: 4px 10px;
`;

class UserListElement extends React.Component {
  constructor(props) {
    super(props);
    const { id, first_name, last_name, email } = this.props.data;
    this.state = { id, first_name, last_name, email };

    this.handleChange = this.handleChange.bind(this);
    this.sendUpdate = this.sendUpdate.bind(this);
    this.sendDelete = this.sendDelete.bind(this);
  }

  handleChange(event) {
    this.setState({ 
      [event.currentTarget.id]: event.target.value
    });
  }

  sendUpdate() {
    const { id, first_name, last_name, email } = this.state;
    this.props.putUpdate({ id, first_name, last_name, email });
  }

  sendDelete() {
    const { id } = this.state;
    this.props.putDelete({ id });
  }

  render() {
    const { first_name, last_name, email } = this.state;
    return (
      <FlexDiv>
        <h3>User detail</h3>
        <StyledInput type="text" id="first_name" defaultValue={first_name} placeholder="First name" onChange={this.handleChange}/>
        <StyledInput type="text" id="last_name" defaultValue={last_name} placeholder="Last name" onChange={this.handleChange}/>
        <StyledInput type="text" id="email" defaultValue={email} placeholder="E-Mail" onChange={this.handleChange}/>
        <div>
          <StyledButton onClick={this.sendUpdate}>Update</StyledButton>
          <StyledButton onClick={this.sendDelete}>Delete</StyledButton>
          <Link to="/userlist"><StyledButton>Go back</StyledButton></Link>
        </div>
      </FlexDiv>
    )
  }
}

let UserListElementContainer = ({ loggedIn, usersList, putUpdate, putDelete }) => {
  const { id } = useParams();
  if (!usersList) return <Redirect to="/" />;
  const userData = usersList.filter(obj => { return obj.id === parseInt(id) });

  return loggedIn ? (
    <UserListElement data={userData[0]} putUpdate={putUpdate} putDelete={putDelete} />
  ) : <Redirect to="/" />
}

const mapStateToProps = (state) => ({
  loggedIn: state.loggedIn,
  usersList: state.users
})

const mapDispatchToProps = {
  putUpdate: putUpdate,
  putDelete: putDelete
};

UserListElementContainer = connect(mapStateToProps, mapDispatchToProps)(UserListElementContainer);
export default UserListElementContainer;