import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  width: ${({ width }) => width};
  position: relative;
  margin-bottom: 70px;

  &::after {
    content: '';
    width: 100%;
    position: absolute;
    bottom: -5px;
    left: 0;
    right: 0;
    height: 4px;
    background-color: ${({ theme }) => theme.green300};
    border-radius: 2px;
  }
`;

const StyledLabel = styled.label`
  color: ${({ theme }) => theme.black};
  position: absolute;
  top: 3px;
  left: 0;
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: 500;
  transition: 0.2s ease-out all;
  cursor: text;
`;

const StyledInput = styled.input`
  width: 100%;
  border: none;
  background-color: transparent;
  font-size: ${({ theme }) => theme.fontSize.m};
  letter-spacing: 0.075em;

  &:focus {
    outline: none;
  }

  &:focus + ${StyledLabel} {
    top: -22px;
    font-size: ${({ theme }) => theme.fontSize.xs};
  }

  &:not(:placeholder-shown) + ${StyledLabel} {
    top: -22px;
    font-size: ${({ theme }) => theme.fontSize.xs};
  }
`;

const Input = ({ inputName, type, width, name, onChange, onBlur, value }) => {
  // const [field] = useField(props);
  return (
    <>
      <StyledWrapper width={width}>
        <StyledInput
          autoComplete="off"
          id={inputName}
          placeholder=" "
          type={type}
          name={name}
          onChange={onChange}
          onBlur={onBlur}
          value={value}
        />
        <StyledLabel htmlFor={inputName}>{inputName}</StyledLabel>
      </StyledWrapper>
    </>
  );
};

Input.propTypes = {
  inputName: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  width: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

Input.defaultProps = {
  type: 'text',
  width: '100%',
};

export default Input;
