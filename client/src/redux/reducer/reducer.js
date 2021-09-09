import {
    SET_MODE_REQUEST,
    SET_MODE_SUCCESS,
    SET_MODE_FAIL
} from "../consts";

const initialState = {
    loading: false,
    mode:  localStorage.getItem("mode"),
};

export default function (state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case SET_MODE_REQUEST:
            return {
            ...state,
            loading: true,
        };
        case SET_MODE_SUCCESS:
            localStorage.setItem("mode", payload);
            console.log(payload)
            return{
                ...state,
                ...payload,
                loading: false,
                mode: localStorage.getItem("mode")
        }
        case SET_MODE_FAIL:
            return {
            ...state,
            loading: false,
            mode: false,
        };
        default:
            return state;
    }
}
