import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import Heading from '../atoms/Heading/Heading';
import ButtonIcon from '../atoms/ButtonIcon/ButtonIcon';
import categories  from '../../data/categories';
// import BreadIcon from '../../assets/icons/BreadIcon.svg';
// import Cheeseicon from '../../assets/icons/Cheeseicon.svg';
// import Meaticon from '../../assets/icons/Meaticon.svg';
// import Cansicon from '../../assets/icons/Cansicon.svg';
// import Drinkicon from '../../assets/icons/Drinkicon.svg';
// import Fishicon from '../../assets/icons/Fishicon.svg';
// import Fruitsicon from '../../assets/icons/Fruitsicon.svg';
// import Salticon from '../../assets/icons/Salticon.svg';
// import Sweetsicon from '../../assets/icons/Sweetsicon.svg';
// import Vegetablesicon from '../../assets/icons/Vegetablesicon.svg';

const StyledWrapper = styled.div`
  width: 160px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const StyledHeading = styled(Heading)`
  color: white;
  margin: 0;
`;

const StyledNavLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;

  color: ${({ theme }) => theme.black};
  text-decoration: none;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

const Sidebar = () => (
  <StyledWrapper>
    <ButtonIcon exact as={StyledNavLink} to="/">
      <StyledHeading>ALL</StyledHeading>
    </ButtonIcon>
    {categories.map(category => {
      const path = `/${category.name}`;

      return(
        <ButtonIcon as={NavLink} to={path} icon={category.icon} activeclass="active" key={category.name} />
      )
    })}
  </StyledWrapper>
);

export default Sidebar;
