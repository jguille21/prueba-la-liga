import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
    border: 1px solid black;
    border-radius: 4px;
    background-color: white;
    margin: 10px;
    cursor: pointer;
`;

let StyledButton = ({ className, children, onClick }) => (
  <Button className={className} onClick={onClick}>{children}</Button>
);

export default StyledButton;