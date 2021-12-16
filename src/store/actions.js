import { ADD_FRIEND } from "./types";

export const addFriend = (friend) => (dispatch) => {
    dispatch({
        type: ADD_FRIEND,
        payload: friend,
    });
};