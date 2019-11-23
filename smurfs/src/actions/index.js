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
export const DELETE_SMURF_START = 'DELETE_SMURF_START'
export const DELETE_SMURF_FAILURE = 'DELETE_SMURF_FAILURE'
export const DELETE_SMURF_SUCCESS = 'DELETE_SMURF_SUCCESS'
export const EDIT_SMURF_START = 'EDIT_SMURF_START'
export const EDIT_SMURF_FAILURE = 'EDIT_SMURF_FAILURE'
export const EDIT_SMURF_SUCCESS = 'EDIT_SMURF_SUCCESS'

export const getList = () => dispatch => {
    dispatch({ type: FETCH_LIST_START });
    axios
      .get('http://localhost:3333/smurfs')
      .then(res => {
        console.log(res)
        dispatch({ type: FETCH_LIST_SUCCESS, payload: res.data})
      })
      .catch(err => dispatch({ type: FETCH_LIST_FAIL, payload: err }));
  };

export const addSmurf = event => dispatch => {
  event.preventDefault()
  
  dispatch({ type: ADD_SMURF_START });
  const newSmurf = {
    name: event.target[0].value,
    age: event.target[1].value,
    height: event.target[2].value
}
    axios
      .post('http://localhost:3333/smurfs', newSmurf)
      .then(res=>{
        console.log(res)
        dispatch({type: ADD_SMURF_SUCCESS, payload: res.data})
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

export const handleDelete = event => dispatch => {
  console.log(event.target)
  const id = event.target.getAttribute('name')
  dispatch({ type: DELETE_SMURF_START });
  axios
    .delete(`http://localhost:3333/smurfs/${id}`)
    .then(res => {
      console.log(res)
      dispatch({ type: DELETE_SMURF_SUCCESS, payload: res.data})
    })
    .catch(err => dispatch({ type: DELETE_SMURF_FAILURE, payload: err }));
};

export const startEdit = event => ({
  type: EDIT_SMURF_START,
  payload: event.target.getAttribute('name')
})

export const handleEdit = event => dispatch => {
  event.preventDefault()
  const id = event.target.getAttribute('name')
  const changed = {
    name: event.target[0].value,
    age: event.target[1].value,
    height: event.target[2].value
  }
  axios
    .put(`http://localhost:3333/smurfs/${id}`, changed)
    .then(res => {
      console.log(res)
      dispatch({ type: EDIT_SMURF_SUCCESS, payload: res.data})
    })
    .catch(err => dispatch({ type: EDIT_SMURF_FAILURE, payload: err }));
};
