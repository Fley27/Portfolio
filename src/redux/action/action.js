import {
    SET_MODE_REQUEST,
    SET_MODE_SUCCESS,
    SET_MODE_FAIL
} from "../consts";

export const setMode = (item) => async (dispatch) => {
    
    dispatch({
        type:  SET_MODE_REQUEST,
    });
    try {
        dispatch({
            type: SET_MODE_SUCCESS,
            payload: item,
        });
    } catch (error) {
        dispatch({
            type: SET_MODE_FAIL,
        });
    }
};