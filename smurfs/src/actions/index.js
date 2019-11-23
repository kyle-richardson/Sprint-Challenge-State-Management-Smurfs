import axios from "axios"

export const CHANGE_QUERY = 'CHANGE_QUERY'
export const HANDLE_SEARCH = 'HANDLE_SEARCH'
export const HANDLE_CHANGE = 'HANDLE_CHANGE'
export const FETCH_LIST_START = 'FETCH_LIST_START'
export const FETCH_LIST_SUCCESS = 'FETCH_LIST_SUCCESS'
export const FETCH_LIST_FAIL = 'FETCH_LIST_FAIL'
export const REFRESH_LIST = 'REFRESH_LIST'
export const ADD_SMURF_FAILURE = 'ADD_SMURF_FAILURE'
export const ADD_SMURF_START = 'ADD_SMURF_START'
export const ADD_SMURF_SUCCESS = 'ADD_SMURF_SUCCESS'

export const getList = () => dispatch => {
    console.log("start get List")
    dispatch({ type: FETCH_LIST_START });
    axios
      .get('localhost:3333/smurfs')
      .then(res => {
        console.log(res)
        dispatch({ type: FETCH_LIST_SUCCESS, payload: res.data})
      })
      .catch(err => dispatch({ type: FETCH_LIST_FAIL, payload: err }));
  };

export const addSmurf = () => dispatch => {
  const newSmurf = {
      name: 'Kyle',
      age: 200,
      height: '10cm'
  }
  dispatch({ type: ADD_SMURF_START });
    axios
      .post('localhost:3333/smurfs', newSmurf)
      .then(res=>{
        console.log(res)
        dispatch({type: ADD_SMURF_SUCCESS})
      })
      .catch(err => dispatch({ type: ADD_SMURF_FAILURE, payload: err }));
  };

export const handleSearch = search => ({
    type: HANDLE_SEARCH,
    payload: search
})

export const handleChange = event => ({
    type: HANDLE_CHANGE,
    payload: event.target
})

export const refreshList = ()=> ({
    type: REFRESH_LIST
})
