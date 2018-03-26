import React  from 'react';
import styled from 'styled-components';

const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: ${props => props.color};
  background: papayawhip;
  border: none;
  border-radius: 3px;
`;

React.render(
  <div>
    <Input placeholder="@top" type="text" />
    <Input value="@kek" type="text" />
  </div>
);