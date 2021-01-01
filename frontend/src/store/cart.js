import { fetch } from "./csrf";

const ADD_ITEM = "cart/ADD_ITEM";
const REMOVE_ITEM = "cart/REMOVE_ITEM";
const UPDATE_COUNT = "cart/UPDATE_COUNT";
const RESET = "cart/RESET";
const LOAD = "cart/LOAD";

const loadCart = (cart) => {
    return {
        type: LOAD,
        cart: cart
    }
}

export const addItem = (productId) => {
    return {
        type: ADD_ITEM,
        productId
    };
};

export const updateCount = (productId, count) => {
    if (count < 1) return removeItem(productId);
    return {
        type: UPDATE_COUNT,
        productId,
        count
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

export const getCart = (id) => async dispatch => {
    const res = await fetch(`/api/cart/${id}`);
    if (res.ok) {
        dispatch(loadCart(res.data));
    }
}

const initialState = {
    userId: 0,
    Product: []
};


export default function cartReducer(state = initialState, action) {
    switch(action.type) {
        case LOAD: {
            return {
                ...state,
                Product: action.Product,
                userId: 0
            }
        }
        default:
        return state;
    }
}
