import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const StyledWrapper = styled.div`
  width: ${({ width }) => width};
  position: relative;
  margin: ${({ margin }) => margin};

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
  z-index: -1;
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: 500;
  transition: 0.2s ease-out all;
  cursor: pointer;

  ${({ optionSelected }) =>
    optionSelected &&
    css`
      top: -22px;
      font-size: ${({ theme }) => theme.fontSize.xs};
    `}
`;

const StyledSelect = styled.select`
  width: 100%;
  border: none;
  background-color: transparent;
  font-size: ${({ theme }) => theme.fontSize.m};
  letter-spacing: 0.075em;
  cursor: pointer;

  &:focus {
    outline: none;
  }

  &:focus + ${StyledLabel} {
    top: -22px;
    font-size: ${({ theme }) => theme.fontSize.xs};
  }
`;

class Select extends Component {
  state = { optionSelected: false };

  handleOptionSelected = (event) => {
    if (event.target.value !== '') {
      this.setState({ optionSelected: true });
    } else {
      this.setState({ optionSelected: false });
    }
  };

  render() {
    const { children, selectName, width, margin, name, onChange, onBlur, value } = this.props;
    const { optionSelected } = this.state;

    return (
      <>
        <StyledWrapper width={width} margin={margin}>
          <StyledSelect
            required
            name={name}
            id={selectName}
            onChange={event => {this.handleOptionSelected(event); onChange(event);}}
            onBlur={onBlur}
            value={value}

          >
            <option value=""> </option>
            {children}
          </StyledSelect>
          {optionSelected ? (
            <StyledLabel htmlFor={name} optionSelected>
              {selectName}
            </StyledLabel>
          ) : (
            <StyledLabel htmlFor={name}>{selectName}</StyledLabel>
          )}
        </StyledWrapper>
      </>
    );
  }
}

Select.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object).isRequired,
  name: PropTypes.string.isRequired,
  selectName: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  width: PropTypes.string,
  margin: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
};

Select.defaultProps = {
  width: '100%',
  margin: '0 0 70px 0',
};

export default Select;
