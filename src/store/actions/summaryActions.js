import { GET_SUMMARY, SUMMARY_ERROR } from "../types";
import axios from "axios";
import { BASE_URL } from "../../utils/Constants";

export const getSummary = () => async (dispatch) => {
    try {
        const res = await axios.get(`${BASE_URL}//transactions/summary`);
        dispatch({
            type: GET_SUMMARY,
            payload: res.data,
        });
    } catch (e) {
        dispatch({
            type: SUMMARY_ERROR,
            payload: console.log(e),
        });
    }
};
