import units from '../data/units';

const initialState = {
  inventory: {
    bread: [
      {
        id: '1',
        category: 'bread',
        name: 'Chleb Sądecki',
        amount: 1.5,
        unit: units[0],
        minAmount: 0.6,
        inventoryList: true,
        shopList: false,
      },
    ],
    cheese: [
      {
        id: '2',
        category: 'cheese',
        name: 'Ser biały',
        amount: 26,
        unit: units[3],
        minAmount: 20,
        inventoryList: true,
        shopList: false,
      },
    ],
    meat: [
      {
        id: '3',
        category: 'meat',
        name: 'Kurczak',
        amount: 500,
        unit: units[2],
        minAmount: 300,
        inventoryList: true,
        shopList: false,
      },
    ],
    seafood: [],
    vegetables: [
      {
        id: '4',
        category: 'vegetables',
        name: 'Seler',
        amount: 1.5,
        unit: units[0],
        minAmount: 1,
        inventoryList: true,
        shopList: false,
      },
      {
        id: '5',
        category: 'vegetables',
        name: 'Marchewka',
        amount: 1.5,
        unit: units[1],
        minAmount: 1,
        inventoryList: true,
        shopList: false,
      },
    ],
    fruits: [],
    cans: [],
    spices: [],
    sweets: [],
    beverages: [],
  },
  shopList: [
    {
      id: '6',
      category: 'bread',
      name: 'Kajzerka',
      amount: 5,
      unit: units[0],
      minAmount: 0,
      inventoryList: false,
      shopList: true,
    },
    {
      id: '7',
      category: 'cans',
      name: 'Pomidory Pelati',
      amount: 2,
      unit: units[0],
      minAmount: 0,
      inventoryList: false,
      shopList: true,
    },
  ],
};

const productReducer = (state = initialState.inventory, action) => {
  switch (action.type) {
    case 'ADD_PRODUCT':
      return {
        ...state,
        [action.payload.productCategory]: [
          ...state[action.payload.productCategory],
          action.payload.product,
        ],
      };
    case 'REMOVE_PRODUCT': {
      const newState = {
        ...state,
        [action.payload.productCategory]: [
          ...state[action.payload.productCategory].filter(
            (product) => product.id !== action.payload.id,
          ),
        ],
      };
      return newState;
    }
    case 'INCREASE_AMOUNT': {
      const productIndex = state[action.payload.productCategory].findIndex(
        (product) => product.id === action.payload.id,
      );
      const newState = {
        ...state,
        [action.payload.productCategory]: [
          ...state[action.payload.productCategory].map((product, i) =>
            i === productIndex ? { ...product, amount: product.amount + 1 } : product,
          ),
        ],
      };
      return newState;
    }
    case 'DECREASE_AMOUNT': {
      const productIndex = state[action.payload.productCategory].findIndex(
        (product) => product.id === action.payload.id,
      );

      const calculateAmount = (product) => {
        const result = product.amount - 1 > 0 ? product.amount - 1 : product.amount;
        return result;
      };

      const newState = {
        ...state,
        [action.payload.productCategory]: [
          ...state[action.payload.productCategory].map((product, i) =>
            i === productIndex ? { ...product, amount: calculateAmount(product) } : product,
          ),
        ],
      };
      return newState;
    }
    default:
      return state;
  }
};

const shopListReducer = (state = initialState.shopList, action) => {
  switch (action.type) {
    case 'REMOVE_SHOP_PRODUCT': {
      return state.filter((product) => product.id !== action.payload.id);
    }
    case 'ADD_SHOP_PRODUCT': {
      return [...state, action.payload.product];
    }
    default:
      return state;
  }
};

const connectionReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_SHOP_LIST': {
      const [toggledProduct] = [
        ...state.inventory[action.payload.productCategory].filter(
          (product) => product.id === action.payload.id,
        ),
      ];

      const newState = !toggledProduct.shopList
        ? {
            ...state,
            inventory: {
              ...state.inventory,
              [action.payload.productCategory]: [
                ...state.inventory[action.payload.productCategory].map((product) =>
                  product.id === action.payload.id
                    ? { ...product, shopList: !product.shopList }
                    : product,
                ),
              ],
            },
            shopList: [
              ...state.shopList,
              { ...toggledProduct, shopList: !toggledProduct.shopList },
            ],
          }
        : {
            ...state,
            inventory: {
              ...state.inventory,
              [action.payload.productCategory]: [
                ...state.inventory[action.payload.productCategory].map((product) =>
                  product.id === action.payload.id
                    ? { ...product, shopList: !product.shopList }
                    : product,
                ),
              ],
            },
            shopList: state.shopList.filter((product) => product.id !== action.payload.id),
          };

      return newState;
    }
    case 'REMOVE_SHOP_PRODUCT': {
      const [removedProduct] = [
        ...state.shopList.filter((product) => product.id === action.payload.id),
      ];

      const newState = removedProduct.inventoryList
        ? {
            inventory: {
              ...state.inventory,
              [action.payload.productCategory]: [
                ...state.inventory[action.payload.productCategory].map((product) =>
                  product.id === action.payload.id
                    ? { ...product, shopList: !product.shopList }
                    : product,
                ),
              ],
            },
            shopList: shopListReducer(state.shopList, action),
          }
        : {
            inventory: { ...state.inventory },
            shopList: shopListReducer(state.shopList, action),
          };

      return newState;
    }
    default:
      return {
        inventory: productReducer(state.inventory, action),
        shopList: shopListReducer(state.shopList, action),
      };
  }
};

const rootReducer = (state = initialState, action) => {
  return {
    ...connectionReducer(state, action),
  };
};

export default rootReducer;
