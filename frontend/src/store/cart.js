import { fetch } from "./csrf";

const ADD_ITEM = "cart/ADD_ITEM";
const REMOVE_ITEM = "cart/REMOVE_ITEM";
const RESET = "cart/RESET";
const LOAD = "cart/LOAD";

const loadCart = (cartItems) => {
    return {
        type: LOAD,
        cartItems
    }
}

export const addItem = (product) => {
    return {
        type: ADD_ITEM,
        product
    };
};

export const removeItem = (productId) => {
    return {
        type: REMOVE_ITEM,
        productId
    };
};

export const reset = () => {
    return {
        type: RESET
    }
};

export const getCart = () => async(dispatch) => {
    const res = await fetch(`/api/cart`);
    if (res.ok) {
        dispatch(loadCart(res.data));
    }
}

export const addToCart = (productId, userId) => async(dispatch) => {
    const res = await fetch(`/api/cart/${productId}`, {
        method: "POST",
        body: JSON.stringify({
            userId,
        })
    });
    dispatch(addItem(res.data))
}

const initialState = {
    userId: 0,
    products: []
};


export default function cartReducer(state = initialState, action) {
    switch(action.type) {
        case LOAD: {
            return {
                ...state,
                products: action.cartItems,
                userId: 0
            }
        }
        case ADD_ITEM: {
            return {
                ...state,
                product: [...state.products, action.product]
            }
        }
        default:
        return state;
    }
}
