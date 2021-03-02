import { fetch } from "./csrf";

const LOAD = "search/LOAD";

const load = search => ({
    type: LOAD,
    search,
});

export const getSearchedProducts = (item) => async dispatch => {
    const res = await fetch(`/api/search/${item}`);
    if (res.ok) {
        dispatch(load(res.data));
    }
}

const searchReducer = (state = [], action) => {
    switch(action.type) {
        case LOAD: {
            return action.search
        }
        default:
        return state;
    }
};

export default searchReducer;
