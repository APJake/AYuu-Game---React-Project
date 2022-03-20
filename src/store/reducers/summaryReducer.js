import { GET_SUMMARY } from "../types";

const initialState = {
    summary: [],
    loading: true,
};

export default function summaryReducer(state = initialState, action) {
    switch (action.type) {
        case GET_SUMMARY:
            return {
                ...state,
                summary: action.payload,
                loading: false,
            };
        default:
            return state;
    }
}
