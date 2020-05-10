import React from 'react';
import styled from 'styled-components';
import Heading from '../../atoms/Heading/Heading';
import Button from '../../atoms/Button/Button';

const Wrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 50px 75px;
  border-radius: 70px;
  background-color: white;
  box-shadow: 0 8.3px 3.6px -15px rgba(0, 0, 0, 0.024), 0 18.2px 10px -15px rgba(0, 0, 0, 0.035),
    0 35px 24.1px -15px rgba(0, 0, 0, 0.046), 0 100px 80px -15px rgba(0, 0, 0, 0.07);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FlexWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledButton = styled(Button)`
  margin: 0 15px 0 15px;
`;

const Verification = () => (
  <>
    <Wrapper>
      <Heading>Are you sure?</Heading>
      <FlexWrapper>
        <StyledButton>Delete</StyledButton>
        <StyledButton negative>Cancel</StyledButton>
      </FlexWrapper>
    </Wrapper>
  </>
);

export default Verification;
