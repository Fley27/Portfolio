import {
    SEND_MESSAGE_REQUEST,
    SEND_MESSAGE_SUCCESS,
    SEND_MESSAGE_FAIL,
    LINK
} from "../consts";

import axios from "axios";
import { setAlert } from "./alert";

export const sendEmail = (emails) => async (dispatch) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
        },
    };

    dispatch({
        type:  SEND_MESSAGE_REQUEST,
    });
    
    try {
        const res = await axios.post(
            `${LINK}/email`,
            emails, 
            config
        );      
        alert("OK")
        dispatch({
            type: SEND_MESSAGE_SUCCESS,
            payload: res.data
        });
        dispatch(setAlert(res.data.msg, "success"));
    } catch (error) {
        dispatch({
            type: SEND_MESSAGE_FAIL,
        });
        dispatch(setAlert("Request Failed, Try later.", "error"));
    }
};