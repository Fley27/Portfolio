import {
    SEND_MESSAGE_REQUEST,
    SEND_MESSAGE_SUCCESS,
    SEND_MESSAGE_FAIL,
    LINK
} from "../consts";

const initialState = {
    loading: false,
    msg:  "",
};

export default function (state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case SEND_MESSAGE_REQUEST:
            return {
            ...state,
            loading: true,
            msg: "",
        };
        case SEND_MESSAGE_SUCCESS:
            return{
                ...state,
                ...payload,
                loading: false,
                msg: payload.msg
        }
        case SEND_MESSAGE_FAIL:
            return {
            ...state,
            loading: false,
            msg: "",
        };
        default:
            return state;
    }
}
