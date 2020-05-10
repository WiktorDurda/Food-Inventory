import styled, { css } from 'styled-components';

const Button = styled.button`
  padding: 0.55em 2.5em;
  border: none;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.green300};
  font-size: ${({ theme }) => theme.fontSize.m};
  color: white;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover{
      background-color: ${({ theme }) => theme.greenHover};
  }

  ${({ negative }) =>
    negative &&
    css`
      background-color: ${({ theme }) => theme.red};
      transition: background-color 0.2s ease;

      &:hover {
        background-color: ${({ theme }) => theme.redHover};
      }
    `}
`;

export default Button;
