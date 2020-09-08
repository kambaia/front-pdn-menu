import { STATE_SELECT_AXE_OPTION, STATE_UNSELECT_AXE_OPTION } from "../utils/states";

const INITIAL_STATE = {
    axe_selected: false
}

const configReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
    case STATE_SELECT_AXE_OPTION:
        return { ...state, axe_selected: true };

    case STATE_UNSELECT_AXE_OPTION:
        return { ...state, axe_selected: false };
    
    default:
        return state;
    }
};

export default configReducer;