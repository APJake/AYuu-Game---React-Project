import { GET_USER_TRANSACTIONS, SET_LOADING } from "../types";

const initialState = {
    history: {},
    loading: true,
};

export default function userHistoryReducer(state = initialState, action) {
    switch (action.type) {
        case SET_LOADING:
            return {
                ...state,
                history: {},
                loading: true,
            };
        case GET_USER_TRANSACTIONS:
            return {
                ...state,
                history: action.payload,
                loading: false,
            };
        default:
            return state;
    }
}
