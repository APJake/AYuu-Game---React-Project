import { combineReducers } from "redux";
import summaryReducer from "./summaryReducer";
import usersReducer from "./usersReducer";
import transactionsReducer from "./transactionsReducer";

export default combineReducers({
    summary: summaryReducer,
    users: usersReducer,
    history: transactionsReducer,
});
