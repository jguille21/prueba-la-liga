import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from "react-router-dom";
import { getUsers } from '../actions';
import { UsersList } from './';

let UsersListContainer = ({ getUsers, loggedIn }) => (
  loggedIn ? <UsersList usersList={getUsers()}/> : <Redirect to="/" />
);

const mapStateToProps = (state) => ({
  loggedIn: state.loggedIn,
})

const mapDispatchToProps = {
  getUsers: getUsers,
};

UsersListContainer = connect(mapStateToProps, mapDispatchToProps)(UsersListContainer);
export default UsersListContainer;