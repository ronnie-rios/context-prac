export const ADD_PRODUCT = "ADD_PRODUCT";
export const REMOVE_PRODUCT = "REMOVE_PRODUCT";

const addProductToCart = (product, state) => {
  const updatedCart = [...state.cart];
  const updatedItemIndex = updatedCart.findIndex(
    item => item.id === product.id
  );

  if (updatedItemIndex < 0) {
    updatedCart.push({ ...product, quantity: 1 });
  } else {
    const updatedItem = {
      ...updatedCart[updatedItemIndex]
    };
    updatedItem.quantity++;
    updatedCart[updatedItemIndex] = updatedItem;
  }
  return { ...state, cart: updatedCart };
};


const productReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_PRODUCT':
            return {
                ...state,
                cart: action.payload
            }
        case 'CLEAR_CART':
            return {
                ...state,
                cart: []
            }
        default:
            return state
    }
};

export default productReducer;