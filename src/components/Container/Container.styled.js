import styled from 'styled-components';

export const Container = styled.div`
  margin: 50px auto;
  padding: 50px;
  width: 350px;
  border-radius: 5px;
  background-color: ${props => props.theme.colors.white};
  box-shadow: ${props => props.theme.shadows.shadow};
`;

