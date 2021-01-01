import { fetch } from "./csrf";

const LOAD = "coffeePage/LOAD";

const load = list => ({
    type: LOAD,
    list,
});

export const getPage = (id) => async dispatch => {
    const res = await fetch(`/api/products/${id}`);
    if (res.ok) {
        dispatch(load(res.data));
    }
}

const initialState = {
   name: "coffee"
};

const coffeePageReducer = (state = initialState, action) => {
    switch(action.type) {
        case LOAD: {
            return action.list
        }
        default:
        return state;
    }
};

export default coffeePageReducer;
