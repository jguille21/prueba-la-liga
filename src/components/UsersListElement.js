import React from 'react';
import { StyledButton } from './';
import { Link } from "react-router-dom";

let UsersListElement = (props) => {
  const { id, first_name, last_name } = props.data;
  const userRoute = `/userlist/${id}`;
  return (
    <tr>
      <td>{first_name} {last_name}</td>
      <td><Link to={userRoute}><StyledButton>View detail</StyledButton></Link></td>
    </tr>
  )
}

export default UsersListElement;