import { combineReducers } from 'redux';
import _ from 'lodash';

const loading = (state: boolean = false, action) => {
    if (action.type === "CHANGE_LOADING") {
        return action.payload;
    } else {
        return state;
    }
}

const scan_bridge_list = (state: Array<any> = [], action) => {
    if (action.type === "SEARCH_BRIDGE") {
        return action.payload;
    } else {
        return state;
    }
}


export default combineReducers({
    loading,
    scan_bridge_list
})