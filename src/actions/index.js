export const removeProduct = (productCategory, id) => {
  return {
    type: 'REMOVE_PRODUCT',
    payload: {
      productCategory,
      id,
    },
  };
};

export const addProduct = (productCategory, productContent, modalType) => {
  const getId = () => {
    return `_${Math.random().toString(36).substr(2, 9)}`;
  };
  // const actionType = key === 'INVENTORY' ? 'ADD_PRODUCT' : null;
  const actionType = modalType === 'INVENTORY' ? 'ADD_PRODUCT' : 'ADD_SHOP_PRODUCT';
  return {
    type: actionType,
    payload: {
      productCategory,
      product: { ...productContent, id: getId(), invetoryList: true, shopList: false },
    },
  };
};

export const increaseAmount = (productCategory, id) => {
  return {
    type: 'INCREASE_AMOUNT',
    payload: {
      productCategory,
      id,
    },
  };
};

export const decreaseAmount = (productCategory, id) => {
  return {
    type: 'DECREASE_AMOUNT',
    payload: {
      productCategory,
      id,
    },
  };
};

export const removeShopProduct = (productCategory, id) => {
  return {
    type: 'REMOVE_SHOP_PRODUCT',
    payload: {
      productCategory,
      id,
    },
  };
};

export const toggleShopList = (productCategory, id) => {
  return {
    type: 'TOGGLE_SHOP_LIST',
    payload: {
      productCategory,
      id,
    },
  };
};
