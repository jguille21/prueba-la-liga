import React from 'react';
import { connect } from 'react-redux';
import { UsersListElement } from './';

let UsersList = ({ usersList }) => (
  usersList
    ?
    <div>
      <h3>Users list</h3>
      <table>
        <tbody>
          {Array.from(usersList, (data, index) => {
            return <UsersListElement key={index} data={data} />
          })}
        </tbody>
      </table>
    </div>
    : null
);

const mapStateToProps = (state) => ({
  usersList: state.users,
})

UsersList = connect(mapStateToProps, null)(UsersList)
export default UsersList;