import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { connect } from 'react-redux';
import LevelIndicator from '../../atoms/LevelIndicator/LevelIndicator';
import ButtonIcon from '../../atoms/ButtonIcon/ButtonIcon';
import Plusicon from '../../../assets/icons/Plusicon.svg';
import Minusicon from '../../../assets/icons/Minusicon.svg';
import AddShoppingCart from '../../../assets/icons/AddShoppingCart.svg';
import Delete from '../../../assets/icons/Delete.svg';
import AddedShoppingCart from '../../../assets/icons/AddedShoppingCart.svg';
import {
  removeProduct as removeProductAction,
  increaseAmount as increaseAmountAction,
  decreaseAmount as decreaseAmountAction,
  toggleShopList as toggleShopListAction,
} from '../../../actions/index';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  height: 70px;
  padding: 0 30px 0 30px;
  background-color: white;
  border-radius: 20px;
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

const StyledButton = styled(ButtonIcon)`
  margin: 0 3px 0 0;
  background-color: ${({ theme }) => theme.green300};
  border-radius: 30px 0 0 30px;
  outline: none;

  ${({ right }) =>
    right &&
    css`
      margin: 0 0 0 3px;
      border-radius: 0 30px 30px 0;
    `}
`;

const StyledButtonIcon = styled(ButtonIcon)`
  margin-left: 15px;
  outline: none;
`;

const Product = ({
  name,
  amount,
  unit,
  minAmount,
  category,
  id,
  shopList,
  removeProduct,
  increaseAmount,
  decreaseAmount,
  toggleShopList,
}) => (
  <>
    <Wrapper>
      <FlexWrapper flexStart>
        <span>{name}</span>
      </FlexWrapper>
      <FlexWrapper limited>
        <LevelIndicator amount={amount} minAmount={minAmount} />
        <FlexWrapper flexCenter>
          <span className="margin">{`${amount}`}</span>
          <span>{unit}</span>
        </FlexWrapper>
        <FlexWrapper>
          <StyledButton
            icon={Minusicon}
            width="40px"
            height="30px"
            onClick={() => decreaseAmount(category, id)}
          />
          <StyledButton
            icon={Plusicon}
            width="40px"
            height="30px"
            right
            onClick={() => increaseAmount(category, id)}
          />
        </FlexWrapper>
      </FlexWrapper>
      <FlexWrapper flexEnd>
        <StyledButtonIcon
          iconactivator={shopList.toString()}
          icon={AddShoppingCart}
          iconActive={AddedShoppingCart}
          width="45px"
          height="45px"
          onClick={() => toggleShopList(category, id)}
        />
        <StyledButtonIcon
          icon={Delete}
          width="45px"
          height="45px"
          onClick={() => removeProduct(category, id)}
        />
      </FlexWrapper>
    </Wrapper>
  </>
);

const mapDispatchToProps = (dispatch) => ({
  removeProduct: (productCategory, id) => dispatch(removeProductAction(productCategory, id)),
  increaseAmount: (productCategory, id) => dispatch(increaseAmountAction(productCategory, id)),
  decreaseAmount: (productCategory, id) => dispatch(decreaseAmountAction(productCategory, id)),
  toggleShopList: (productCategory, id) => dispatch(toggleShopListAction(productCategory, id)),
});

Product.propTypes = {
  name: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  unit: PropTypes.string.isRequired,
  minAmount: PropTypes.number,
  category: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  shopList: PropTypes.bool.isRequired,
  removeProduct: PropTypes.func.isRequired,
  increaseAmount: PropTypes.func.isRequired,
  decreaseAmount: PropTypes.func.isRequired,
  toggleShopList: PropTypes.func.isRequired,
};

Product.defaultProps = {
  minAmount: 0,
};

export default connect(null, mapDispatchToProps)(Product);
