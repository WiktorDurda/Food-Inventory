import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { removeShopProduct as removeShopProductAction } from '../../../actions/index';
import ButtonIcon from '../../atoms/ButtonIcon/ButtonIcon';
import Delete from '../../../assets/icons/Delete.svg';

const Wrapper = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  height: 70px;
  padding: 0 30px 0 30px;
  background-color: transparent;
  &::after {
    position: absolute;
    bottom: 0;
    left: 0;
    display: block;
    content: '';
    width: 100%;
    height: 3px;
    border-radius: 6px;
    background-color: ${({ theme }) => theme.green300};
  }
`;

const FlexWrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;

  ${({ flexStart }) =>
    flexStart &&
    css`
      justify-content: flex-start;
    `}

  ${({ flexEnd }) =>
    flexEnd &&
    css`
      justify-content: flex-end;
    `}

  ${({ flexCenter }) =>
    flexCenter &&
    css`
      justify-content: center;
    `}

  ${({ limited }) =>
    limited &&
    css`
      max-width: 350px;
    `}

  span {
    font-weight: 500;
    white-space: nowrap;
    margin-right: 10px;
  }

  .margin{
      margin: 0 10px;
    }
`;

const StyledButtonIcon = styled(ButtonIcon)`
  margin-left: 15px;
  outline: none;
`;

const ListItem = ({ productCategory, id, name, removeShopProduct }) => (
  <Wrapper>
    <FlexWrapper flexStart>
      <span>{name}</span>
    </FlexWrapper>
    <FlexWrapper flexEnd>
      <StyledButtonIcon
        icon={Delete}
        width="45px"
        height="45px"
        onClick={() => removeShopProduct(productCategory, id)}
      />
    </FlexWrapper>
  </Wrapper>
);

const mapDispatchToProps = (dispatch) => ({
  removeShopProduct: (productCategory, id) => dispatch(removeShopProductAction(productCategory, id)),
});

ListItem.propTypes = {
  id: PropTypes.string.isRequired,
  productCategory: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  removeShopProduct: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(ListItem);
