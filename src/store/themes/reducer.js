import { DARK_THEME } from "./types";
import { Appearance } from "react-native";

const defaultTheme = Appearance.getColorScheme();
const initialState = {
    theme: defaultTheme
}

export const ThemeReducer = (state = initialState, action) => {
    switch (action.type) {
        case DARK_THEME:
            return { ...state, theme: action.payload }
        default:
            return state
    }
}