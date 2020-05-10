import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Heading from '../components/atoms/Heading/Heading';
import ListItem from '../components/molecules/ListItem/ListItem';
import ButtonIcon from '../components/atoms/ButtonIcon/ButtonIcon';
import AddItemIcon from '../assets/icons/AddItemIcon.svg';

const StyledWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const StyledListWrapper = styled.div`
  flex: 1 0 0;
  display: grid;
  grid-template-columns: 1fr;
  align-content: start;
  grid-gap: 20px;
  padding-right: 15px;
  overflow-x: hidden;
  overflow-y: auto;

  &::-webkit-scrollbar-track {
    border-radius: 5px;
    background-color: transparent;
  }

  &::-webkit-scrollbar {
    width: 10px;
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background-color: ${({ theme }) => theme.grey200};
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: ${({ theme }) => theme.grey100};
  }
`;

const StyledButtonIcon = styled(ButtonIcon)`
  margin: 0 auto;
  outline: none;
`;

const List = ({ stateShop, openModalFn }) => (
  <>
    <StyledWrapper>
      <Heading smallCaps>shop list</Heading>
      <StyledListWrapper>
        {stateShop.shopList.map((item) => (
          <ListItem
            name={item.name}
            productCategory={item.category}
            id={item.id}
            key={item.id}
          />
        ))}
        <StyledButtonIcon icon={AddItemIcon} onClick={() => openModalFn('SHOP_LIST')} />
      </StyledListWrapper>
    </StyledWrapper>
  </>
);

const mapStateShopToProps = (stateShop) => {
  return { stateShop };
};

List.propTypes = {
  openModalFn: PropTypes.func.isRequired,
};

export default connect(mapStateShopToProps)(List);
