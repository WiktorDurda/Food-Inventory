import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  box-sizing: content-box;
  width: 100px;
  height: 8px;
  border: 1px solid ${({ theme }) => theme.green300};
  border-radius: 50px;
  background-color: transparent;
`;

const Level = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: ${({ level }) => level};
  height: 8px;
  border-radius: 50px;
  background-color: ${({ theme, color }) => theme[color]};
`;

const calcLevel = (amount, minAmount) => {
  if (minAmount <= 0 || amount / minAmount - 1 <= 0) {
    return <Level color="red" level="2%" />;
  }
  const level = (amount / minAmount - 1) * 100;
  if (level <= 33) {
    return <Level color="red" level={`${level}%`} />;
  }
  if (level > 33 && level <= 66) {
    return <Level color="orange" level={`${level}%`} />;
  }
  if (level > 66 && level <= 100) {
    return <Level color="green300" level={`${level}%`} />;
  }
  return <Level color="green300" level="100%" />;
};

const LevelIndicator = ({ amount, minAmount }) => <Wrapper>{calcLevel(amount, minAmount)}</Wrapper>;

LevelIndicator.propTypes = {
  amount: PropTypes.number.isRequired,
  minAmount: PropTypes.number.isRequired,
};

export default LevelIndicator;
