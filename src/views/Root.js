import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../store/index';
import MainTemplate from '../templates/MainTemplate';
import Category from './Category';
import Modal from '../components/molecules/Modal/Modal';
import categories from '../data/categories';

class Root extends Component {
  state = {
    isModalOpen: false,
    modalType: '',
  };

  openModal = (type) => {
    this.setState({ isModalOpen: true });
    this.setState({ modalType: type });
  };

  closeModal = () => {
    this.setState({ isModalOpen: false });
  };

  renderModal = () => {
    switch (this.state.modalType) {
      case 'INVENTORY': {
        return <Modal closeModalFn={this.closeModal} modalType={this.state.modalType} />;
      }
      case 'SHOP_LIST':
        return <Modal closeModalFn={this.closeModal} modalType={this.state.modalType} />;
      default:
        return undefined;
    }
  };

  render() {
    const { isModalOpen } = this.state;

    return (
      <Provider store={store}>
        <BrowserRouter>
          <MainTemplate openModalFn={this.openModal}>
            <>
              <Switch>
                <Route
                  exact
                  path="/"
                  component={() => <Category openModalFn={this.openModal} />}
                  key=""
                />
                {categories.map((category) => {
                  const path = `/${category.name}`;
                  return (
                    <Route
                      path={path}
                      component={() => <Category openModalFn={this.openModal} />}
                      key={path.substr(1)}
                    />
                  );
                })}
              </Switch>
              {isModalOpen && this.renderModal()}
            </>
          </MainTemplate>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default Root;
