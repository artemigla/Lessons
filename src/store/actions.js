import { ADD_FRIEND, REMOVE_FRIEND } from "./types";

export const addFriend = (friend) => (dispatch) => {
    dispatch({
        type: ADD_FRIEND,
        payload: friend,
    });
};

export const removeFriend = (friend) => (dispatch) => {
    dispatch({
        type: REMOVE_FRIEND,
        payload: friend
    })
}