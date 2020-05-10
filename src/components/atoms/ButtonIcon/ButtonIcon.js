import styled from 'styled-components';
import PropTypes from 'prop-types';

const ButtonIcon = styled.button`
  display: block;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border: none;
  border-radius: 10px;
  background-image: url(${({ iconactivator, icon, iconActive }) => (iconactivator.toString()=== 'true' ? iconActive : icon)});
  background-repeat: no-repeat;
  background-position: center;
  background-color: transparent;

  cursor: pointer;

  &.active {
    background-color: ${({ theme }) => theme.green200};
  }
`;

ButtonIcon.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  iconactivator: PropTypes.string,
};

ButtonIcon.defaultProps = {
  width: '160px',
  height: '72px',
  iconactivator: 'false',
};

export default ButtonIcon;
