import { HANDLE_SEARCH, 
    HANDLE_CHANGE, 
    FETCH_LIST_FAIL, 
    FETCH_LIST_SUCCESS, 
    FETCH_LIST_START, 
    REFRESH_LIST,
    ADD_SMURF_FAILURE,
    ADD_SMURF_START,
    ADD_SMURF_SUCCESS} 
from "../actions"

const initialState = {
    smurfList: [],
    isFetching: false,
    error: '',
    isAdding: false

}

export const rootReducer = (state = initialState, {type, payload})=> {
switch (type) {
    case FETCH_LIST_START:
        return {
            ...state,
            error: '',
            isFetching: true
        }
    case FETCH_LIST_FAIL:
        return {
            ...state,
            error: payload,
            isFetching: false
        }
    case FETCH_LIST_SUCCESS:
        return {
            ...state,
            smurfList: payload
        }
    case ADD_SMURF_START:
        return {
            ...state,
            isAdding: true
        }
    case ADD_SMURF_SUCCESS:
        return {
            ...state,
            isAdding: false
        }
    case ADD_SMURF_FAILURE:
        return {
            ...state,
            error: payload,
            isAdding: false
        }
    case HANDLE_SEARCH:
        return {
            ...state,
        }
    case HANDLE_CHANGE:
        return {
            ...state,
           }
    case REFRESH_LIST:
        return {
            ...state,
        }
    default: 
        return state
}
}
