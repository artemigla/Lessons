import { ADD_FRIEND, REMOVE_FRIEND } from "./types";
const initialState = {
    friend: []
};

export const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FRIEND:
            return { ...state, friend: [...state.friend, action.payload] };
        case REMOVE_FRIEND:
            return { ...state, friend: state.friend.filter((removeFriend) => removeFriend.id !== action.payload.id) }
        default:
            return state;
    }
}