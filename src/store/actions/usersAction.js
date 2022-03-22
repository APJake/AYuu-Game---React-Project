import {
    GET_USERS,
    GET_USER_TRANSACTIONS,
    SET_LOADING,
    USERS_ERROR,
} from "../types";
import axios from "axios";
import { BASE_URL } from "../../utils/Constants";

export const getUsers = () => async (dispatch) => {
    try {
        dispatch({
            type: SET_LOADING,
            payload: null,
        });
        const res = await axios.get(
            `${BASE_URL}/users?sort[dinger]=-1&filter[dinger][$ne]=0`
        );
        dispatch({
            type: GET_USERS,
            payload: res.data,
        });
    } catch (e) {
        dispatch({
            type: USERS_ERROR,
            payload: console.log(e),
        });
    }
};

export const getUserHistory = (userId) => async (dispatch) => {
    try {
        dispatch({
            type: SET_LOADING,
            payload: null,
        });
        const res = await axios.get(
            `${BASE_URL}/users/history/${userId}`
            // `https://ayuu-game.herokuapp.com/api/users/history/${userId}`
        );
        dispatch({
            type: GET_USER_TRANSACTIONS,
            payload: res.data,
        });
    } catch (error) {
        dispatch({
            type: USERS_ERROR,
            payload: console.log(error),
        });
    }
};
