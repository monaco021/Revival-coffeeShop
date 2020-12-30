import { fetch } from "./csrf";

const LOAD = "product/LOAD";

const load = list => ({
    type: LOAD,
    list,
});

export const getProduct = () => async dispatch => {
    const res = await fetch("/api/products");
    // console.log(res);
    if (res.ok) {
        dispatch(load(res.data));
    }
}

const initialState = {
    list: []
};

const productReducer = (state = initialState, action) => {
    switch(action.type) {
        case LOAD: {
            return {
                ...state,
                list: [...action.list]
            }
        }
        default:
        return state;
    }
};

export default productReducer;
