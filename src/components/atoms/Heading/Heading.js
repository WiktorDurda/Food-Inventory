import styled, { css } from 'styled-components';

const Heading = styled.h1`
  margin: 20px 0 100px 0;
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: 500;
  letter-spacing: 0.075em;
  &::first-letter{
    text-transform: uppercase;
  }
  
  ${({ smallCaps }) =>
    smallCaps &&
    css`
      font-variant: small-caps;
    `}
`;

export default Heading;
