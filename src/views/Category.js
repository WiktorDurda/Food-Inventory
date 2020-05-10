import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Heading from '../components/atoms/Heading/Heading';
import Product from '../components/molecules/Product/Product';
import ButtonIcon from '../components/atoms/ButtonIcon/ButtonIcon';
import AddItemIcon from '../assets/icons/AddItemIcon.svg';
// import categories from '../data/categories';
// import units from '../data/units';

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

class Category extends Component {
  state = {
    currentPage: 'namePage',
    currentCategories: [],
  };

  componentDidMount() {
    this.setCurrentCategories();
  }

  componentDidUpdate() {
    this.setCurrentCategories();
  }

  setCurrentCategories() {
    const currentLocation = this.props.location.pathname.substr(1);
    if (this.state.currentPage !== currentLocation) {
      if (!currentLocation) {
        this.setState({
          currentPage: currentLocation,
          currentCategories: Object.keys(this.props.stateInventory.inventory),
        });
      } else {
        this.setState({
          currentPage: currentLocation,
          currentCategories: [currentLocation],
        });
      }
    }
  }

  renderProducts() {
    return this.state.currentCategories.map((category) =>
      this.props.stateInventory.inventory[category].map((product) => (
        <Product
          name={product.name}
          amount={product.amount}
          unit={product.unit}
          minAmount={product.minAmount}
          category={product.category}
          id={product.id}
          shopList={product.shopList}
          key={product.id}
        />
      )),
    );
  }

  render() {
    const { openModalFn } = this.props;
    const categoryName = this.state.currentPage;

    return (
      <>
        <StyledWrapper>
          <Heading smallCaps>{categoryName || 'all'}</Heading>
          <StyledListWrapper>
            {this.renderProducts()}
            <StyledButtonIcon icon={AddItemIcon} onClick={()=>(openModalFn("INVENTORY"))} />
          </StyledListWrapper>
        </StyledWrapper>
      </>
    );
  }
}

const mapStateInventoryToProps = (stateInventory) => {
  return { stateInventory };
};

Category.propTypes = {
  openModalFn: PropTypes.func.isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default withRouter(connect(mapStateInventoryToProps)(Category));
