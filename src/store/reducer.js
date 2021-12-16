import { ADD_FRIEND } from "./types";
const initialState = {
    friend: []
};

export const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FRIEND:
            return { ...state, friend: [...state.friend, action.payload] };
        default:
            return state;
    }
}