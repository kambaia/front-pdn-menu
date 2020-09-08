import { STATE_SELECT_AXE_OPTION, STATE_UNSELECT_AXE_OPTION } from "../utils/states";

export const selectAxeOption = option => {
    return dispatch => {

        if (option) {
            dispatch({ type: STATE_SELECT_AXE_OPTION })
        } else {
            dispatch({ type: STATE_UNSELECT_AXE_OPTION })
        }
    };
};