import { fetch } from "./csrf";

//need to rethink this cart, should be decontrusted fully and easily accesbile for react elements
//otherwise users will need to do a hard rest on page to see what's added or deleted 
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

export const removeFromCart = (cartId) => async(dispatch) => {
    const res = await fetch(`/api/cart/${cartId}`, {
        method: 'DELETE'
    });
    dispatch(removeItem(res.data));
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
        case REMOVE_ITEM:
            const newState = {...state}
            delete newState[action.productId]
            return newState

        default:
        return state;
    }
}
