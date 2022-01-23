import { DARK_THEME } from "./types";
export const toggleTheme = (theme) => (dispatch) => {
    return dispatch({
        type: DARK_THEME,
        payload: theme
    })
}