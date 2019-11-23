import { HANDLE_SEARCH, 
    HANDLE_CHANGE, 
    FETCH_LIST_FAIL, 
    FETCH_LIST_SUCCESS, 
    FETCH_LIST_START, 
    REFRESH_LIST,
    ADD_SMURF_FAILURE,
    ADD_SMURF_START,
    ADD_SMURF_SUCCESS,
    DELETE_SMURF_FAILURE,
    DELETE_SMURF_SUCCESS,
    DELETE_SMURF_START,
    EDIT_SMURF_FAILURE,
    EDIT_SMURF_SUCCESS,
    EDIT_SMURF_START} 
from "../actions"

const initialState = {
    smurfList: [],
    isFetching: false,
    error: '',
    isAdding: false,
    isEditing: false,
    isDeleting: false,
    newSmurf: {},
    editSmurf: {}

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
            isAdding: false,
            smurfList: payload
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
            [payload.name]: payload.value
           }
    case REFRESH_LIST:
        return {
            ...state,
        }
    case DELETE_SMURF_START:
        return {
            ...state,
            isDeleting: true,
        }
    case DELETE_SMURF_FAILURE:
        return {
            ...state,
            isDeleting: false,
            error: payload
        }
    case DELETE_SMURF_SUCCESS:
        return {
            ...state,
            isDeleting: false,
            smurfList: payload
        }
    case EDIT_SMURF_START:
        return {
            ...state,
            isEditing: true,
            editSmurf: state.smurfList.find(ele=> ele.id.toString()===`${payload}`)
        }
    case EDIT_SMURF_FAILURE:
        return {
            ...state,
            isEditing: false,
            error: payload
        }
    case EDIT_SMURF_SUCCESS:
        return {
            ...state,
            isEditing: false,
        }
    default: 
        return state
}
}
