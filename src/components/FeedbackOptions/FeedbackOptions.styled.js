import styled from 'styled-components';

export const Button = styled.button`
  border-radius: 5px;
  border: 1px solid ${props => props.theme.colors.black};
  padding: 4px;
  font-size: 16px;
  text-transform: uppercase;
  color: ${props => props.theme.colors.black};
  :not(:last-child) {
    margin-right: 10px;
  }
  transition: ${props => props.theme.transition.cubicBezier};
  :hover {
    border: 1px solid ${p => p.theme.colors.white};
    background-color: ${p => p.theme.colors.lightBlue};
    color: ${props => props.theme.colors.white};
  }
  :active {
    border: 1px solid ${p => p.theme.colors.lightBlue};
    background-color: ${p => p.theme.colors.white};
    color: ${props => props.theme.colors.lightBlue};
  }
`;
