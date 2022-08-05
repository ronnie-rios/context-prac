

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