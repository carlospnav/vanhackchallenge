import styled from 'styled-components';

export const List = styled('ul')`
  display: flex;
  flex-wrap: wrap;

  li{
    list-style-type: none;
  }
`;

export const Container = styled('section')`
  ${props => `justify-content: ${props.center ? 'center' : 'flex-start'}`};
  width: 100%;
  display: flex;
`;

export const Form = styled('form')`
  display: flex;
  align-items: center;
`;

export const Input = styled('input')`
  margin: 0 20px;
`;

export const Label = styled('label')`
  display: inline;
`;