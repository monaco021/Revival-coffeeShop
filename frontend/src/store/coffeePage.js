import { fetch } from "./csrf";

const LOAD = "coffeePage/LOAD";

const load = list => ({
    type: LOAD,
    list,
});

export const getPage = (id) => async dispatch => {
    const res = await fetch(`/api/products/${id}`);
    if (res.ok) {
        const page = res.json()
        dispatch(load(page));
    }
}

const initialState = {
    Product: []
};

const coffeePageReducer = (state = initialState, action) => {
    switch(action.type) {
        case LOAD: {
            return {
                ...state,
                Product: [...action.Product]
            }
        }
        default:
        return state;
    }
};

export default coffeePageReducer;
