import { combineReducers } from "redux";
import reducer from "./reducer";
import alert from "./alert";
import email from "./email";

export default combineReducers({
    reducer,
    alert,
    email
});